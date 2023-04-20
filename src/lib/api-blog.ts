import slugifyText from '@/utils/slugify-text';
import fs from 'fs';
import matter from 'gray-matter';

import { BlogPost } from '@/types/blog-post';

import CONTENT_FOLDER from './content-folder';

const POSTS_PER_PAGE = 21;

interface BlogPostsWithTags {
  posts: BlogPost[];
  tags: string[];
}

const getAllBlogPosts = (): BlogPostsWithTags => {
  const files = fs.readdirSync(CONTENT_FOLDER.blog).filter((file) => file.endsWith('.md'));

  const tagsSet = new Set();

  const posts: BlogPost[] = files
    .map((file) => {
      const slug = file.replace('.md', '');
      const post = getBlogPostBySlug(slug);

      if (!post || post.tags === 'Tutorial' || post.tags.indexOf('Hidden') > -1) return null;

      post.tags.split(',').forEach((el) => {
        tagsSet.add(el.trim());
      });

      return {
        ...post,
      };
    })
    .filter((post) => Boolean(post))
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  return { posts, tags: Array.from(tagsSet) as string[] };
};

const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const markdownWithMeta = fs.readFileSync(CONTENT_FOLDER.blog + slug + '.md', 'utf-8');
  const { content, data } = matter(markdownWithMeta);

  if (!data || !content) return null;

  return {
    ...data,
    content,
    slug,
  } as BlogPost;
};

interface PostPerPageProps {
  page: number;
  category?: string;
}

const getBlogPostsPerPage = ({
  page,
  category = '',
}: PostPerPageProps): (BlogPostsWithTags & { pageCount: number }) | null => {
  const startIndex = (page - 1) * POSTS_PER_PAGE;

  const { posts, tags } = getAllBlogPosts();

  const result = posts
    .filter((el) => category === '' || category === slugifyText(el.tags))
    .slice(startIndex, startIndex + POSTS_PER_PAGE);

  if (result.length === 0) return null;

  return {
    pageCount: Math.ceil(result.length / POSTS_PER_PAGE),
    posts: result,
    tags,
  };
};

export { getAllBlogPosts, getBlogPostBySlug, getBlogPostsPerPage, POSTS_PER_PAGE };