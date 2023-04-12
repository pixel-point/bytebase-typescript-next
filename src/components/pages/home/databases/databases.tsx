import Image from 'next/image';

const Databases = () => {
  return (
    <section className="mt-[244px] 2xl:mt-[140px] xl:mt-32 md:mt-[96px] sm:mt-[80px] container grid grid-cols-12 grid-gap">
      <h2 className="col-span-12 place-self-center col-start-1 max-w-[1219px] lg:col-start-1 lg:col-end-13 font-title font-semibold leading-none text-88 xl:text-68 lg:text-54 md:text-48 text-center">
        <span className="-ml-2.5">Change, Query, Secure, Govern </span>
        <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
          all databases
        </mark>{' '}
        in a single place
      </h2>
      <div className="mt-[68px] 2xl:mt-14 col-span-12">
        <Image src="/images/scheme-lg.png" width={1472} height={650} alt="" className="sm:hidden" />
        <Image
          src="/images/scheme-mobile.png"
          width={1472}
          height={650}
          alt=""
          className="hidden sm:block"
        />
      </div>
    </section>
  );
};

export default Databases;
