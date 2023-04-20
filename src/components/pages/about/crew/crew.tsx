import Image from 'next/image';

import { LinkUnderlined } from '@/components/shared/link-underlined';

import { crewList } from './data';

const Crew = () => (
  <section className="container mt-20 border-t border-gray-90 pt-[52px]">
    <ul className="grid grid-cols-4 gap-x-10 gap-y-20">
      {crewList.map((member) => (
        <li className="flex flex-col items-center justify-center" key={member.name}>
          <Image src={member.image} alt="" width={244} height={244} />
          <p className="text-24 font-bold leading-none">{member.name}</p>
          <p className="text-20 leading-7">{member.position}</p>
        </li>
      ))}
      <li className="flex flex-col items-center justify-center">
        <Image src="/images/page/about/join.png" alt="" width={244} height={244} />
        <LinkUnderlined to="/">Join us</LinkUnderlined>
      </li>
    </ul>
  </section>
);

export default Crew;
