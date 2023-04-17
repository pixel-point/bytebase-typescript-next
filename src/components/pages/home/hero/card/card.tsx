import Image from 'next/image';

import clsx from 'clsx';

import { LinkUnderlined } from '@/components/shared/link-underlined';

export type CardProps = {
  color: 'blue' | 'green' | 'red';
  cover: string;
  href: string;
  title: string;
  description: string;
  className?: string;
};

const Card = ({ color, className, cover, title, href, description }: CardProps) => {
  return (
    <article className={clsx('flip', className)}>
      <div className="flip-inner grid">
        <div className="flip-front col-span-full row-span-full">
          <Image
            className="h-auto w-full"
            src="/images/page/main/hero/video.png"
            width={464}
            height={600}
            alt=""
          />
        </div>
        <div className="flip-back col-span-full row-span-full">
          <Image
            className={clsx('h-auto w-full', {
              'shadow-blue': color === 'blue',
              'shadow-green': color === 'green',
              'shadow-red': color === 'red',
            })}
            src={cover}
            width={464}
            height={600}
            alt=""
          />
          <div>
            <h3 className="mt-8 overflow-hidden text-ellipsis whitespace-nowrap text-36 font-bold leading-extra-tight tracking-tighter xl:mt-6 xl:text-32 md:mt-5 md:text-30">
              {title}
            </h3>
            <p className="mt-4 h-[90px] w-3/4 text-20 leading-normal 3xl:w-full xl:relative xl:mt-3 xl:h-[81px] xl:overflow-hidden xl:text-18 xl:after:absolute xl:after:bottom-0 xl:after:right-0 xl:after:h-[30px] xl:after:w-2/3 xl:after:bg-gradient-to-r xl:after:from-transparent xl:after:to-white md:mt-1.5 md:h-[72px] md:text-16">
              {description}
            </p>
            <LinkUnderlined to={href} className="mt-6 xl:mt-5 md:mt-3">
              Learn more
            </LinkUnderlined>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
