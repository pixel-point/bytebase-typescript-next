'use client';

import { ReactNode, useRef } from 'react';

import { BlogPost } from '@/types/blog-post';

import Aside from '../aside';

interface PostLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

const PostLayout = ({ post, children }: PostLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="container gap-x-grid mt-14 grid grid-cols-12 lg:mt-8 sm:mt-6">
      <div
        ref={contentRef}
        className="col-span-7 col-start-2 lg:col-span-10 lg:col-start-2 md:col-span-full"
      >
        {children}
      </div>
      <Aside author={post.author} contentRef={contentRef} />
    </main>
  );
};

export default PostLayout;
