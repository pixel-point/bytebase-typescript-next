import Image from 'next/image';

const Query = () => {
  return (
    <section className="query mt-[94px] container relative">
      <header className="pt-[66px]">
        <Image
          className="absolute top-0 right-[156px]"
          src="/images/ufo.png"
          width={230}
          height={218}
          alt=""
        />
        <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
          Query
        </span>
        <h2 className="font-title font-semibold leading-none text-88 max-w-3xl">
          Explore data with <span className="whitespace-nowrap">all-in-one</span>{' '}
          <mark className="bg-transparent text-primary-1 whitespace-nowrap text-center">
            SQL editor
          </mark>
        </h2>
      </header>
      <div className="mt-10 grid grid-cols-12 grid-gap">
        <div className="row-span-full col-span-full">
          <Image
            src="/images/interface.png"
            className="w-full h-auto shadow-[0_5px_15px_rgba(15,22,36,0.2)] rounded"
            width={1472}
            height={845}
            alt=""
          />
        </div>
        <div className="row-span-full col-start-9 col-span-4 pr-10">
          <div className="bg-tones-green-light border shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(143,188,169,0.5)] border-tones-green-dark -translate-y-10 px-6 py-3.5 divide-y divide-tones-green-dark min-h-[520px]">
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Explore the schema
              </h3>
              <p className="mt-3 leading-[150%]">
                Perform complex SQL tasks and protect data privacy with ByteBase&apos;s web-based
                IDE, anonymization engine, and access controls.
              </p>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Run and explain query
              </h3>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">Anonymize data</h3>
            </div>
            <div className="py-[26px]">
              <h3 className="font-bold text-24 leading-[112.%] tracking-tight">
                Database access control
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Query };
