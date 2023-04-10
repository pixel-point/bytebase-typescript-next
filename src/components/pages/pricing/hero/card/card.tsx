import Image from 'next/image';

import Button from '@/components/shared/button';

type CardProps = {
  planTitle: string;
  image: string;
  price: string;
  description: string;
  buttonText: string;
  buttonTheme: 'primary-filled' | 'primary-outline';
  buttonLink: string;
  planConditions: string;
};

const colors = { team: '#5647EB', free: '#3DB8F5', enterprise: '#172136' };

const Card = ({
  planTitle,
  image,
  price,
  description,
  buttonText,
  buttonLink,
  buttonTheme,
  planConditions,
}: CardProps) => {
  const planColor = colors[planTitle.toLowerCase() as keyof typeof colors];
  return (
    <article
      className="border border-gray-70 shadow-pricing flex flex-col items-center border-t-8 pt-3.5 pb-10 px-6"
      style={{ borderTopColor: planColor }}
    >
      <h2 className="tracking-[0.01em] text-16 leading-none">{planTitle}</h2>
      <Image src={image} width={240} height={240} alt={planTitle} />
      <span className="">{price}</span>
      <p>{description}</p>
      <Button additionalClassName="w-full" size="lg" theme={buttonTheme} to={buttonLink}>
        {buttonText}
      </Button>
      <footer className="mt-6">{planConditions}</footer>
    </article>
  );
};

export default Card;
