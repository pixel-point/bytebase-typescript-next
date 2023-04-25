import Image from 'next/image';

import Pill from '@/components/shared/pill';

import Card from './card';

const founders = {
  danny: {
    name: 'Danny',
    position: 'Co-Founder & CTO',
    image: '/images/page/about/danny.webp',
    imagexl: '/images/page/about/danny-lg.webp',
    imageMd: '/images/page/about/danny-md.webp',
    imageSm: '/images/page/about/danny-sm.webp',
    about:
      'Danny was the Staff Engineer at Google Cloud and TL overseeing Cloud SQL and API & Service Infrastructure. He has won Google&apos;s highest engineering award twice.',
  },
  tianzhou: {
    name: 'Tianzhou',
    position: 'Co-Founder & CEO',
    image: '/images/page/about/tianzhou.webp',
    imagexl: '/images/page/about/tianzhou-lg.webp',
    imageMd: '/images/page/about/tianzhou-md.webp',
    imageSm: '/images/page/about/tianzhou-sm.webp',
    about:
      'Tianzhou was the TL of Google Cloud SQL, the maintainer of Google&apos;s internal PostgreSQL and MySQL branch. He was the head of Database/<wbr />DevTools/<wbr />Collaboration group in Ant Group.',
  },
};

const MeetCrew = () => (
  <section className="container overflow-x-hidden pt-56 3xl:pt-52 xl:pt-[175px] md:pt-[122px] sm:pt-20">
    <div className="gap-x-grid grid grid-cols-12 items-start sm:grid-cols-4">
      <div className="relative col-span-full grid sm:text-center">
        <Pill theme="secondary-1" className="sm:mx-auto">
          Team
        </Pill>
        <h2 className="mt-3.5 font-title text-88 font-semibold leading-none xl:mt-4 xl:text-68 md:mt-3 md:text-54 sm:text-48 sm:leading-95">
          Meet our crew
        </h2>
        <Image
          src="/images/page/about/crew-ellipse.webp"
          alt="Built by engineers knowing database development flow"
          width={832}
          height={600}
          className="absolute -bottom-[260px] -right-[80px] 3xl:-right-[76px] xl:hidden"
        />
        <Image
          src="/images/page/about/crew-ellipse-lg.webp"
          alt="Built by engineers knowing database development flow"
          width={628}
          height={517}
          className="absolute -bottom-[230px] -right-11 hidden xl:block md:hidden"
        />
        <Image
          src="/images/page/about/crew-ellipse-md.webp"
          alt="Built by engineers knowing database development flow"
          width={474}
          height={394}
          className="absolute -bottom-[170px] -right-7 hidden md:block sm:hidden"
        />
        <Image
          src="/images/page/about/crew-ellipse-sm.webp"
          alt="Built by engineers knowing database development flow"
          width={360}
          height={388}
          className="absolute top-8 hidden h-auto w-screen max-w-[392px] justify-self-center sm:block"
        />
      </div>

      <Card
        info={founders.danny}
        theme="blue"
        className="-translate-y-[134px] xl:-translate-y-[89px] md:-translate-y-[62px] sm:mt-[275px] sm:translate-y-0"
        showHat
      />

      <Card
        info={founders.tianzhou}
        theme="green"
        imageStyle="sm:h-[98px] xl:order-none -order-1"
      />
    </div>
  </section>
);

export default MeetCrew;
