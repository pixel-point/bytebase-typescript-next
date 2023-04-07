import Image from 'next/image';

import { FC } from 'react';

import clsx from 'clsx';

import { LinkUnderlined } from '@/components/shared/link-underlined';

interface CardProps {
  cover: string;
  href: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ cover, title, href, description }) => {
  return (
    <article>
      <Image
        className={clsx({
          'shadow-[0px_5px_15px_0px_rgba(156,186,201,0.5)]':
            cover === '/images/change-database.png',
          'shadow-[0px_5px_15px_0px_rgba(143,188,169,0.4)]': cover === '/images/query-data.png',
          'shadow-[0px_5px_15px_0px_rgba(210,172,210,0.4)]': cover === '/images/secure-access.png',
        })}
        src={cover}
        width={464}
        height={600}
        alt=""
      />
      <h3 className="mt-8 text-36 font-bold leading-[112.5%]">{title}</h3>
      <p className="mt-4 text-20 leading-[150%] max-w-[75%]">{description}</p>
      <LinkUnderlined to="" className="mt-6">
        Learn more
      </LinkUnderlined>
    </article>
  );
};

export { Card };
