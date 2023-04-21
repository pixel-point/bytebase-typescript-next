import Link from 'next/link';

import { ReactNode } from 'react';

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

const LinkUnderlined = ({ to, theme, children, className }: LinkProps) => {
  const linkClassName = clsx(className, theme && styles.theme[theme]);

  return (
    <div className="py-2">
      <Link
        href={to}
        className={clsx(
          'block w-fit border-b-[3px] border-secondary-2 pb-1 text-16 font-bold uppercase leading-none tracking-wide transition-colors duration-200 hover:border-tones-green-dark active:border-tones-green-dark md:text-13',
          linkClassName,
        )}
      >
        {children}
      </Link>
    </div>
  );
};

export { LinkUnderlined };
