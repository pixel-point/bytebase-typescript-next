import { FC } from 'react';

import ArrowIcon from '@/svgs/arrow.inline.svg';
import clsx from 'clsx';

import Link from '@/components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center leading-none text-center whitespace-nowrap rounded transition-colors duration-200 outline-none',
  size: {
    sm: 'text-13 font-bold py-3 px-4.5 uppercase',
    md: 'text-13 font-bold py-4.5 px-6 xs:w-full uppercase',
    lg: 'text-16 font-bold py-6 px-9 xs:w-full uppercase',
  },
  theme: {
    'primary-filled':
      'text-white bg-primary-1 hover:bg-primary-2 disabled:tones-purple-dark tracking-tighter rounded-full',
    'primary-outline':
      'text-black border-[3px] border-primary-1 hover:border-gray-15 disabled:text-gray-60 disabled:border-tones-purple-dark rounded-full tracking-tighter',
    'gray-filled':
      'bg-gray-15 text-white hover:bg-gray-40 disabled:bg-gray-80 tracking-tighter rounded-full',
    'green-underline':
      'text-black border-b-[3px] border-secondary-2 pb-4.5 hover:border-tones-green-dark tracking-tight disabled:text-gray-60 disabled:border-tones-purple-dark',
  },
};

type ButtonProps = {
  additionalClassName?: string;
  to: string;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  withArrow?: boolean;
};

const Button: FC<ButtonProps> = ({
  additionalClassName = null,
  size = null,
  theme = null,
  to,
  children,
  withArrow = false,
  ...props
}) => {
  const className = clsx(
    styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  const Tag = to ? Link : 'button';

  const content = (
    <>
      {withArrow ? <span>{children}</span> : children}
      {withArrow && <ArrowIcon className={clsx('ml-5 w-4 shrink-0')} />}
    </>
  );

  return (
    <Tag className={className} to={to} {...props}>
      {content}
    </Tag>
  );
};

export default Button;