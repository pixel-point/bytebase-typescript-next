import Image from 'next/image';
import NextLink from 'next/link';

const SubscriptionForm = () => {
  return (
    <section className="bg-primary-1 mt-[90px]">
      <form className="container flex items-center">
        <div className="flex items-center">
          <div className="relative w-[252px]">
            <Image
              src="/images/form-image-lg.png"
              alt=""
              width={252}
              height={212}
              className=" -translate-y-10 absolute -bottom-32"
            />
          </div>
          <h2 className="ml-4 py-[37px] font-title text-52 leading-none text-white max-w-[434px]">
            Learn product updates and database insight.
          </h2>
        </div>
        <div className="text-white ml-[54px] max-w-[716px] w-full">
          <p className="mt-7 lg:mt-[22px] md:mt-[10px] sm:mt-4 flex relative h-16 lg:h-12">
            <input
              className=" placeholder-gray-15 remove-autocomplete-styles outline-none flex-grow py-6 lg:py-4 px-7 lg:px-5 sm:px-5 text-16 leading-none tracking-tight text-gray-40 rounded-l-full"
              type="text"
              placeholder="Your email address..."
            />
            <button className="flex-shrink-0 bg-black py-6 lg:py-4 px-11 md:py-3 md:px-5 sm:px-5 sm:py-3 rounded-r-full uppercase text-16 font-bold leading-none">
              <span className="md:hidden">Subscribe</span>{' '}
              <img src="/images/arrow-form.svg" alt="" className="hidden md:!block w-6 h-6" />
            </button>
          </p>
          <p className="mt-5 lg:mt-3 sm:mt-2 [&>a]:border-b-[2px] [&>a]:border-[#FFFFFF40] [&>a]:pb-[3px] text-14 leading-snug lg:max-w-[290px]">
            By subscribing, you agree with Revue&apos;s{' '}
            <NextLink href="">Terms of Service</NextLink> and{' '}
            <NextLink href="">Privacy Policy</NextLink>.
          </p>
        </div>
      </form>
    </section>
  );
};

export default SubscriptionForm;
