import Link from 'next/link';

import Route from '@/lib/route';

function Card({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <article className="text-gray-15">
      <div className="w-full h-[600px] bg-tones-blue-light"></div>
      <h3 className="mt-8 text-36 font-bold leading-[112.5%]">{title}</h3>
      <p className="mt-4 text-20 leading-[150%] max-w-[75%]">{description}</p>
      <footer className="mt-6">
        <Link href={href}>Learn more</Link>
      </footer>
    </article>
  );
}

const cards = [
  {
    href: '#',
    title: 'Change database',
    description:
      'Simplify database changes with standardization, lint rules, and GitOps integration.',
  },
  {
    href: '#',
    title: 'Query data',
    description:
      "Perform complex SQL tasks and protect data privacy with ByteBase's web-based IDE.",
  },
  {
    href: '#',
    title: 'Secure access',
    description:
      'Eliminate administrative complexity and ensure compliance with one-stop resource management.',
  },
];

export default function Page() {
  return (
    <>
      <section className="container grid grid-cols-12 grid-gap">
        <header className="mt-6 row-start-2 col-span-7 relative">
          <h1 className="font-title font-semibold leading-none text-112">
            <mark className="bg-transparent text-primary-1">Database</mark> schema change and
            version control
          </h1>
          <p className="absolute top-[237px] left-[338px] text-20 leading-[140%]">
            Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage
            the lifecycle of application database schemas.
          </p>
        </header>
        <div className="row-start-1 col-span-12">What’s new? 1.10.0 Released</div>
        <div className="mt-20 row-start-4 col-span-12 grid grid-cols-3 grid-gap">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
        <footer className="mt-12 row-start-3 col-span-4 flex items-baseline gap-9">
          <Link
            href={Route.INDEX}
            className="w-52 h-16 inline-flex items-center justify-center bg-tones-purple-dark"
          >
            Request a Demo
          </Link>
          <Link href={Route.INDEX}>See Live Demo</Link>
        </footer>
      </section>
      <section className="mt-[248px] container grid grid-cols-12 grid-gap">
        <h2 className="col-span-10 col-start-2 font-title font-semibold leading-none text-88 text-center">
          Change, Query, Secure, Govern{' '}
          <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
            all databases
          </mark>{' '}
          in a single place
        </h2>
        <div className="mt-[68px] col-span-12 h-[650px] bg-tones-blue-light"></div>
      </section>
      <section className="mt-[160px] bg-black text-white">
        <div className="container grid grid-cols-12 grid-gap">
          <header className="col-span-4 self-end">
            <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-primary-1 px-2.5 py-2 rounded-3xl">
              Change
            </span>
            <h2 className="font-title font-semibold leading-none text-112">
              <mark className="bg-transparent text-secondary-1">Automate</mark> database changes
            </h2>
            <p className="mt-6 text-20 leading-[150%]">
              Bytebase streamlines database deployment from non-prod to prod by integrating with
              version control systems for a GitOps workflow.
            </p>
          </header>
          <div className="row-span-2 col-span-8">
            <div className="mx-auto w-[590px] h-[904px] bg-white bg-opacity-5"></div>
          </div>
          <footer className="mt-8 col-span-4 self-start">
            <Link href="#">Learn more</Link>
          </footer>
        </div>
      </section>
      {/* Accordeon */}
      {/* SQL Editor */}
      <section className="mt-[160px] bg-black text-white">
        <div className="container grid grid-cols-12 grid-gap">
          <header className="col-span-4 self-end">
            <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
              Secure
            </span>
            <h2 className="font-title font-semibold leading-none text-112">
              <mark className="bg-transparent text-secondary-3">Security</mark> by design
            </h2>
            <p className="mt-6 text-20 leading-[150%]">
              Bytebase streamlines database deployment from non-prod to prod by integrating with
              version control systems for a GitOps workflow.
            </p>
          </header>
          <div className="row-span-2 col-span-8">
            <div className="mx-auto w-[590px] h-[904px] bg-white bg-opacity-5"></div>
          </div>
          <footer className="mt-8 col-span-4 self-start">
            <Link href="#">Learn more</Link>
          </footer>
        </div>
      </section>
    </>
  );
}
