import { notFound } from 'next/navigation';

import Content from '@/components/pages/docs/content';

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
    <article className="col-start-4 col-span-6">
      <h1 className="text-44 leading-extra-tight tracking-tighter font-bold mt-7 text-gray-15">
        {title}
      </h1>
      <Content className="mt-5" content={content} />
    </article>
  );
}
