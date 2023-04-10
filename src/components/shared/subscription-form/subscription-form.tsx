import Image from 'next/image';
import NextLink from 'next/link';

import Route from '@/lib/route';

import ArrowFormIcon from '@/svgs/arrow-form.inline.svg';

const SubscriptionForm = () => {
  return (
    <section className="subscriptionForm mt-[205px] bg-primary-1 text-white">
      <h2 className="sr-only">Subscribtion form</h2>
      <div className="container grid grid-cols-12 gap-x-10 2xl:gap-x-9 xl:gap-x-6">
        <div className="col-span-6 lg:col-span-5">
          <Image
            className="-mt-[46px] -mb-[22px] xl:h-[422px] xl:w-[376px] lg:w-[305px] lg:h-[342px]"
            src="/images/star-ship.png"
            width={464}
            height={521}
            alt=""
          />
        </div>
        <div className="col-span-5 xl:col-span-6">
          <form className="py-[72px] xl:py-14 lg:py-11">
            <p>
              <b className="text-88 xl:text-68 lg:text-56 font-semibold leading-none font-title">
                Subscribe to&nbsp;Newsletter
              </b>
            </p>
            <p className="mt-7 xl:mt-5 lg:mt-[10px] flex relative">
              <input
                className="remove-autocomplete-styles outline-none flex-grow py-6 xl:py-4 px-7 text-16 leading-none tracking-tight text-gray-40 rounded-l-full"
                type="text"
              />
              <button className="flex-shrink-0 bg-black py-6 xl:py-4 px-11 rounded-r-full uppercase">
                <span className="lg:hidden">Subscibe</span>{' '}
                <ArrowFormIcon className="hidden lg:!block w-6 h-6" />
              </button>
            </p>
            <p className="mt-5 xl:mt-3 [&>a]:border-b-[2px] [&>a]:!border-opacity-10 [&>a]:pb-[3px] text-14 leading-[137.5%] xl:max-w-[290px]">
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

export { SubscriptionForm };
