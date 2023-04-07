import { FC } from 'react';

import { LinkUnderlined } from '@/components/shared/link-underlined';

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
      <img
        src={icon}
        alt=""
        width={96}
        height={96}
        className="xl:h-[88px] xl:w-[88px] lg:h-[60px] lg:w-[60px]"
      />
      <h3 className="mt-5 xl:mt-[18px] lg:mt-2 leading-none text-56 xl:text-44 lg:text-34 font-title font-semibold">
        {title}
      </h3>
      <p className="mt-4 xl:mt-3 lg:mt-[6px] text-20 xl:text-18 lg:text-16 leading-[150%] xl:leading-6 lg:leading-[22px] md:max-w-[296px]">
        {description}
      </p>
      <LinkUnderlined className="mt-6 xl:mt-5 lg:mt-3" to="">
        Learn more
      </LinkUnderlined>
    </article>
  );
};

export { Card };
