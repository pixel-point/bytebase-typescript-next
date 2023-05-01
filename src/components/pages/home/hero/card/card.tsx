import Image from 'next/image';

import clsx from 'clsx';

import { LinkUnderlined } from '@/components/shared/link-underlined';

export type CardProps = {
  videos: Array<{ type: string; src: string }>;
  color: 'blue' | 'green' | 'red';
  cover: string;
  href: string;
  title: string;
  description: string;
  className?: string;
};

const Card = ({ color, className, cover, videos, title, href, description }: CardProps) => {
  return (
    <article className={clsx('perspective-1000', className)}>
      <div className="group-[.done]:rotate-y-180 transform-3d sm:rotate-y-180 grid transition-transform delay-[inherit] duration-1000 sm:transition-none">
        <div className="backface-hidden col-span-full row-span-full border border-gray-40 shadow-[0_5px_15px_0_rgba(15,22,36,0.2)] sm:hidden">
          <video
            className="h-auto w-full"
            controls={false}
            width={464}
            height={604}
            loop
            playsInline
            autoPlay
            muted
          >
            {videos.map((video) => (
              <source key={video.type} src={video.src} type={video.type} />
            ))}
          </video>
        </div>
        <div className="rotate-y-180 backface-hidden col-span-full row-span-full">
          <Image
            className={clsx('h-auto w-full', {
              'shadow-blue': color === 'blue',
              'shadow-green': color === 'green',
              'shadow-red': color === 'red',
            })}
            src={cover}
            width={464}
            height={604}
            alt=""
          />
        </div>
      </div>
      <div className="invisible mt-8 min-h-[194px] translate-y-24 opacity-0 transition-all duration-700 group-[.done]:visible group-[.done]:translate-y-0 group-[.done]:opacity-100 xl:mt-6 xl:min-h-[172px] md:mt-5 md:min-h-[144px] sm:visible sm:translate-y-0 sm:opacity-100 sm:transition-none">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-36 font-bold leading-extra-tight tracking-tighter xl:text-32 md:text-30">
          {title}
        </h3>
        <p className="mt-4 w-3/4 text-20 leading-normal 3xl:w-full xl:relative xl:mt-3 xl:overflow-hidden xl:text-18 xl:after:absolute xl:after:bottom-0 xl:after:right-0 xl:after:h-[30px] xl:after:w-2/3 xl:after:bg-gradient-to-r xl:after:from-transparent xl:after:to-white md:mt-1.5 md:text-16 sm:h-auto sm:leading-snug sm:after:hidden">
          {description}
        </p>
        <LinkUnderlined href={href} className="mt-6 xl:mt-5 md:mt-3">
          Learn more
        </LinkUnderlined>
      </div>
    </article>
  );
};

export default Card;
