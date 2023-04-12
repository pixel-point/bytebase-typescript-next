import Button from '@/components/shared/button';
import { LinkUnderlined } from '@/components/shared/link-underlined';

import Route from '@/lib/route';

import Card from './card';

type TCard = {
  cover: '/images/change-database.png' | '/images/query-data.png' | '/images/secure-access.png';
  href: string;
  title: string;
  description: string;
  image?: string;
};

const cards: TCard[] = [
  {
    href: '#',
    cover: '/images/change-database.png',
    title: 'Change database',
    description:
      'Simplify database changes with standardization, lint rules, and GitOps integration.',
    image: '/images/hat.png',
  },
  {
    href: '#',
    cover: '/images/query-data.png',
    title: 'Query data',
    description:
      "Perform complex SQL tasks and protect data privacy with ByteBase's web-based IDE.",
  },
  {
    href: '#',
    cover: '/images/secure-access.png',
    title: 'Secure access',
    description:
      'Eliminate administrative complexity and ensure compliance with one-stop resource management.',
  },
];

const Hero = () => {
  return (
    <section className="mt-32 xl:mt-[120px] lg:mt-[104px] md:mt-24 container grid grid-cols-12 md:grid-cols-4 grid-gap">
      <div className="row-start-1 col-span-12 md:col-span-4">
        <span className="inline-flex items-center text-12 leading-none p-1 bg-tones-purple-light text-primary-1 font-semibold rounded-full gap-1">
          <span className="px-2 py-1 bg-primary-1 rounded-full text-white">What’s new?</span>
          <span className="flex items-center px-2">
            1.10.0 Released
            <img src="/images/arrow-hero.svg" alt="" className="ml-1.5 h-1.5" />
          </span>
        </span>
      </div>
      <header className="mt-4.5 xl:mt-3.5 md:mt-4 row-start-2 col-span-8 2xl:col-span-9 lg:col-span-11 md:col-span-4 relative max-w-[844px] 2xl:max-w-[824px] xl:max-w-[696px]">
        <div className="md:hidden">
          <h1 className="font-title font-semibold leading-none xl:leading-95 text-112 xl:text-90 lg:text-80 md:text-48">
            <mark className="bg-transparent text-primary-1">Database</mark> schema change and
            version
          </h1>
          <div className="flex md:flex-col">
            <span className="font-title font-semibold leading-none xl:leading-95 text-112 xl:text-90 lg:text-80 md:text-48">
              control
            </span>
            <p className="ml-11 2xl:ml-10 xl:ml-[35px] lg:ml-5 mt-5 xl:mt-[7px] md:ml-0 md:mt-2 text-20 xl:text-18 lg:text-16 leading-[140%]">
              Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage
              the lifecycle of application database schemas.
            </p>
          </div>
        </div>
        <div className="hidden md:block max-w-sm">
          <h1 className="font-title font-semibold leading-none text-48">
            <mark className="bg-transparent text-primary-1">Database</mark> schema change and
            version control
          </h1>
          <p className="mt-3 text-16 leading-[140%]">
            Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage
            the lifecycle of application database schemas.
          </p>
        </div>
      </header>

      <ul className="mt-20 md:mt-7 row-start-4 col-span-12 md:col-span-4 grid grid-cols-12 gap-x-[20px] md:flex md:flex-col md:gap-y-8">
        {cards.map((card, idx) => (
          <li key={idx} className="col-span-4">
            <Card {...card} />
          </li>
        ))}
      </ul>
      <footer className="mt-14 xl:mt-[46px] lg:mt-[30px] md:mt-6 row-start-3 col-span-4 xl:col-span-6 md:col-span-4 flex items-center gap-9">
        <Button
          to={Route.INDEX}
          theme="primary-filled"
          size="lg"
          additionalClassName="lg:text-13 lg:py-[18px] lg:px-[36px] lg:max-w-[167px]"
        >
          Request a Demo
        </Button>
        <LinkUnderlined className="min-w-fit lg:-ml-4" to={Route.INDEX}>
          See Live Demo
        </LinkUnderlined>
      </footer>
    </section>
  );
};

export default Hero;
