'use client';

import { useEffect, useRef } from 'react';

import useScrollPosition from '@react-hook/window-scroll';
import clsx from 'clsx';

import Button from '@/components/shared/button';
import { LinkUnderlined } from '@/components/shared/link-underlined';

import Route from '@/lib/route';

import SmallArrowIcon from '@/svgs/small-arrow.inline.svg';

import Card, { type CardProps } from './card';

const cards: CardProps[] = [
  {
    video: {
      'video/mp4': '/videos/page/main/hero/1.mp4',
    },
    color: 'blue',
    href: '#',
    cover: '/images/page/main/hero/change-database.png',
    title: 'Change database',
    description:
      'Simplify database changes with standardization, lint rules, and GitOps integration.',
  },
  {
    video: {
      'video/mp4': '/videos/page/main/hero/2.mp4',
    },
    color: 'green',
    href: '#',
    cover: '/images/page/main/hero/query-data.png',
    title: 'Query data',
    description:
      "Perform complex SQL tasks and protect data privacy with ByteBase's web-based IDE.",
  },
  {
    video: {
      'video/mp4': '/videos/page/main/hero/3.mp4',
    },
    color: 'red',
    href: '#',
    cover: '/images/page/main/hero/secure-access.png',
    title: 'Secure access',
    description:
      'Eliminate administrative complexity and ensure compliance with one-stop resource management.',
  },
];

const DONE_STATE_MARGIN_PX = 160;
const CARD_STICKY_POSITION = 'top-[160px]';

const Hero = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const anchorRef = useRef<null | HTMLDivElement>(null);
  const topPositionRef = useRef<number>(0);
  const scrollY = useScrollPosition();

  useEffect(() => {
    topPositionRef.current = anchorRef.current ? anchorRef.current.getBoundingClientRect().top : 0;
  }, []);

  // TODO: update on resize
  useEffect(() => {
    if (containerRef.current) {
      const topPosition = topPositionRef.current - DONE_STATE_MARGIN_PX;
      const isDone = containerRef.current.classList.contains('done');

      if (scrollY >= topPosition && !isDone) {
        containerRef.current.classList.add('done');
      }
      if (scrollY < topPosition && isDone) {
        containerRef.current.classList.remove('done');
      }
    }
  }, [scrollY]);

  return (
    <div
      className="container gap-x-grid group mt-32 grid grid-cols-12 2xl:mt-[120px] lg:mt-[120px] md:mt-[104px] sm:mt-24"
      ref={containerRef}
    >
      <section className="col-start-1 col-end-8 row-start-1 row-end-2 3xl:col-end-9 xl:col-end-10 md:col-end-12">
        <header>
          {/* TODO: wrap to a link */}
          <span className="inline-flex items-center gap-1 rounded-full bg-tones-purple-light p-1 text-12 font-semibold leading-none text-primary-1">
            <span className="rounded-full bg-primary-1 px-2 py-1 text-white">What’s new?</span>
            <span className="flex items-center gap-1.5 px-2">
              1.10.0 Released
              <SmallArrowIcon width={7} height={6} />
            </span>
          </span>
          <div className="relative mt-4 xl:mt-3.5">
            <h1 className="font-title text-112 font-semibold leading-none xl:text-90 xl:leading-95 md:text-80 sm:text-48">
              <mark className="bg-transparent text-primary-1">Database</mark> schema change and
              version control
            </h1>
            <p className="absolute top-[244px] left-[338px] max-w-lg text-20 leading-140 xl:top-[177px] xl:left-[271px] xl:text-18 xl:leading-snug md:left-[231px] md:top-[158px] md:text-16">
              Bytebase offers a web-based collaboration workspace to help DBAs and Developers manage
              the lifecycle of application database schemas.
            </p>
          </div>
        </header>
        <footer className="mt-14 flex items-center gap-9 xl:mt-11 md:mt-7">
          <Button to={Route.INDEX} theme="primary-filled" size="lg">
            Request a Demo
          </Button>
          <LinkUnderlined to={Route.INDEX}>See Live Demo</LinkUnderlined>
        </footer>
      </section>
      <div className="col-span-full col-start-1 row-start-2 h-20 md:h-[60px]" />
      <div className="col-start-1 col-end-5 row-start-3 row-end-4" ref={anchorRef}>
        <Card {...cards[0]} />
      </div>
      <div className="col-start-5 col-end-9 row-start-1 row-end-4 pt-[461px] xl:row-start-2 xl:pt-[30px]">
        <Card className={clsx('sticky', CARD_STICKY_POSITION)} {...cards[1]} />
      </div>
      <div className="col-start-9 col-end-13 row-start-1 row-end-4 pt-[136px] xl:row-start-2 xl:-mt-[40px] xl:pt-0 md:-mt-[29px]">
        <Card className={clsx('sticky', CARD_STICKY_POSITION)} {...cards[2]} />
      </div>
    </div>
  );
};

export default Hero;
