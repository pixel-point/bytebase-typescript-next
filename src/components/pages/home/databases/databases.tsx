import Image from 'next/image';

const Databases = () => {
  return (
    <section className="databases mt-[248px] container grid grid-cols-12 grid-gap">
      <h2 className="col-span-10 col-start-2 font-title font-semibold leading-none text-88 lg:text-68 text-center">
        Change, Query, Secure, Govern{' '}
        <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
          all databases
        </mark>{' '}
        in a single place
      </h2>
      <div className="mt-[68px] col-span-12">
        <Image src="/images/scheme.png" width={1472} height={600} alt="" />
      </div>
    </section>
  );
};

export { Databases };
