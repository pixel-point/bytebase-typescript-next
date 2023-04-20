import { parseLine } from '@/utils/docs';
import fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';

import { Breadcrumb, PostData, PreviousAndNextLinks, SidebarItem } from '@/types/docs';

const DOCS_DIR_PATH = 'content/docs';

const getPostSlugs = (): string[] => {
  const files = glob.sync(`${DOCS_DIR_PATH}/**/*.md`, {
    ignore: ['**/_layout.md'],
  });
  return files.map((file) => file.replace(DOCS_DIR_PATH, '').replace('.md', ''));
};

const getPostBySlug = (slug: string): { data: Record<string, any>; content: string } | null => {
  try {
    const source = fs.readFileSync(`${DOCS_DIR_PATH}/${slug}.md`);
    const { data, content } = matter(source);

    return { data, content };
  } catch (e) {
    return null;
  }
};

const getAllPosts = (): PostData[] => {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => {
      const postData = getPostBySlug(slug);
      if (!postData) return null;
      const slugWithoutFirstSlash = slug.slice(1);
      const { data, content } = postData;
      return {
        slug: slugWithoutFirstSlash,
        title: data.title,
        description: data.description,
        isDraft: data.isDraft,
        content,
      };
    })
    .filter(
      (item) => process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || !item?.isDraft,
    ) as PostData[];
};

function getSidebar(): { sidebar: SidebarItem[]; expandedList: string[] } {
  const layoutFile = glob.sync(`${DOCS_DIR_PATH}/_layout.md`);

  const sidebar: SidebarItem[] = [];

  const md = fs.readFileSync(layoutFile[0], 'utf-8');
  const { data, content } = matter(md);

  const lines = content.trim().split('\n');

  let currentSection: SidebarItem | null = null;

  lines.forEach((line) => {
    const [depth, title, url] = parseLine(line);

    if (depth !== null) {
      currentSection = { title, url, depth };
      sidebar.push(currentSection);
    } else if (currentSection && title) {
      currentSection.children = currentSection.children || [];
      currentSection.children.push({ title, url, depth: currentSection?.depth + 1 });
    }
  });

  return { sidebar: getNestedSidebar(sidebar), expandedList: data.expand_section_list };
}

function getNestedSidebar(data: SidebarItem[]): SidebarItem[] {
  for (let i = 0; i < data.length; i++) {
    const section = data[i];
    const nextSection = data[i + 1];

    if (nextSection && nextSection?.depth > section?.depth) {
      data.splice(i + 1, 1);
      section.children = section.children || [];
      section.children.push(nextSection);
      getNestedSidebar(section.children);
      i--;
    }
  }

  return data;
}

function getFlatSidebar(sidebar: SidebarItem[], path: number[] = []): SidebarItem[] {
  return sidebar.reduce((acc, item, index) => {
    const current = { title: item.title, url: item.url, depth: item.depth, path: [...path, index] };
    if (item.children) {
      return [...acc, current, ...getFlatSidebar(item.children, current.path)];
    }
    return [...acc, { ...item, path: [...path, index] }];
  }, [] as SidebarItem[]);
}

function getDocPreviousAndNextLinks(
  slug: string,
  flatSidebar: SidebarItem[],
): PreviousAndNextLinks {
  const items = flatSidebar.filter((item) => item.url);

  const currentItemIndex = items.findIndex((item) => item.url === slug);
  const previousItem = items[currentItemIndex - 1];
  const nextItem = items[currentItemIndex + 1];

  return { previousLink: previousItem, nextLink: nextItem };
}

const getBreadcrumbs = (slug: string, flatSidebar: SidebarItem[]): Breadcrumb[] => {
  const path = flatSidebar.find((item) => item.url === slug)?.path;
  const { sidebar } = getSidebar();

  const arr: Breadcrumb[] = [];

  if (path) {
    path.reduce((prev, cur) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const current = prev?.[cur] || prev?.children?.[cur];

      arr.push({ title: current.title, url: current.url });
      return current;
    }, sidebar as SidebarItem[] | SidebarItem);

    return arr.slice(0, -1);
  }

  return [];
};

export {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
  getSidebar,
  getFlatSidebar,
  getDocPreviousAndNextLinks,
  getBreadcrumbs,
};
