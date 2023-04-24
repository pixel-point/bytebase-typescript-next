import Image from 'next/image';

import Pill from '@/components/shared/pill';

import Card from './card';

const MeetCrew = () => (
  <section className="container mt-56 2xl:mt-52 lg:mt-[175px] md:mt-[122px] sm:mt-20">
    <div className="gap-x-grid grid grid-cols-12 items-start sm:grid-cols-4">
      <div className="relative col-span-12 sm:col-span-full">
        <Image
          src="/images/page/about/crew-ellipse.webp"
          alt="Built by engineers knowing database development flow"
          width={832}
          height={600}
          className="absolute -bottom-[260px] -right-[90px] mt-36"
        />
        <div className="col-span-full sm:text-center">
          <Pill className="sm:mx-auto">Team</Pill>
          <h2 className="mt-5 font-title text-88 font-semibold leading-none lg:mt-4 lg:text-68 md:mt-3 md:text-54 sm:text-48 sm:leading-95">
            Meet our crew
          </h2>
        </div>
      </div>

      <Card
        name="Danny"
        position="Co-Founder & CTO"
        image="/images/page/about/danny.webp"
        imageLg="/images/page/about/danny-lg.webp"
        imageMd="/images/page/about/danny-md.webp"
        imageSm="/images/page/about/danny-sm.webp"
        positionColor="tones-deep-blue-dark"
        insideStyle="shadow-[inset_0_0_0_1px_rgba(156,186,201,0.5)]  pr-2 pl-8"
        className="-translate-y-[134px] bg-tones-blue-light shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] lg:-translate-y-[89px] md:-translate-y-[62px] sm:translate-y-0"
        showHat
      >
        Danny was the Staff Engineer at Google Cloud and TL overseeing Cloud SQL and API & Service
        Infrastructure. He has won Google&apos;s highest engineering award twice.
      </Card>

      <Card
        name="Tianzhou"
        position="Co-Founder & CEO"
        image="/images/page/about/tianzhou.webp"
        imageLg="/images/page/about/tianzhou-lg.webp"
        imageMd="/images/page/about/tianzhou-md.webp"
        imageSm="/images/page/about/tianzhou-sm.webp"
        imageStyle="sm:h-[98px] -order-1 lg:order-0"
        positionColor="tones-deep-green-dark"
        insideStyle="shadow-[inset_0_0_0_1px_rgba(143,188,169,0.4)] pl-2 pr-8"
        className="bg-tones-green-light shadow-[inset_6px_6px_0_#fff,0_5px_20px_rgba(143,188,169,0.4)]"
      >
        Tianzhou was the TL of Google Cloud SQL, the maintainer of Google&apos;s internal PostgreSQL
        and MySQL branch. He was the head of Database/
        <wbr />
        DevTools/
        <wbr />
        Collaboration group in Ant Group.
      </Card>
    </div>
  </section>
);

export default MeetCrew;
