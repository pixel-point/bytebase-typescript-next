import Button from '@/components/shared/button';
import { LinkUnderlined } from '@/components/shared/link-underlined';

import Route from '@/lib/route';

import Card from './card';

type TCard = {
  cover: '/images/change-database.png' | '/images/query-data.png' | '/images/secure-access.png';
  href: string;
  title: string;
  description: string;
};

const cards: TCard[] = [
  {
    href: '#',
    cover: '/images/change-database.png',
    title: 'Change database',
    description:
      'Simplify database changes with standardization, lint rules, and GitOps integration.',
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
    <section className="mt-[128px] container grid grid-cols-12 grid-gap">
      <header className="mt-6 row-start-2 col-span-7 relative">
        <h1 className="font-title font-semibold leading-none text-112">
          <mark className="bg-transparent text-primary-1">Database</mark> schema change and version
          control
        </h1>
        <p className="absolute top-[237px] left-[338px] text-20 leading-[140%]">
          Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage the
          lifecycle of application database schemas.
        </p>
      </header>
      <div className="row-start-1 col-span-12">
        <span className="inline-flex items-center text-12 leading-none p-1 bg-tones-purple-light text-primary-1 rounded-full gap-1">
          <span className="px-2 py-1 bg-primary-1 rounded-full text-white">What’s new?</span>
          <span className="px-2">1.10.0 Released</span>
        </span>
      </div>
      <ul className="mt-20 row-start-4 col-span-12 grid grid-cols-3 grid-gap">
        {cards.map((card, idx) => (
          <li key={idx}>
            <Card {...card} />
          </li>
        ))}
      </ul>
      <footer className="mt-12 row-start-3 col-span-4 flex items-baseline gap-9">
        <Button to={Route.INDEX} theme="primary-filled" size="lg">
          Request a Demo
        </Button>
        <LinkUnderlined to={Route.INDEX}>See Live Demo</LinkUnderlined>
      </footer>
    </section>
  );
};

export default Hero;
