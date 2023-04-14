import Image from 'next/image';

import clsx from 'clsx';

import { COLORS } from '@/components/pages/pricing/table/data/pricing-plans';
import Button from '@/components/shared/button';

type CardProps = {
  planTitle: keyof typeof COLORS;
  image: string;
  price: string | number;
  description: string;
  buttonText: string;
  buttonTheme: 'primary-filled' | 'primary-outline';
  buttonLink: string;
  planConditions: Array<string>;
  priceDescription?: string;
  additionalDescription?: string;
};

const Card = ({
  planTitle,
  image,
  price,
  priceDescription,
  description,
  additionalDescription,
  buttonText,
  buttonLink,
  buttonTheme,
  planConditions,
}: CardProps) => {
  const planColor = COLORS[planTitle];
  return (
    <article
      className="relative bg-white h-full border border-gray-70 shadow-pricing flex flex-col items-center border-t-8 pt-3.5 md:pt-2.5 pb-10 px-6 lg:px-5 md:px-4.5 md:pb-9 sm:pt-4 sm:px-6"
      style={{ borderTopColor: planColor }}
    >
      <div
        className={clsx(
          'flex flex-col items-center min-h-[548px] lg:min-h-[525px] w-full md:min-h-[462px] sm:items-start sm:min-h-0',
          additionalDescription ? 'sm:pb-4' : 'sm:pb-6',
        )}
      >
        <h2
          className="self-start tracking-wide font-bold uppercase text-16 leading-none"
          style={{ color: planColor }}
        >
          {planTitle}
        </h2>
        <Image
          src={image}
          width={240}
          height={240}
          alt={planTitle}
          className="mt-3 lg:w-[220px] md:w-[180px] sm:absolute xs:w-[140px] sm:top-0 sm:right-4"
          priority
        />
        <span
          className={clsx(
            'mt-4 relative font-title font-semibold text-104 leading-none text-gray-15 tracking-tighter lg:text-72 lg:tracking-normal md:text-56 md:mt-3',
            { 'text-primary-1': planTitle.toLowerCase() === 'team' },
          )}
        >
          {typeof price === 'number' ? `$${price}` : price}
          {priceDescription && (
            <span className="tracking-normal text-gray-15 font-sans text-15 leading-none font-normal absolute -right-[76px] top-4 max-w-[64px] lg:-right-[72px] md:text-14 md:top-2">
              {priceDescription}
            </span>
          )}
        </span>
        <p
          className="mt-2 lg:mt-3.5 text-gray-30 text-16 leading-normal lg:leading-snug text-center lg:max-w-[180px] md:mt-1.5 md:text-14 sm:text-left sm:leading-normal sm:max-w-full 2xs:max-w-[180px] sm:mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          additionalClassName="w-full mt-5 sm:w-auto sm:mt-7 2xs:w-full sm:z-10"
          size="lg"
          theme={buttonTheme}
          to={buttonLink}
        >
          {buttonText}
        </Button>
        {additionalDescription && (
          <p
            className="mt-3 with-medium-text text-14 leading-tight tracking-tight text-gray-40 md:leading-snug text-center md:mt-4 md:max-w-[150px] sm:max-w-full sm:mt-3 mx-auto sm:leading-tight"
            dangerouslySetInnerHTML={{ __html: additionalDescription }}
          />
        )}
      </div>
      <footer className="border-t border-gray-70 pt-6 w-full md:pt-5 sm:pt-7">
        <ul className="flex flex-col gap-y-4">
          {planConditions.map((condition, index) => (
            <li className="flex items-center lg:items-start gap-x-2" key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-5 h-5 shrink-0" src="/images/check.svg" alt="" />
              <span className="text-15 lg:leading-normal leading-none text-gray-15 md:text-14 md:leading-snug 2xs:max-w-[220px]">
                {condition}
              </span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default Card;
