import { notFound } from 'next/navigation';

import Content from '@/components/pages/docs/content';
import PostLayout from '@/components/pages/docs/post-layout';

import { getAllPosts, getPostBySlug } from '@/lib/api-docs';

interface StaticParams {
  slug: string[];
}

export function generateStaticParams(): StaticParams[] {
  const posts = getAllPosts();

  return posts.map(({ slug }) => {
    const slugsArray = slug.split('/');

    return {
      slug: slugsArray,
    };
  });
}

export default function DocPage({ params: { slug } }: { params: { slug: string[] } }) {
  const currentSlug = slug.join('/');
  const post = getPostBySlug(currentSlug);
  if (!post) return notFound();

  const {
    data: { title, description },
    content,
  } = post;

  return (
    <PostLayout title={title} currentSlug={currentSlug}>
      <Content content={content} />
    </PostLayout>
  );
}
