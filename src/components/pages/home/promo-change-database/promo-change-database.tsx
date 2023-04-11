import Image from 'next/image';

import { LinkUnderlined } from '@/components/shared/link-underlined';

const PromoChangeDatabase = () => {
  return (
    <section className="change mt-[160px] 2xl:mt-36 xl:mt-32 lg:mt-24 md:mt-20 bg-black text-white lg:pt-16">
      <div className="container grid grid-cols-12 grid-gap">
        <div className="self-center col-start-1 col-end-7 xl:col-end-6 lg:col-end-13">
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-primary-1 px-2.5 py-2 rounded-3xl">
            Change
          </span>
          <h2 className="mt-3.5 font-title font-semibold leading-none text-112 xl:text-90 lg:text-80 md:text-48">
            <span className="bg-transparent text-secondary-1">Automate</span> database changes
          </h2>
          <p className="mt-6 xl:mt-4 lg:mt-2 text-20 xl:text-18 lg:text-16 leading-[150%] max-w-[504px] 2xl:max-w-[460px] lg:max-w-[590px]">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
          <div className="mt-8 md:mt-3 col-span-4 self-start">
            <LinkUnderlined to="">Learn more</LinkUnderlined>
          </div>
        </div>
        <div className="col-start-7 2xl:col-start-7 xl:col-start-6 col-end-12 2xl:col-end-13">
          <Image
            className="ml-auto lg:hidden"
            src="/images/automate-database-changes-lg.png"
            width={590}
            height={904}
            alt=""
          />
        </div>
      </div>
      <div className="lg:mt-10 sm:mt-8 hidden lg:block w-full">
        <Image
          className="ml-auto  hidden lg:block"
          src="/images/automate-database-changes-md.png"
          alt=""
          width={1023}
          height={654}
        />
      </div>
    </section>
  );
};

export default PromoChangeDatabase;
