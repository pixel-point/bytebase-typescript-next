import Image from 'next/image';

import clsx from 'clsx';

import Button from '@/components/shared/button';

type CardProps = {
  planTitle: string;
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

const colors = { team: '#5647EB', free: '#3DB8F5', enterprise: '#172136' };

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
  const planColor = colors[planTitle.toLowerCase() as keyof typeof colors];
  return (
    <article
      className="bg-white h-full border border-gray-70 shadow-pricing flex flex-col items-center border-t-8 pt-3.5 pb-10 px-6 lg:px-5"
      style={{ borderTopColor: planColor }}
    >
      <div className="flex flex-col items-center min-h-[548px] lg:min-h-[525px] w-full">
        <h2
          className="self-start tracking-wide font-bold uppercase text-16 leading-none"
          style={{ color: planColor }}
        >
          {planTitle}
        </h2>
        <Image src={image} width={240} height={240} alt={planTitle} className="mt-3 lg:w-[220px]" />
        <span
          className={clsx(
            'mt-4 relative font-title font-semibold text-104 leading-none text-gray-15 tracking-tighter lg:text-72 lg:tracking-normal',
            { 'text-primary-1': planTitle.toLowerCase() === 'team' },
          )}
        >
          {typeof price === 'number' ? `$${price}` : price}
          {priceDescription && (
            <span className="tracking-normal text-gray-15 font-sans text-15 leading-none font-normal absolute -right-[76px] top-4 max-w-[64px] lg:-right-[72px]">
              {priceDescription}
            </span>
          )}
        </span>
        <p className="mt-2 lg:mt-3.5 text-gray-30 text-16 leading-normal lg:leading-snug text-center lg:max-w-[180px]">
          {description}
        </p>
        <Button additionalClassName="w-full mt-5" size="lg" theme={buttonTheme} to={buttonLink}>
          {buttonText}
        </Button>
        {additionalDescription && (
          <p
            className="mt-3 with-medium-text text-14 leading-tight tracking-tight text-gray-40"
            dangerouslySetInnerHTML={{ __html: additionalDescription }}
          />
        )}
      </div>
      <footer className="border-t border-gray-70 pt-6 lg:pt-[26px] w-full">
        <ul className="flex flex-col gap-y-4 lg:gap-x-4.5">
          {planConditions.map((condition, index) => (
            <li className="flex items-center lg:items-start gap-x-2" key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-5 h-5 shrink-0" src="/images/check.svg" alt="" />
              <span className="text-15 lg:leading-normal leading-none text-gray-15">
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
