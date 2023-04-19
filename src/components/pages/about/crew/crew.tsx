import Image from 'next/image';

import { crewList } from './crewList';

const Crew = () => (
  <section className="container mt-20 grid grid-cols-4 gap-x-10 gap-y-20 border-t border-gray-90 pt-[52px]">
    {crewList.map((member) => (
      <div className="flex flex-col items-center justify-center" key={member.name}>
        <Image src={member.image} alt="" width="244" height="244" className="mx-auto" />
        <p className="text-24 font-bold leading-none">{member.name}</p>
        <p className="text-20 leading-7">{member.position}</p>
      </div>
    ))}
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/page/about/join.png"
        alt=""
        width="244"
        height="244"
        className="mx-auto"
      />
      <p className="mt-[18px] w-fit border-b-[3px] border-secondary-2 pb-1 text-16 font-bold uppercase leading-none tracking-wide">
        Join us
      </p>
    </div>
  </section>
);

export default Crew;
