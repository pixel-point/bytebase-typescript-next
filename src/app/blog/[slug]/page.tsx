import { notFound } from 'next/navigation';

import Posts from '@/components/pages/blog/posts';
import RelatedPosts from '@/components/pages/blog/related-posts';
import SubscribeCta from '@/components/pages/blog/subscribe-cta';
import BlogPostHero from '@/components/shared/blog-post-hero';

import {
  POSTS_PER_PAGE,
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostsPerPage,
} from '@/lib/api-blog';

export default function Blog({ params }) {
  const { slug } = params;

  if (slug >= 1) {
    const { posts, tags, pageCount } = getBlogPostsPerPage({ page: slug });

    if (!posts) return notFound();

    return (
      <>
        <BlogPostHero post={posts[0]} isBlogPost={true} />
        <RelatedPosts posts={posts.slice(1, 5)} />
        <SubscribeCta />
        <Posts posts={posts} tabs={tags} page={slug} pageCount={pageCount} />
      </>
    );
  }
  const post = getBlogPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <BlogPostHero post={post} isBlogPost={true} />
    </>
  );
}

export async function generateStaticParams() {
  const { posts } = getAllBlogPosts();
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  const pages = posts.map(({ slug }) => ({ slug }));

  pages.push({ slug: '' });
  for (let i = 1; i <= pageCount; i += 1) pages.push({ slug: i.toString() });

  return pages;
}
