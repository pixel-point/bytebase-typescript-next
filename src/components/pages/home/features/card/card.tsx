import NextLink from 'next/link';

import { FC } from 'react';

interface CardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ icon, title, href, description }) => {
  return (
    <article className="">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" width={96} height={96} />
      <h3 className="mt-5 leading-none text-56 font-title font-semibold">{title}</h3>
      <p className="mt-4 text-20 leading-[150%]">{description}</p>
      <footer className="mt-6">
        <NextLink href={href}>Learn more</NextLink>
      </footer>
    </article>
  );
};

export { Card };
