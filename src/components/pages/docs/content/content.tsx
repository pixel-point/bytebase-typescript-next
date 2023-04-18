import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import clsx from 'clsx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

import CodeBlock from '@/components/shared/code-block';

import HintBlock from '../hint-block';

interface ContentProps {
  className?: string;
  content: string;
}

const components = {
  pre: (props: any) => <>{props.children}</>,
  code: (props: any) => {
    if (props?.className?.startsWith('language-')) {
      return <CodeBlock {...props} />;
    }
    return <code {...props} />;
  },
  HintBlock: (props: any) => <HintBlock {...props} />,
  img: (props: any) => (
    <Image
      {...props}
      src={props.src.replace('/static', '')}
      width={716}
      height={344}
      style={{ width: '100%', height: '100%' }}
      alt={props.alt}
    />
  ),
};

const Content = ({ className, content }: ContentProps) => {
  return (
    <div className={clsx(className, 'content prose prose-lg')}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // Adds support for GitHub Flavored Markdown
              remarkGfm,
              // generates a table of contents based on headings
              remarkToc,
            ],
            // These work together to add IDs and linkify headings
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
      />
    </div>
  );
};

export default Content;
