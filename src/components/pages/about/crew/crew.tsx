import Image from 'next/image';

import { LinkUnderlined } from '@/components/shared/link-underlined';

import { crewList } from './data';

const Crew = () => (
  <section className="container mt-20 border-t border-gray-90 pt-[52px] 2xl:mt-16 2xl:pt-12 lg:mt-14 lg:pt-10 md:mt-12 md:pt-9 xs:mt-10 xs:pt-6">
    <ul className="gap-x-grid grid grid-cols-12 gap-y-20 2xl:gap-y-16 lg:gap-y-14 md:gap-y-8 xs:grid-cols-4 xs:gap-y-6">
      {crewList.map((member) => (
        <li
          className="col-span-3 flex flex-col items-center justify-center xs:col-span-2"
          key={member.name}
        >
          <Image src={member.image} alt="" width={244} height={244} className="lg:w-full" />
          <p className="text-24 font-bold leading-none lg:text-20 md:text-18">{member.name}</p>
          <p className="mt-1 text-center text-20 leading-7 lg:text-18 lg:leading-tight md:mt-0.5 md:text-16 md:leading-snug">
            {member.position}
          </p>
        </li>
      ))}
      <li className="col-span-3 flex flex-col items-center justify-center xs:col-span-2">
        <Image src="/images/page/about/join.webp" alt="" width={244} height={244} />
        <LinkUnderlined href="/jobs">Join us</LinkUnderlined>
      </li>
    </ul>
  </section>
);

export default Crew;
