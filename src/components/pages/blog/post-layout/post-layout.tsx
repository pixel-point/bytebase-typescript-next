'use client';

import { ReactNode, useRef } from 'react';

import { BlogPost } from '@/types/blog-post';
import { TableOfContents } from '@/types/docs';

import Aside from '../aside';

type PostLayoutProps = {
  post: BlogPost;
  children: ReactNode;
  tocItems: TableOfContents[];
};

const PostLayout = ({ post, tocItems, children }: PostLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="container gap-x-grid mt-14 grid grid-cols-12 lg:mt-8 sm:mt-6">
      <div
        ref={contentRef}
        className="col-span-7 col-start-2 lg:col-span-10 lg:col-start-2 md:col-span-full"
      >
        {children}
      </div>
      <Aside author={post.author} tocItems={tocItems} />
    </main>
  );
};

export default PostLayout;
