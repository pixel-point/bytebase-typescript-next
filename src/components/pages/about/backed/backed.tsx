import Image from 'next/image';

const Backed = () => (
  <section className="container mt-40">
    <span className="mx-auto block w-fit rounded-[20px] bg-secondary-1 py-2 px-2.5 text-12 font-bold uppercase leading-none tracking-wider">
      Our Partners
    </span>
    <h2 className="mt-5 text-center font-title text-88 font-semibold leading-none">
      Backed by the best
    </h2>
    <div className="mt-[59px] grid grid-cols-2 gap-x-10">
      <div className="grid place-items-center border border-gray-90 bg-gray-97 py-[91px]">
        <Image
          src="/images/page/about/matrix-logo.svg"
          alt="Matrix Partners"
          width={353}
          height={142}
        />
      </div>
      <div className="relative flex items-center overflow-hidden border border-gray-90">
        <Image
          src="/images/page/about/cto.png"
          alt=""
          width={334}
          height={334}
          className="absolute -left-[14px] -top-[28px]"
        />
        <div className="translate-x-[308px]">
          <p className="text-18 font-semibold leading-normal text-primary-1">
            Co-Founder & CTO - PingCAP
          </p>
          <p className="mt-2 font-title text-56 font-semibold leading-none">Dongxu Huang</p>
        </div>
      </div>
    </div>
  </section>
);

export default Backed;
