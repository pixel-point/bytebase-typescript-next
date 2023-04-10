import Image from 'next/image';

import { LinkUnderlined } from '@/components/shared/link-underlined';

const Change = () => {
  return (
    <section className="change mt-[160px] 2xl:mt-36 xl:mt-32 lg:mt-24 md:mt-20 bg-black text-white lg:pt-16">
      <div className="container grid grid-cols-12 gap-x-10 2xl:gap-x-9 xl:gap-x-6 lg:gap-x-5">
        <div className="self-center col-start-1 col-end-7 xl:col-end-6 lg:col-end-13">
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-primary-1 px-2.5 py-2 rounded-3xl">
            Change
          </span>
          <h2 className=" mt-[14px] font-title font-semibold leading-none text-112 xl:text-90 lg:text-80 md:text-48">
            <span className="bg-transparent text-secondary-1 ">Automate</span> database changes
          </h2>
          <p className="mt-6 xl:mt-4 lg:mt-2 text-20 xl:text-18 lg:text-16 leading-[150%] max-w-[504px] 2xl:max-w-[460px] lg:max-w-[590px]">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
          <div className="mt-8 md:mt-3 col-span-4 self-start">
            <LinkUnderlined to="">Learn more</LinkUnderlined>
          </div>
        </div>
        <div className="col-start-7 2xl:col-start-7 xl:col-start-6 col-end-13">
          <Image
            className="ml-auto 2xl:hidden"
            src="/images/automate-database-changes-xxl.png"
            width={716}
            height={904}
            alt=""
          />
          <Image
            className="ml-auto hidden 2xl:block xl:hidden"
            src="/images/automate-database-changes-xl.png"
            width={654}
            height={874}
            alt=""
          />
          <Image
            className="ml-auto hidden xl:block lg:hidden"
            src="/images/automate-database-changes-lg.png"
            width={536}
            height={743}
            alt=""
          />
        </div>
      </div>
      <div className=" mt-10 sm:mt-8 hidden lg:block relative w-full min-h-[654px] md:min-h-[436px]">
        <Image
          className="ml-auto  hidden lg:block sm:hidden h-[654px]"
          src="/images/automate-database-changes-md.png"
          alt=""
          objectPosition="top"
          objectFit="cover"
          fill
        />
        <Image
          className="ml-auto hidden sm:block"
          src="/images/automate-database-changes-sm.png"
          alt=""
          objectPosition="top"
          objectFit="cover"
          fill
        />
      </div>
    </section>
  );
};

export { Change };
