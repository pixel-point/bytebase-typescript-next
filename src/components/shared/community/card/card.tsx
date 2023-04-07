import NextLink from 'next/link';

import { FC } from 'react';

import clsx from 'clsx';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  background: string;
  buttonBackground: string;
}

const Card: FC<CardProps> = ({
  icon,
  title,
  description,
  href,
  background,
  buttonLabel,
  buttonBackground,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-between -translate-y-[132px] p-9 xl:p-6 pb-14 xl:pb-8 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-purple-dark',
        background,
      )}
    >
      <div className="flex flex-col items-center">
        <img src={icon} alt="" className="w-20 h-20" />
        {/* <DiscordIcon className="w-20 h-20 text-primary-1" /> */}
        <p className="mt-7 xl:mt-5">
          <b className="text-56 xl:text-44 leading-none font-title font-semibold">{title}</b>
        </p>
        <p className="mt-4 xl:mt-3 text-20 xl:text-18 leading-[150%]">{description}</p>
      </div>
      <NextLink
        href={href}
        className={clsx(
          'xl:w-full justify-center flex mx-auto w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white rounded-full',
          `${buttonBackground}`,
        )}
      >
        {buttonLabel}
      </NextLink>
    </div>
  );
};

export { Card };
