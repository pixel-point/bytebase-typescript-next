import Link from 'next/link';

import { FC, ReactNode } from 'react';

import clsx from 'clsx';

const styles = {
  theme: {
    black: 'text-black',
    white: 'text-white',
  },
};

interface LinkProps {
  children: ReactNode;
  className?: string;
  to: string;
  theme?: keyof typeof styles.theme;
}

const LinkUnderlined: FC<LinkProps> = ({ to, theme, children, className }) => {
  const linkClassName = clsx(className, theme && styles.theme[theme]);

  return (
    <div
      className={clsx(
        'pb-1 w-fit border-b-[3px] leading-4 tracking-[1%] border-secondary-2 text-16 lg:text-13 font-bold uppercase',
        linkClassName,
      )}
    >
      <Link href={to}>{children}</Link>
    </div>
  );
};

export { LinkUnderlined };
