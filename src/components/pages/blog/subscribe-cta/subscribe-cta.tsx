import Image from 'next/image';

import Link from '@/components/shared/link';

import ROUTE from '@/lib/route';

const SubscribeCta = () => {
  return (
    <section className="mt-[90px] bg-primary-1 xl:mt-[53px] md:mt-11 sm:mt-[50px]">
      <div className="container grid-gap relative grid grid-cols-12 items-center py-[37px] xl:pt-9 xl:pb-[30px] md:py-8 sm:grid-cols-4 sm:pt-7">
        <Image
          className="absolute left-12 bottom-0 max-w-[16.5%] 2xl:left-12 xl:left-3 lg:-top-1 lg:bottom-auto lg:w-[17.7%] lg:max-w-[200px] md:left-1.5 md:w-auto md:max-w-[189px] sm:hidden"
          src="/images/form-image-lg.png"
          alt=""
          width={252}
          height={212}
          aria-hidden
        />
        <Image
          className="absolute right-0 -top-5 hidden sm:block 2xs:-top-1.5"
          src="/images/form-image-sm.png"
          alt=""
          width={127}
          height={132}
          aria-hidden
        />
        <h2 className="col-span-4 col-start-3 ml-4 font-title text-52 leading-none text-white 2xl:ml-[22px] 2xl:w-[calc(100%+22px)] xl:col-span-5 xl:col-start-3 xl:w-full xl:text-44 lg:ml-0 md:pl-11 md:text-38 sm:col-span-3 sm:col-start-1 sm:pl-0 sm:text-34">
          Learn product updates and database&nbsp;insight.
        </h2>
        <form className="col-span-6 text-white 2xl:pl-12 xl:col-span-5 xl:pl-0 sm:col-span-full sm:mt-5">
          <div className="flex">
            <input
              className="remove-autocomplete-styles h-16 flex-grow rounded-l-full px-7 text-16 leading-none text-gray-40 placeholder-gray-15 outline-none 2xl:tracking-tight xl:h-12 xl:py-4 xl:px-5"
              type="email"
              placeholder="Your email address..."
            />
            <button className="flex-shrink-0 rounded-r-full bg-black py-6 px-11 text-16 font-bold uppercase leading-none xl:py-4 xl:px-[22px] md:py-3 md:px-5">
              <span className="leading-none md:hidden">Subscribe</span>{' '}
              <img
                src="/images/arrow-form.svg"
                alt="Subscribe"
                className="hidden h-6 w-6 md:block"
              />
            </button>
          </div>
          <p className="mt-3 pl-7 text-14 leading-snug xl:mt-3 xl:max-w-[290px] xl:pl-5 md:mt-2 sm:max-w-full sm:pl-0">
            By subscribing, you agree with Revue&apos;s{' '}
            <Link
              to={ROUTE.TERMS}
              additionalClassName="whitespace-nowrap underline decoration-2 font-semibold decoration-[#ffffff40] underline-offset-[5px]"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to={ROUTE.PRIVACY}
              additionalClassName="whitespace-nowrap underline decoration-2 font-semibold decoration-[#ffffff40] underline-offset-[5px]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
};

export default SubscribeCta;
