import fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';

const DOCS_DIR_PATH = 'content/docs';

const getPostSlugs = () => {
  const files = glob.sync(`${DOCS_DIR_PATH}/**/*.md`, {
    ignore: ['**/_layout.md'],
  });
  return files.map((file) => file.replace(DOCS_DIR_PATH, '').replace('.md', ''));
};

const getPostBySlug = (slug) => {
  try {
    const source = fs.readFileSync(`${DOCS_DIR_PATH}/${slug}.md`);
    const { data, content } = matter(source);

    return { data, content };
  } catch (e) {
    return null;
  }
};

const getAllPosts = () => {
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
    .filter((item) => process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || !item?.isDraft);
};

function getSidebar() {
  const layoutFile = glob.sync(`${DOCS_DIR_PATH}/_layout.md`);

  const sidebar = [];

  const md = fs.readFileSync(layoutFile[0], 'utf-8');
  const { content } = matter(md);
  const lines = content.trim().split('\n');

  let currentSection = null;

  lines.forEach((line) => {
    const [depth, title, url] = parseLine(line);

    if (depth !== null) {
      currentSection = { title, url, depth };
      sidebar.push(currentSection);
    }
  });

  return getNestedSidebar(sidebar);
}

function getNestedSidebar(data) {
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

function parseLine(line) {
  const match = line.match(/^#+\s*\[(.*?)\]\((.*?)\)$/);
  const matchWithoutLink = line.match(/^#+\s*(.*?)$/);

  if (match) {
    const depth = match[0].match(/^#+/)[0].length - 1;
    const title = match[1];
    const url = match[2];

    return [depth, title, url];
  } else if (matchWithoutLink) {
    const depth = matchWithoutLink[0].match(/^#+/)[0].length - 1;
    const title = matchWithoutLink[1];

    return [depth, title, null];
  } else {
    return [null, null, null];
  }
}
export { getPostSlugs, getPostBySlug, getAllPosts, getSidebar };
