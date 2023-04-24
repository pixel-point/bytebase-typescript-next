import Image from 'next/image';

import Pill from '@/components/shared/pill';

const Backed = () => (
  <section className="container mt-40  2xl:mt-[144px] lg:mt-32 md:mt-24 sm:mt-20 ">
    <div className="gap-x-grid grid grid-cols-12 sm:grid-cols-4">
      <Pill className="col-span-full justify-self-center">Our Partners</Pill>
      <h2 className="col-span-full mt-5 justify-self-center text-center font-title text-88 font-semibold leading-none lg:mt-4 lg:text-68 md:mt-3 md:text-54 sm:text-48 sm:leading-95">
        Backed by the best
      </h2>
      <div className="col-span-6 row-start-3 mt-14 grid place-items-center border border-gray-90 bg-gray-97 py-[91px] 2xl:py-[83px] lg:mt-12 lg:py-[58px] md:mt-10 md:py-[105px] sm:col-span-4 sm:mt-8 sm:py-16">
        <Image
          src="/images/page/about/matrix-logo.svg"
          alt="Matrix Partners"
          width={353}
          height={142}
          className="2xl:w-[324px] lg:w-[225px] md:w-[218px] sm:w-[172px]"
        />
      </div>
      <div className="col-span-6 row-start-3 mt-14 flex items-center border border-gray-90 lg:mt-12 md:mt-10 md:flex-col md:py-6 md:text-center sm:col-span-4 sm:row-start-4 sm:mt-4">
        <Image
          src="/images/page/about/cto.webp"
          alt=""
          width={308}
          height={306}
          className="self-start 2xl:hidden lg:w-[206px] md:w-[198px] md:self-center sm:w-[124px]"
        />
        <Image
          src="/images/page/about/cto-2xl.webp"
          alt=""
          width={296}
          height={296}
          className="hidden 2xl:block lg:w-[206px] md:hidden"
        />
        <Image
          src="/images/page/about/cto-md.webp"
          alt=""
          width={198}
          height={174}
          className="hidden md:block sm:w-[124px]"
        />
        <div>
          <p className="text-18 font-semibold leading-normal text-primary-1 lg:text-16 lg:leading-snug md:mt-2 md:text-15 sm:text-14">
            Co-Founder & CTO - PingCAP
          </p>
          <p className="mt-2 font-title text-56 font-semibold leading-none lg:mt-1.5 lg:text-44 md:text-38 sm:mt-1 sm:text-34">
            Dongxu Huang
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Backed;
