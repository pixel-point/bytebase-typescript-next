import Image from 'next/image';

const MeetCrew = () => (
  <section className="container">
    <div className="flex items-center justify-between">
      <div>
        <span className="w-fit rounded-[20px] bg-secondary-1 py-2 px-[10px] text-12 font-bold uppercase leading-none tracking-wider">
          Team
        </span>
        <h2 className="mt-5 font-title text-88 font-semibold leading-none">Meet our crew</h2>
      </div>
      <Image
        src="/images/page/about/crew-ellipse.png"
        alt=""
        width="750"
        height="541"
        className="relative translate-x-[49px] translate-y-8"
      />
    </div>
    <div className="mt-7 grid grid-cols-2 items-stretch gap-x-10">
      <div className="relative -translate-y-[133px] bg-tones-blue-light shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)]">
        <div className="flex items-start gap-1 pt-8 pb-6 pl-8 pr-2 shadow-[inset_0_0_0_1px_rgba(156,186,201,0.5)]">
          <div>
            <p className="text-18 font-semibold text-[#176782]">Co-Founder & CTO</p>
            <p className="mt-2 font-title text-56 font-semibold leading-none">Danny</p>
            <p className="font-regular mt-5 text-18">
              Danny was the Staff Engineer at Google Cloud and TL overseeing Cloud SQL and API &
              Service Infrastructure. He has won Google&apos;s highest engineering award twice.
            </p>
          </div>
          <Image
            src="/images/page/about/danny.png"
            alt=""
            width="244"
            height="244"
            className="shrink-0"
          />
        </div>
        <Image
          src="/images/hat.png"
          width={92}
          height={65}
          alt=""
          className="absolute -top-7 -left-9 lg:-top-4.5 lg:-left-6 lg:h-[42px] lg:w-[58px] sm:h-[46px] sm:w-16"
        />
      </div>

      <div className="bg-tones-green-light shadow-[inset_6px_6px_0_#fff,0_5px_20px_rgba(143,188,169,0.4)]">
        <div className="flex items-start gap-1 pt-8 pb-6 pl-2 pr-8 shadow-[inset_0_0_0_1px_rgba(143,188,169,0.4)]">
          <Image
            src="/images/page/about/tianzhou.png"
            alt=""
            width="244"
            height="244"
            className="shrink-0"
          />
          <div>
            <p className="text-18 font-semibold text-[#056049]">Co-Founder & CEO</p>
            <p className="mt-2 font-title text-56 font-semibold leading-none">Tianzhou</p>
            <p className="mt-5 text-18">
              Tianzhou was the TL of Google Cloud SQL, the maintainer of Google&apos;s internal
              PostgreSQL and MySQL branch. He was the head of Database/
              <wbr />
              DevTools/
              <wbr />
              Collaboration group in Ant Group.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MeetCrew;
