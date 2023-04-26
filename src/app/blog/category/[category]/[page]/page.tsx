import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import getMetadata from '@/utils/get-metadata';
import slugifyText from '@/utils/slugify-text';

import BlogPostHero from '@/components/pages/blog/blog-post-hero';
import Posts from '@/components/pages/blog/posts';
import RecentPosts from '@/components/pages/blog/recent-posts/recent-posts';
import SubscribeCta from '@/components/pages/blog/subscribe-cta';

import { POSTS_PER_PAGE, getAllBlogPosts, getBlogPostsPerPage } from '@/lib/api-blog';
import SEO_DATA from '@/lib/seo-data';

export default function BlogCategoryPage({
  params,
}: {
  params: { category: string; page: string };
}) {
  const { category } = params;
  const page = +params.page || 1;
  const data = getBlogPostsPerPage({ page, category });

  if (!data) return notFound();

  const { posts, recentPosts, tags, pageCount } = data;

  return (
    <>
      <BlogPostHero post={recentPosts[0]} isBlogPost={false} />
      <RecentPosts posts={recentPosts.slice(1, 5)} />
      <SubscribeCta />
      <Posts posts={posts} tabs={tags} page={page} pageCount={pageCount} category={category} />
    </>
  );
}

type CategoriesMap = {
  [slug: string]: number;
};

export async function generateStaticParams() {
  const { posts } = getAllBlogPosts();

  const categoriesMap = posts.reduce((acc, { tags }) => {
    const slug = slugifyText(tags);
    return {
      ...acc,
      [slug]: acc[slug] ? acc[slug] + 1 : 1,
    };
  }, {} as CategoriesMap);

  return Object.entries(categoriesMap).flatMap(([categoryName, postCount]) => {
    const countPagesInCategory = Math.ceil(postCount / POSTS_PER_PAGE);
    return Array.from({ length: countPagesInCategory }, (_, i) => {
      return i === 0
        ? { category: categoryName }
        : { category: categoryName, page: (i + 1).toString() };
    });
  });
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; page: string };
}): Promise<Metadata> {
  const { category } = params;
  const categories = {
    announcement: 'Announcement',
    industry: 'Industry',
    explanation: 'Explanation',
    engineering: 'Engineering',
    'how-to': 'How-To',
    'case-study': 'Case Study',
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return getMetadata({
    ...SEO_DATA.BLOG,
    title: `${SEO_DATA.BLOG.title} - ${categories[category]}`,
  });
}

export const revalidate = 60;
