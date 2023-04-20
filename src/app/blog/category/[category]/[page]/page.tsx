import { notFound } from 'next/navigation';

import slugifyText from '@/utils/slugify-text';

import Posts from '@/components/pages/blog/posts';
import RelatedPosts from '@/components/pages/blog/related-posts';
import SubscribeCta from '@/components/pages/blog/subscribe-cta';
import BlogPostHero from '@/components/shared/blog-post-hero';

import { POSTS_PER_PAGE, getAllBlogPosts, getBlogPostsPerPage } from '@/lib/api-blog';

export default function BlogCategoryPage({
  params,
}: {
  params: { category: string; page: string };
}) {
  const { category } = params;
  const page = +params.page || 1;
  const data = getBlogPostsPerPage({ page, category });

  if (!data) return notFound();

  const { posts, tags, pageCount } = data;

  return (
    <>
      <BlogPostHero post={posts[0]} isBlogPost={false} />
      <RelatedPosts posts={posts.slice(1, 5)} />
      <SubscribeCta />
      <Posts posts={posts} tabs={tags} page={page} pageCount={pageCount} category={category} />
    </>
  );
}

export async function generateStaticParams() {
  const { posts } = getAllBlogPosts();

  const categoriesMap = posts.reduce((acc, { tags }) => {
    const slug = slugifyText(tags);
    return {
      ...acc,
      [slug]: acc[slug] ? acc[slug] + 1 : 1,
    };
  }, {});

  const result = [];
  for (const key in categoriesMap) {
    const countPagesInCategory = Math.ceil(categoriesMap[key] / POSTS_PER_PAGE);
    result.push({ category: [key] });
    for (let i = 2; i <= countPagesInCategory; i++) {
      result.push({ category: [key, i.toString()] });
    }
  }

  return result;
}

export const revalidate = 60;
