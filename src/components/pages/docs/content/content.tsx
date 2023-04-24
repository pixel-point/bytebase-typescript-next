import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import { Children, ReactNode, isValidElement } from 'react';

import slugifyText from '@/utils/slugify-text';
import clsx from 'clsx';
import remarkGfm from 'remark-gfm';

import CodeBlock from '@/components/shared/code-block';

import DocLinkBlock from '../doc-link-block';
import HintBlock from '../hint-block';
import IncludeBlock from '../include-block';

interface ContentProps {
  className?: string;
  content: string;
}

const flattenChildrenToString = (children: ReactNode): string => {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
        return child.toString();
      }
      if (isValidElement(child)) {
        return flattenChildrenToString(child.props.children);
      }
      return '';
    })
    .join('');
};

const getId = (children: ReactNode): string => {
  const text = flattenChildrenToString(children);
  return slugifyText(text);
};

const components = {
  h2: ({ children, ...rest }: any) => {
    const id = getId(children);
    return (
      <h2 id={id} {...rest}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...rest }: any) => {
    const id = getId(children);
    return (
      <h3 id={id} {...rest}>
        {children}
      </h3>
    );
  },
  table: (props: any) => (
    <figure className="table-wrapper">
      <table {...props} />
    </figure>
  ),
  pre: (props: any) => <>{props.children}</>,
  code: (props: any) => {
    if (props?.className?.startsWith('language-')) {
      return <CodeBlock {...props} />;
    }
    return <code {...props} />;
  },
  img: (props: any) => {
    const { src, alt } = props;
    return (
      <Image
        className="my-11"
        src={src}
        width={716}
        height={344}
        style={{ width: '100%', height: '100%' }}
        alt={alt}
      />
    );
  },
  HintBlock,
  DocLinkBlock,
  IncludeBlock,
};

const Content = ({ className, content }: ContentProps) => {
  return (
    <div className={clsx(className, 'content prose prose-lg max-w-none')}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // Adds support for GitHub Flavored Markdown
              remarkGfm,
            ],
          },
        }}
      />
    </div>
  );
};

export default Content;
