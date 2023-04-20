import { notFound } from 'next/navigation';

import Posts from '@/components/pages/blog/posts';
import RelatedPosts from '@/components/pages/blog/related-posts';
import SubscribeCta from '@/components/pages/blog/subscribe-cta';
import BlogPostHero from '@/components/shared/blog-post-hero';

import { getBlogPostsPerPage } from '@/lib/api-blog';

export default async function Blog() {
  const data = getBlogPostsPerPage({ page: 1 });

  if (!data) return notFound();

  const { posts, tags, pageCount } = data;

  return (
    <>
      <BlogPostHero post={posts[0]} isBlogPost={false} />
      <RelatedPosts posts={posts.slice(1, 5)} />
      <SubscribeCta />
      <Posts posts={posts} tabs={tags} page={1} pageCount={pageCount} />
    </>
  );
}
