import Image from 'next/image';

import clsx from 'clsx';

import { LinkUnderlined } from '@/components/shared/link-underlined';

interface CardProps {
  cover: string;
  href: string;
  title: string;
  description: string;
  image?: string;
}

const Card = ({ cover, title, href, description, image }: CardProps) => {
  return (
    <article className="relative">
      {image && (
        <Image
          src={image}
          width={92}
          height={65}
          alt=""
          className="absolute -top-7 -left-9 xl:w-[58px] xl:h-[42px] xl:-top-4.5 xl:-left-6 md:w-16 md:h-[46px]"
        />
      )}
      <Image
        className={clsx({
          'shadow-[0px_5px_15px_0px_rgba(156,186,201,0.5)] w-full':
            cover === '/images/change-database.png',
          'shadow-[0px_5px_15px_0px_rgba(143,188,169,0.4)] w-full':
            cover === '/images/query-data.png',
          'shadow-[0px_5px_15px_0px_rgba(210,172,210,0.4)] w-full':
            cover === '/images/secure-access.png',
        })}
        src={cover}
        width={464}
        height={600}
        alt=""
      />
      <h3 className="mt-8 xl:mt-6 lg:mt-5 text-36 xl:text-32 lg:text-30 font-bold leading-extra-tight tracking-tighter xl:tracking-normal">
        {title}
      </h3>
      <p className="mt-4 xl:mt-3 lg:mt-1.5 text-20 xl:text-18 lg:text-16 leading-snug max-w-[75%] 2xl:max-w-none">
        {description}
      </p>
      <LinkUnderlined to={href} className="mt-6 xl:mt-5 lg:mt-3">
        Learn more
      </LinkUnderlined>
    </article>
  );
};

export default Card;
