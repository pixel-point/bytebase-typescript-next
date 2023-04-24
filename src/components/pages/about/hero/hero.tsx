import Image from 'next/image';

import Pill from '@/components/shared/pill';

const Hero = () => {
  const title = 'About us page';
  const supTitle = 'Why we build';

  return (
    <section className="container gap-x-grid relative grid grid-cols-12 justify-items-center pt-[136px] sm:grid-cols-4">
      <h1 className="sr-only">{title}</h1>
      <Pill className="col-span-full">{supTitle}</Pill>
      <h2 className="col-span-full mt-5 max-w-[1000px] text-center font-title text-88 font-semibold leading-none lg:max-w-[780px] lg:text-68 md:mt-3 md:max-w-[620px] md:text-54 sm:text-48 sm:leading-95">
        Simplify database changes with{' '}
        <mark className="bg-transparent text-primary-1">standardization</mark>, lint rules
      </h2>
      <Image
        src="/images/page/about/why-we-build.webp"
        alt=""
        width={1292}
        height={631}
        className="col-span-11 col-start-2 mt-[52px] sm:hidden"
        priority
      />
      <Image
        src="/images/page/about/why-we-build-sm.webp"
        alt=""
        width={328}
        height={298}
        className="col-span-full mt-7 hidden sm:block"
        priority
      />
      <Image
        src="/images/page/about/database.webp"
        alt=""
        width={58}
        height={77}
        className="absolute bottom-3 left-0 col-start-1 hidden sm:block"
      />
      <Image
        src="/images/page/about/sheets.webp"
        alt=""
        width={78}
        height={78}
        className="absolute right-0 bottom-[38px] col-end-5 hidden sm:block"
      />
      <div className="absolute bottom-[355px] left-0 col-span-3 col-start-2 lg:col-start-1 sm:static sm:col-span-2 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none sm:text-48 sm:leading-95">
          10+
        </span>
        <p className="leading-1.4 font-regular max-w-[266px] text-20 sm:text-14 sm:leading-tight sm:tracking-tight">
          Bytebase supports every major database systems
        </p>
      </div>
      <div className="absolute bottom-[327px] left-0 col-span-3 col-start-10 sm:static sm:col-span-2 sm:col-start-3 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none sm:text-48 sm:leading-95">
          100+
        </span>
        <p className="leading-1.4 font-regular max-w-[284px] text-20 sm:text-14 sm:leading-tight sm:tracking-tight">
          Bytebase offers the most comprehensive SQL Lint rules
        </p>
      </div>
      <div className="absolute bottom-0 left-0 col-span-3 col-start-6 sm:static sm:col-span-2 sm:col-start-2 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none sm:text-48 sm:leading-95">
          100%
        </span>
        <p className="leading-1.4 font-regular max-w-[252px] text-20 sm:text-14 sm:leading-tight sm:tracking-tight">
          All Bytebase source code is available on GitHub
        </p>
      </div>
    </section>
  );
};

export default Hero;
