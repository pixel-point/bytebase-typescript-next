import Image from 'next/image';

const Options = () => {
  return (
    <section className="options">
      <h2 className="sr-only">Features</h2>
      <div className="bg-cite">
        <div className="container flex items-center pt-16 pb-[52px]">
          <Image
            className="order-2 flex-shrink-0 translate-x-3"
            src="/images/auto-style.png"
            width={590}
            height={320}
            alt=""
          />
          <div className="order-1 flex-grow">
            <p>
              <b className="text-44 font-bold leading-[112.5%] -tracking-[0.04em]">
                <mark className="bg-transparent text-primary-1">Auto style</mark> and anti-patterns
                checks
              </b>
            </p>
            <p className="mt-4.5 text-18 leading-none">
              100+ lint rules to detect SQL anti-patterns and enforce consistent SQL style in the
              organization.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-px bg-tones-purple-light">
        <div className="container">
          <p className="py-8">
            <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">
              Batch schema changes to tenant databases
            </b>
          </p>
        </div>
      </div>
      <div className="mt-px bg-tones-purple-light">
        <div className="container">
          <p className="py-8">
            <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">
              Online schema change
            </b>
          </p>
        </div>
      </div>
      <div className="mt-px bg-tones-purple-light">
        <div className="container">
          <p className="py-8">
            <b className="text-30 font-bold leading-[112.5%] -tracking-[0.04em]">GitOps</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export { Options };
