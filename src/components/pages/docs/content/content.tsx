import { MDXRemote } from 'next-mdx-remote/rsc';

import clsx from 'clsx';

interface ContentProps {
  className?: string;
  content: string;
}

const Content = ({ className, content }: ContentProps) => {
  return (
    <div className={clsx(className, 'prose')}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={content} />
    </div>
  );
};

export default Content;
