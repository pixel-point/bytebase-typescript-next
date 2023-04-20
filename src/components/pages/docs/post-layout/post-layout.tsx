'use client';

import { useRef } from 'react';

import Link from '@/components/shared/link';

import ExternalLinkIcon from '@/svgs/external.inline.svg';

import TableOfContents from '../table-of-contents';

interface PostLayoutProps {
  title: string;
  currentSlug: string;
  children: React.ReactNode;
}

const FILE_ORIGIN_PATH = 'https://github.com/bytebase/bytebase.com/tree/main/content/docs';

const PostLayout = ({ title, children, currentSlug }: PostLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <article className="col-start-4 col-span-6">
        <h1 className="text-44 leading-extra-tight tracking-tighter font-bold mt-7 text-gray-15">
          {title}
        </h1>
        <div className="mt-5" ref={contentRef}>
          {children}
        </div>
        <Link
          additionalClassName="inline-flex mt-20 text-18 hover:text-gray-60 font-medium leading-none text-gray-15 items-center"
          to={`${FILE_ORIGIN_PATH}/${currentSlug}.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Edit this page on GitHub</span>
          <ExternalLinkIcon className="w-3 h-3 ml-2" />
        </Link>
      </article>
      <div className="sticky bottom-0 top-10 ml-auto max-h-[calc(100vh-40px)] overflow-y-auto col-end-13 col-span-3 w-full max-w-[314px]">
        <TableOfContents contentRef={contentRef} />
      </div>
    </>
  );
};

export default PostLayout;
