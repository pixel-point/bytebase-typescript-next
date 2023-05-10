import Image from 'next/image';

import Pill from '@/components/shared/pill';

const Hero = () => {
  return (
    <section className="container pt-[136px] 3xl:pt-[128px] xl:pt-[120px] md:pt-[104px] sm:pt-24">
      <div className="gap-x-grid relative grid grid-cols-12 justify-items-center sm:grid-cols-4">
        <Pill theme="secondary-1" className="col-span-full">
          Why we build
        </Pill>
        <h2 className="col-span-full mt-3.5 max-w-[1000px] text-center font-title text-88 font-semibold leading-none xl:max-w-[780px] xl:text-68 xl:leading-104 md:mt-2 md:max-w-[620px] md:text-54 sm:text-48 sm:leading-95">
          Standardize database changes by{' '}
          <mark className="bg-transparent text-primary-1">unification</mark>, lint rules
        </h2>
        <Image
          src="/images/page/about/why-we-build.webp"
          alt=""
          width={1292}
          height={631}
          className="col-span-11 col-start-2 mt-14 justify-self-start 3xl:hidden"
          priority
        />
        <Image
          src="/images/page/about/why-we-build-3xl.webp"
          alt=""
          width={1229}
          height={631}
          className="col-span-11 col-start-2 mt-[62px] hidden 3xl:block xl:hidden"
        />
        <Image
          src="/images/page/about/why-we-build-xl.webp"
          alt=""
          width={936}
          height={528}
          className="col-span-full mt-16 hidden xl:block md:hidden"
        />
        <Image
          src="/images/page/about/why-we-build-md.webp"
          alt=""
          width={712}
          height={388}
          className="col-span-full mt-6 hidden md:block sm:hidden"
        />
        <Image
          src="/images/page/about/why-we-build-sm.webp"
          alt=""
          width={328}
          height={298}
          className="col-span-full mt-9 hidden sm:block"
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
        <div className="absolute bottom-[355px] left-0 col-span-3 col-start-2 w-[266px] 3xl:w-auto xl:bottom-[328px] xl:col-span-4 xl:col-start-1 xl:w-[240px] md:bottom-[212px] md:col-span-3 md:col-start-1 md:w-auto sm:static sm:col-span-2 sm:mt-6 sm:text-center">
          <b className="font-title text-112 font-semibold leading-none xl:text-88 md:text-72 sm:text-48 sm:leading-95">
            10+
          </b>
          <p className="leading-1.4 font-regular text-20 xl:mt-2 xl:text-16 xl:leading-snug md:text-14 md:leading-tight md:tracking-tight sm:mt-0">
            Bytebase supports every major database systems
          </p>
        </div>
        <div className="absolute bottom-[327px] left-0 col-span-3 col-start-10 w-[284px] 3xl:w-auto xl:bottom-[303px] xl:right-0 xl:left-auto xl:col-span-4 xl:col-start-9 xl:w-[240px] md:bottom-[180px] md:col-span-3 md:col-start-10 md:w-full sm:static sm:col-span-2 sm:col-start-3 sm:mt-6 sm:text-center">
          <b className="font-title text-112 font-semibold leading-none xl:text-88 md:text-72 sm:text-48 sm:leading-95">
            100+
          </b>
          <p className="leading-1.4 font-regular text-20 xl:mt-2 xl:text-16 xl:leading-snug md:text-14 md:leading-tight md:tracking-tight sm:mt-0">
            Bytebase offers the most comprehensive SQL Lint rules
          </p>
        </div>
        <div className="absolute bottom-0 left-0 col-span-3 col-start-6 w-[252px] 3xl:w-auto xl:right-0 xl:left-auto xl:col-span-4 xl:col-start-5 xl:w-[240px] md:col-span-3 md:col-start-6 md:w-full sm:static sm:col-span-2 sm:col-start-2 sm:mt-7 sm:text-center">
          <b className="font-title text-112 font-semibold leading-none xl:text-88 md:text-72 sm:text-48 sm:leading-95">
            100%
          </b>
          <p className="leading-1.4 font-regular text-20 xl:mt-2 xl:text-16 xl:leading-snug md:text-14 md:leading-tight md:tracking-tight sm:mt-0">
            All Bytebase source code is available on GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
