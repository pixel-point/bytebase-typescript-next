import Image from 'next/image';
import NextLink from 'next/link';

import clsx from 'clsx';

import Button from '@/components/shared/button';

import Route from '@/lib/route';

import DiscordIcon from '@/svgs/discord.inline.svg';
import GithubIcon from '@/svgs/github.inline.svg';
import TwitterIcon from '@/svgs/twitter.inline.svg';

function Card({
  cover,
  href,
  title,
  description,
}: {
  cover: '/images/change-database.png' | '/images/query-data.png' | '/images/secure-access.png';
  href: string;
  title: string;
  description: string;
}) {
  return (
    <article>
      <Image
        className={clsx({
          'shadow-[0px_5px_15px_0px_rgba(156,186,201,0.5)]':
            cover === '/images/change-database.png',
          'shadow-[0px_5px_15px_0px_rgba(143,188,169,0.4)]': cover === '/images/query-data.png',
          'shadow-[0px_5px_15px_0px_rgba(210,172,210,0.4)]': cover === '/images/secure-access.png',
        })}
        src={cover}
        width={464}
        height={600}
        alt=""
      />
      <h3 className="mt-8 text-36 font-bold leading-[112.5%]">{title}</h3>
      <p className="mt-4 text-20 leading-[150%] max-w-[75%]">{description}</p>
      <footer className="mt-6">
        <NextLink href={href}>Learn more</NextLink>
      </footer>
    </article>
  );
}

function Card2({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" width={96} height={96} />
      <h3 className="mt-5 leading-none text-56 font-title font-semibold">{title}</h3>
      <p className="mt-4 text-20 leading-[150%]">{description}</p>
      <footer className="mt-6">
        <NextLink href={href}>Learn more</NextLink>
      </footer>
    </article>
  );
}

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

const cards2 = [
  {
    href: '#',
    icon: '/images/attention.svg',
    title: 'Anomaly center',
    description:
      'Simplify database changes with standardization, lint rules, and GitOps integration. It automatically starts deployment processes for new database change scripts.',
  },
  {
    href: '#',
    icon: '/images/database.svg',
    title: 'Drift detection',
    description:
      "Perform complex SQL tasks and protect data privacy with ByteBase's web-based IDE, anonymization engine, and access controls.",
  },
  {
    href: '#',
    icon: '/images/disk.svg',
    title: 'Disaster recovery',
    description:
      'Eliminate administrative complexity and ensure compliance with one-stop resource management, policy enforcement and CLI-like SQL editor experience.',
  },
];

export default function Page() {
  return (
    <>
      <section className="mt-[128px] container grid grid-cols-12 grid-gap">
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
          <NextLink href={Route.INDEX}>See Live Demo</NextLink>
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
        <div className="mt-[68px] col-span-12">
          <Image src="/images/scheme.png" width={1472} height={600} alt="" />
        </div>
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
            <Image
              className="ml-auto mr-[110px]"
              src="/images/automate-database-changes.png"
              width={620}
              height={904}
              alt=""
            />
          </div>
          <footer className="mt-8 col-span-4 self-start">
            <NextLink href="#">Learn more</NextLink>
          </footer>
        </div>
      </section>
      <section>
        <h2 className="sr-only">Features</h2>
        <div className="bg-cite">
          <div className="container flex items-center pt-16 pb-[52px]">
            <Image
              className="order-2 flex-shrink-0 translate-x-3"
              src="/images/auto-style.png"
              width={590}
              height={320}
              alt=""
            />
            <div className="order-1 flex-grow">
              <p>
                <b className="text-44 font-bold leading-[112.5%] -tracking-[0.04em]">
                  <mark className="bg-transparent text-primary-1">Auto style</mark> and
                  anti-patterns checks
                </b>
              </p>
              <p className="mt-4.5 text-18 leading-none">
                100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the
                organization.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-px bg-tones-purple-light">
          <div className="container">
            <p className="py-8">
              <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">
                Batch schema changes to tenant databases
              </b>
            </p>
          </div>
        </div>
        <div className="mt-px bg-tones-purple-light">
          <div className="container">
            <p className="py-8">
              <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">
                Online schema change
              </b>
            </p>
          </div>
        </div>
        <div className="mt-px bg-tones-purple-light">
          <div className="container">
            <p className="py-8">
              <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">GitOps</b>
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[94px] container relative">
        <header className="pt-[66px]">
          <Image
            className="absolute top-0 right-[156px]"
            src="/images/ufo.png"
            width={230}
            height={218}
            alt=""
          />
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
            Query
          </span>
          <h2 className="font-title font-semibold leading-none text-88 max-w-3xl">
            Explore data with <span className="whitespace-nowrap">all-in-one</span>{' '}
            <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
              SQL editor
            </mark>
          </h2>
        </header>
        <div className="mt-10 grid grid-cols-12 grid-gap">
          <div className="row-span-full col-span-full">
            <Image
              src="/images/interface.png"
              className="w-full h-auto shadow-[0_5px_15px_rgba(15,22,36,0.2)] rounded"
              width={1472}
              height={845}
              alt=""
            />
          </div>
          <div className="row-span-full col-start-9 col-span-4 pr-10">
            <div className="bg-tones-green-light border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(143,188,169,0.5)] border-tones-green-dark -translate-y-10 px-6 py-3.5 divide-y divide-tones-green-dark min-h-[520px]">
              <div className="py-[26px]">
                <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                  Explore the schema
                </h3>
                <p className="mt-3 leading-[150%]">
                  Perform complex SQL tasks and protect data privacy with ByteBase&apos;s web-based
                  IDE, anonymization engine, and access controls.
                </p>
              </div>
              <div className="py-[26px]">
                <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                  Run and explain query
                </h3>
              </div>
              <div className="py-[26px]">
                <h3 className="font-bold text-24 leading-[112.%] tracking-tight">Anonymize data</h3>
              </div>
              <div className="py-[26px]">
                <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                  Database access control
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <Image
              className="ml-auto"
              src="/images/security-by-design.png"
              width={717}
              height={904}
              alt=""
            />
          </div>
          <footer className="mt-8 col-span-4 self-start">
            <NextLink href="#">Learn more</NextLink>
          </footer>
        </div>
      </section>
      <section className="mt-[238px] container">
        <header className="text-center grid grid-cols-12">
          <h2 className="font-title font-semibold leading-none text-88 col-span-12">
            Stay confident
          </h2>
          <p className="mt-4 text-20 leading-[150%] col-span-6 col-start-4">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
        </header>
        <ul className="mt-14 grid grid-gap grid-cols-3">
          {cards2.map((card, idx) => (
            <li key={idx}>
              <Card2 {...card} />
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-[160px] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logos-caption.svg"
          alt="Built by engineers knowing database development flow"
          width={321}
          height={64}
          className="relative left-1/2 mb-6"
        />
        <div className="logos"></div>
      </div>
      <div className="pt-[176px] pb-[234px] bg-cite">
        <div className="container">
          <figure className="mx-auto max-w-[1048px] text-center">
            <blockquote>
              <p className="text-40 leading-[125%] tracking-tight font-semibold">
                Bytebase helped us save $24M in OpEx. We’re also saving 50% of our time with
                automated renewal tracking and alerting across IT, Procurement, and Finance
                departments
              </p>
            </blockquote>
            <figcaption className="mt-8 font-semibold tracking-tight leading-none">
              — Brian Crosson, <cite className="font-normal not-italic">HD Supply</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <section className="mt-[160px] pb-[80px] container">
        <header className="grid grid-cols-12 grid-gap">
          <div className="col-span-6 row-span-2 col-start-7">
            <Image src="/images/welcome.png" width={591} height={613} alt="" />
          </div>
          <h1 className="font-title font-semibold leading-none text-112 col-span-4 row-start-1 self-end">
            <mark className="bg-transparent text-primary-1">Join</mark> the community
          </h1>
          <p className="mt-7 text-20 leading-[140%] col-span-5 row-start-2 self-start">
            At Bytebase, we believe in the power of collaboration and open communication, and we
            have a number of communities that you can join to connect with other like-minded.
          </p>
        </header>
        <ul className="mt-11 grid grid-cols-3 grid-gap text-center">
          <li className="-translate-y-[132px] bg-tones-purple-light p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] border-tones-purple-dark flex flex-col items-center">
            <DiscordIcon className="w-20 h-20 text-primary-1" />
            <p className="mt-7">
              <b className="text-56 leading-none font-title font-semibold">Discord</b>
            </p>
            <p className="mt-4 text-20 leading-[150%]">
              Participate in discussion with others DBAs or developers.
            </p>
            <NextLink
              href="#"
              className="flex mx-auto w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-primary-1 rounded-full"
            >
              Join Us
            </NextLink>
          </li>
          <li className="bg-tones-blue-light p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(156,186,201,0.5)] border-tones-blue-dark flex flex-col items-center">
            <TwitterIcon className="w-20 h-20 text-secondary-3" />
            <p className="mt-7">
              <b className="text-56 leading-none font-title font-semibold">Twitter</b>
            </p>
            <p className="mt-4 text-20 leading-[150%]">
              Latest news and updates about Bytebase. Tag us if you need any help or want to share a
              feedback.
            </p>
            <NextLink
              href="#"
              className="w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-secondary-3 rounded-full"
            >
              Follow Us
            </NextLink>
          </li>
          <li className="translate-y-[80px] bg-gray-97 p-9 pb-14 border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(167,175,190,0.5)] border-gray-70 flex flex-col items-center">
            <GithubIcon className="w-20 h-20" />
            <p className="mt-7">
              <b className="text-56 leading-none font-title font-semibold">GitHub</b>
            </p>
            <p className="mt-4 text-20 leading-[150%]">
              We appreciate any help even if it&apos;s a small typo change or an issue report.
              It&apos;s easy to become a contributor.
            </p>
            <NextLink
              href="#"
              className="flex mx-auto w-fit mt-11 px-14 py-6 uppercase text-16 leading-none font-bold tracking-tight text-white bg-gray-15 rounded-full"
            >
              Explore Codebase
            </NextLink>
          </li>
        </ul>
      </section>
      <section className="mt-[205px] bg-primary-1 text-white">
        <h2 className="sr-only">Subscribtion form</h2>
        <div className="container grid grid-cols-12 grid-gap">
          <div className="col-span-6">
            <Image
              className="-mt-[46px] -mb-[22px]"
              src="/images/star-ship.png"
              width={464}
              height={521}
              alt=""
            />
          </div>
          <div className="col-span-5">
            <form className="py-[72px]">
              <p>
                <b className="text-88 font-semibold leading-none font-title">
                  Subscribe to&nbsp;Newsletter
                </b>
              </p>
              <p className="mt-7 flex">
                <input
                  className="remove-autocomplete-styles outline-none flex-grow py-6 px-7 text-16 leading-none tracking-tight text-gray-40 rounded-l-full"
                  type="text"
                />
                <button className="flex-shrink-0 bg-black py-6 px-11 rounded-r-full uppercase">
                  Subscibe
                </button>
              </p>
              <p className="mt-5 text-14 leading-[137.5%]">
                By subscribing, you agree with Revue&apos;s{' '}
                <NextLink href={Route.TERMS}>Terms of Service</NextLink> and{' '}
                <NextLink href={Route.PRIVACY}>Privacy Policy</NextLink>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
