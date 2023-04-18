import fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';

import { SidebarItem } from '@/types/sidebar';

const DOCS_DIR_PATH = 'content/docs';

interface PostData {
  slug: string;
  title: string;
  description: string;
  isDraft: boolean;
  content: string;
}

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
      currentSection.children.push({ title, url, depth: currentSection.depth + 1 });
    }
  });

  return { sidebar: getNestedSidebar(sidebar), expandedList: data.expand_section_list };
}

function getNestedSidebar(data: SidebarItem[]): SidebarItem[] {
  for (let i = 0; i < data.length; i++) {
    const section = data[i];
    const nextSection = data[i + 1];

    if (nextSection && nextSection.depth > section.depth) {
      data.splice(i + 1, 1);
      section.children = section.children || [];
      section.children.push(nextSection);
      getNestedSidebar(section.children);
      i--;
    }
  }

  return data;
}

function parseLine(line: string): [number | null, string | null, string | null] {
  const match = line.match(/^#+\s*\[(.*?)\]\((.*?)\)$/);
  const matchWithoutLink = line.match(/^#+\s*(.*?)$/);

  if (match) {
    const len = match[0]?.match(/^#+/)?.[0]?.length;
    const depth = len ? len - 1 : null;
    const title = match[1];
    const url = match[2];

    return [depth, title, url];
  } else if (matchWithoutLink) {
    const len = matchWithoutLink[0]?.match(/^#+/)?.[0]?.length;
    const depth = len ? len - 1 : null;
    const title = matchWithoutLink[1];

    return [depth, title, null];
  } else {
    return [null, null, null];
  }
}
export { getPostSlugs, getPostBySlug, getAllPosts, getSidebar };
