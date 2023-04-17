import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import clsx from 'clsx';

interface ContentProps {
  className?: string;
  content: string;
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      src={props.src.replace('/static', '')}
      width={796}
      height={447}
      style={{ width: '100%', height: '100%' }}
      alt={props.alt}
    />
  ),
};

const Content = ({ className, content }: ContentProps) => {
  return (
    <div className={clsx(className, 'prose')}>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={content} components={components} />
    </div>
  );
};

export default Content;
