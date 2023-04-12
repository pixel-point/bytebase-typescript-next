import { LinkUnderlined } from '@/components/shared/link-underlined';

interface CardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, href, description }: CardProps) => {
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
      <h3 className="mt-5 xl:mt-4 lg:mt-2 leading-none text-56 xl:text-44 lg:text-34 font-title font-semibold">
        {title}
      </h3>
      <p className="mt-4 lg:mt-[6px] text-20 xl:text-18 lg:text-16 leading-normal xl:leading-snug lg:leading-snug md:max-w-[296px] max-w-[449px] ">
        {description}
      </p>
      <LinkUnderlined className="mt-6 xl:mt-5 lg:mt-3" to={href}>
        Learn more
      </LinkUnderlined>
    </article>
  );
};

export default Card;
