import Image from 'next/image';
import NextLink from 'next/link';

import Route from '@/lib/route';

const SubscriptionForm = () => {
  return (
    <section className="subscriptionForm mt-[205px] bg-primary-1 text-white">
      <h2 className="sr-only">Subscribtion form</h2>
      <div className="container grid grid-cols-12 grid-gap">
        <div className="col-span-6">
          <Image
            className="-mt-[46px] -mb-[22px]"
            src="/images/star-ship.png"
            width={464}
            height={521}
            alt=""
          />
        </div>
        <div className="col-span-5">
          <form className="py-[72px]">
            <p>
              <b className="text-88 font-semibold leading-none font-title">
                Subscribe to&nbsp;Newsletter
              </b>
            </p>
            <p className="mt-7 flex">
              <input
                className="remove-autocomplete-styles outline-none flex-grow py-6 px-7 text-16 leading-none tracking-tight text-gray-40 rounded-l-full"
                type="text"
              />
              <button className="flex-shrink-0 bg-black py-6 px-11 rounded-r-full uppercase">
                Subscibe
              </button>
            </p>
            <p className="mt-5 text-14 leading-[137.5%]">
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
