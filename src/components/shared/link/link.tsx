/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

import ArrowIcon from '@/svgs/arrow.inline.svg';
import clsx from 'clsx';

const styles = {
  transition: 'transition-colors duration-200',
  base: 'inline-flex leading-none items-center',
  size: {
    sm: 'text-15',
    md: 'text-16',
  },
  theme: {
    gray: 'text-gray-15 hover:text-primary-1 disabled:text-gray-60',
    'primary-1':
      'text-primary-1 border-b-2 border-primary-1 border-opacity-40 transition-opacity hover:border-opacity-100 pb-1 sm:pb-px',
  },
};

type LinkProps = {
  additionalClassName?: string;
  to: string;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  withArrow?: boolean;
  target?: string;
  rel?: string;
};

const Link = ({
  additionalClassName,
  size,
  theme,
  to,
  children,
  withArrow = false,
  ...props
}: LinkProps) => {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  const content = (
    <>
      {withArrow ? <span>{children}</span> : children}
      {withArrow && <ArrowIcon className={clsx('ml-5 w-4 shrink-0')} />}
    </>
  );

  if (to.startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={to} {...props}>
        {content}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={to} {...props}>
      {content}
    </a>
  );
};

export default Link;
