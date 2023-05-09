import type { NextApiRequest, NextApiResponse } from 'next';

import { getExcerpt } from '@/utils/get-excerpt';
import slugifyText from '@/utils/slugify-text';
import algoliasearch from 'algoliasearch';

import { getAllPosts } from '@/lib/api-docs';
import Route from '@/lib/route';

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY!,
);
const algoliaIndex = algoliaClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!);

type Hierarchy = {
  lvl0: string;
  lvl1: string | null;
  lvl2: string | null;
  lvl3: string | null;
  lvl4: string | null;
  lvl5: string | null;
  lvl6: string | null;
};

type AlgoliaIndexObject = {
  objectID: string | undefined;
  title: string;
  url: string;
  content: string;
  type: string;
  hierarchy: Hierarchy;
};

const getCategoryName = (categorySlug: string): string => {
  const categories: Record<string, string> = {
    cli: 'CLI',
    api: 'API',
    'how-to': 'How-To',
  };
  return categories[categorySlug] || 'Documentation';
};

const generateIndexElement = (
  url: string,
  content: string,
  heading: string,
  lastObject: AlgoliaIndexObject,
  recordId: number,
): AlgoliaIndexObject => {
  const level = heading.split(' ')[0].length || 1;
  const anchor = level <= 3 ? '#' + slugifyText(heading) : '';
  const resultUrl = anchor ? url + anchor : lastObject.url;
  const clearContent = getExcerpt({ content });

  const getHierarchyLevelValue = (currentLevel: number, targetLevel: number): string | null => {
    if (currentLevel < targetLevel) return null;
    if (currentLevel === targetLevel) return getExcerpt({ content: heading });

    const hierarchyKey = `lvl${targetLevel}` as keyof Hierarchy;
    return lastObject.hierarchy[hierarchyKey];
  };

  return {
    ...lastObject,
    objectID: `${resultUrl}${recordId}`,
    url: resultUrl,
    content: clearContent,
    type: clearContent !== '' ? 'content' : `lvl${level}`,
    hierarchy: {
      ...lastObject.hierarchy,
      lvl2: getHierarchyLevelValue(level, 2),
      lvl3: getHierarchyLevelValue(level, 3),
      lvl4: getHierarchyLevelValue(level, 4),
      lvl5: getHierarchyLevelValue(level, 5),
      lvl6: getHierarchyLevelValue(level, 6),
    },
  } as AlgoliaIndexObject;
};

type ResponseData = {
  message: string;
  error?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const docs = getAllPosts();

    const resultObj: AlgoliaIndexObject[] = [];

    docs.map(({ content, title, slug }) => {
      const category = getCategoryName(slug.split('/')[0]);
      const url = `${Route.DOCS}/${slug}/`;
      const cleanTitle = getExcerpt({ content: title });

      // update default data object on each new file
      let dataObject: AlgoliaIndexObject = {
        objectID: undefined,
        title: cleanTitle,
        url,
        type: 'lvl1',
        hierarchy: {
          lvl0: category,
          lvl1: cleanTitle,
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null,
        },
        content: '',
      };

      let textContent = '';
      let heading = '';
      let recordId = 0;
      content
        .split('\n')
        .filter((str) => str !== '')
        .forEach((line) => {
          if (!line.startsWith('#')) {
            textContent += line.trim() + ' ';
          } else {
            if (heading != '') {
              recordId++;
              dataObject = generateIndexElement(url, textContent, heading, dataObject, recordId);
              resultObj.push(dataObject);
            }
            heading = line;
            textContent = '';
          }
        });
      recordId++;
      dataObject = generateIndexElement(url, textContent, heading, dataObject, recordId);
      resultObj.push(dataObject);
    });

    algoliaIndex.setSettings({
      searchableAttributes: [
        'hierarchy.lvl0',
        'hierarchy.lvl1',
        'hierarchy.lvl2',
        'hierarchy.lvl3',
        'hierarchy.lvl4',
        'content',
        'url',
      ],
      attributesToSnippet: ['hierarchy.lvl0:20', 'content:20'],
      attributeForDistinct: 'url',
      distinct: 1,
      hitsPerPage: 20,
    });

    await algoliaIndex.clearObjects();
    await algoliaIndex.saveObjects(resultObj);
    res.status(200).json({ message: `Indexed ${resultObj.length} records to Algolia` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}
