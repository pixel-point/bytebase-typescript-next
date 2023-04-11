import Image from 'next/image';
import NextLink from 'next/link';

import Route from '@/lib/route';

import ArrowFormIcon from '@/svgs/arrow-form.inline.svg';

const SubscriptionForm = () => {
  return (
    <section className="subscriptionForm mt-[205px] 2xl:mt-[189px] xl:mt-[156px] lg:mt-[114px] bg-primary-1 text-white">
      <h2 className="sr-only">Subscribtion form</h2>
      <div className="container grid grid-cols-12 gap-x-10 2xl:gap-x-9 xl:gap-x-6 lg:gap-x-5 md:flex md:flex-col overflow-x-clip">
        <div className="col-start-2 -ml-10 xl:ml-0 col-span-5 xl:col-start-1 md:relative">
          <Image
            className="-mt-[46px] xl:-mt-6 -mb-[22px] xl:h-[422px] xl:w-[376px] lg:w-[305px] lg:h-[342px] md:h-[201px] md:w-[170px] md:absolute md:-right-[44px] md:-top-[20px] md:-rotate-[15deg]"
            src="/images/star-ship.png"
            width={464}
            height={521}
            alt=""
          />
        </div>
        <div className="col-start-7 -ml-10 2xl:ml-0 col-span-5 xl:col-start-7 xl:-ml-6 lg:ml-0 xl:col-span-6 lg:col-start-7 lg:col-span-6 md:max-w-[80%] xs:max-w-none">
          <form className="py-[72px] xl:py-14 lg:py-11 md:py-10">
            <p>
              <b className="text-88 xl:text-68 lg:text-56 md:text-48 font-semibold leading-none md:leading-[45px] font-title">
                Subscribe to&nbsp;Newsletter
              </b>
            </p>
            <p className="mt-7 xl:mt-5 lg:mt-[10px] md:mt-4 flex relative">
              <input
                className="remove-autocomplete-styles outline-none flex-grow py-6 xl:py-4 px-7 md:px-5 text-16 leading-none tracking-tight text-gray-40 rounded-l-full"
                type="text"
                placeholder="Your email address..."
              />
              <button className="flex-shrink-0 bg-black py-6 xl:py-4 px-11 md:px-5 md:py-3 rounded-r-full uppercase">
                <span className="lg:hidden">Subscibe</span>{' '}
                <ArrowFormIcon className="hidden lg:!block w-6 h-6" />
              </button>
            </p>
            <p className="mt-5 xl:mt-3 md:mt-2 [&>a]:border-b-[2px] [&>a]:border-[#FFFFFF40] [&>a]:pb-[3px] text-14 leading-[137.5%] xl:max-w-[290px]">
              By subscribing, you agree with Revue&apos;s{' '}
              <NextLink href={Route.TERMS}>Terms of Service</NextLink> and{' '}
              <NextLink href={Route.PRIVACY}>Privacy Policy</NextLink>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
