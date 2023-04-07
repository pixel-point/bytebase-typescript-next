import Image from 'next/image';
import NextLink from 'next/link';

const Change = () => {
  return (
    <section className="change mt-[160px] bg-black text-white">
      <div className="container grid grid-cols-12 grid-gap">
        <header className="col-span-4 self-end">
          <span className="inline-flex font-bold uppercase text-12 leading-none tracking-[0.02em] bg-primary-1 px-2.5 py-2 rounded-3xl">
            Change
          </span>
          <h2 className="font-title font-semibold leading-none text-112">
            <mark className="bg-transparent text-secondary-1">Automate</mark> database changes
          </h2>
          <p className="mt-6 text-20 leading-[150%]">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
        </header>
        <div className="row-span-2 col-span-8">
          <Image
            className="ml-auto mr-[110px]"
            src="/images/automate-database-changes.png"
            width={620}
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

export { Change };
