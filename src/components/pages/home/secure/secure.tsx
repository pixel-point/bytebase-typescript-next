import Image from 'next/image';

import { LinkUnderlined } from '@/components/shared/link-underlined';

const Secure = () => {
  return (
    <section className="secure mt-[160px] 2xl:mt-36 xl:mt-32 lg:mt-24 md:mt-20 bg-black text-white lg:pt-16">
      <div className="container grid grid-cols-12 gap-x-10 2xl:gap-x-9 xl:gap-x-6 lg:gap-x-5">
        <div className="self-center col-start-1 col-end-7 xl:col-end-6 lg:col-end-13">
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
            Secure
          </span>
          <h2 className="mt-[14px] font-title font-semibold leading-none text-112 xl:text-90 lg:text-80 md:text-48 max-w-[400px]">
            <span className="bg-transparent text-secondary-3">Security</span> by design
          </h2>
          <p className="mt-6 xl:mt-4 lg:mt-2 text-20 xl:text-18 lg:text-16 leading-[150%] max-w-[416px] 2xl:max-w-[960px] lg:max-w-[590px]">
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
            src="/images/security-by-design-xxl.png"
            width={716}
            height={904}
            alt=""
          />
          <Image
            className="ml-auto hidden 2xl:block xl:hidden"
            src="/images/security-by-design-xl.png"
            width={654}
            height={812}
            alt=""
          />
          <Image
            className="ml-auto hidden xl:block lg:hidden"
            src="/images/security-by-design-lg.png"
            width={536}
            height={828}
            alt=""
          />
        </div>
      </div>
      <div className="relative mt-10 sm:mt-8 hidden lg:block w-full min-h-[755px] sm:min-h-[537px]">
        <Image
          className="ml-auto  hidden lg:block sm:hidden"
          src="/images/security-by-design-md.png"
          alt=""
          objectFit="cover"
          objectPosition="top"
          fill
        />
        <Image
          className="ml-auto hidden sm:block"
          src="/images/security-by-design-sm.png"
          alt=""
          objectPosition="top"
          objectFit="cover"
          fill
        />
      </div>
    </section>
  );
};

export { Secure };
