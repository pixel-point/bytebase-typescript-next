import Image from 'next/image';

import Pill from '@/components/shared/pill';

const Hero = () => {
  const title = 'About us page';
  const supTitle = 'Why we build';

  return (
    <section className="container gap-x-grid relative grid grid-cols-12 justify-items-center pt-[136px] 2xl:pt-[128px] lg:pt-[120px] md:pt-[104px] sm:grid-cols-4 sm:pt-24">
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
        className="col-span-11 col-start-2 mt-[48px] 2xl:hidden"
        priority
      />
      <Image
        src="/images/page/about/why-we-build-2xl.webp"
        alt=""
        width={1229}
        height={631}
        className="col-span-11 col-start-2 mt-[56px] hidden 2xl:block lg:hidden"
        priority
      />
      <Image
        src="/images/page/about/why-we-build-lg.webp"
        alt=""
        width={936}
        height={528}
        className="col-span-full mt-[56px] hidden lg:block md:hidden"
        priority
      />
      <Image
        src="/images/page/about/why-we-build-md.webp"
        alt=""
        width={712}
        height={388}
        className="col-span-full mt-6 hidden md:block sm:hidden"
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
      <div className="absolute bottom-[355px] left-0 col-span-3 col-start-2 w-[266px] 2xl:w-auto lg:bottom-[327px] lg:col-span-4 lg:col-start-1 lg:w-[240px] md:bottom-[212px] md:col-span-3 md:col-start-1 md:w-auto sm:static sm:col-span-2 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none lg:text-88 md:text-72 sm:text-48 sm:leading-95">
          10+
        </span>
        <p className="leading-1.4 font-regular text-20 lg:text-16 lg:leading-snug md:text-14 md:leading-tight md:tracking-tight">
          Bytebase supports every major database systems
        </p>
      </div>
      <div className="absolute bottom-[327px] left-0 col-span-3 col-start-10 w-[284px] 2xl:w-auto lg:bottom-[303px] lg:right-0 lg:left-auto lg:col-span-4 lg:col-start-9 lg:w-[240px] md:bottom-[180px] md:col-span-3 md:col-span-3 md:col-start-10 md:w-full sm:static sm:col-span-2 sm:col-start-3 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none lg:text-88 md:text-72 sm:text-48 sm:leading-95">
          100+
        </span>
        <p className="leading-1.4 font-regular text-20 lg:text-16 lg:leading-snug md:text-14 md:leading-tight md:tracking-tight">
          Bytebase offers the most comprehensive SQL Lint rules
        </p>
      </div>
      <div className="absolute bottom-0 left-0 col-span-3 col-start-6 w-[252px] 2xl:w-auto lg:right-0 lg:left-auto lg:col-span-4 lg:col-start-5 lg:w-[240px] md:col-span-3 md:col-start-6 md:w-full sm:static sm:col-span-2 sm:col-start-2 sm:mt-7 sm:text-center">
        <span className="font-title text-112 font-semibold leading-none lg:text-88 md:text-72 sm:text-48 sm:leading-95">
          100%
        </span>
        <p className="leading-1.4 font-regular text-20 lg:text-16 lg:leading-snug md:text-14 md:leading-tight md:tracking-tight">
          All Bytebase source code is available on GitHub
        </p>
      </div>
    </section>
  );
};

export default Hero;
