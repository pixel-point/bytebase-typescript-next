import Image from 'next/image';
import NextLink from 'next/link';

const Secure = () => {
  return (
    <section className="secure mt-[160px] bg-black text-white">
      <div className="container grid grid-cols-12 grid-gap">
        <header className="col-span-4 self-end">
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-secondary-1 px-2.5 py-2 rounded-3xl text-gray-15">
            Secure
          </span>
          <h2 className="font-title font-semibold leading-none text-112">
            <mark className="bg-transparent text-secondary-3">Security</mark> by design
          </h2>
          <p className="mt-6 text-20 leading-[150%]">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
        </header>
        <div className="row-span-2 col-span-8">
          <Image
            className="ml-auto"
            src="/images/security-by-design.png"
            width={717}
            height={904}
            alt=""
          />
        </div>
        <footer className="mt-8 col-span-4 self-start">
          <NextLink href="#">Learn more</NextLink>
        </footer>
      </div>
    </section>
  );
};

export { Secure };
