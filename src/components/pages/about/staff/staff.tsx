import Image from 'next/image';

type staffMember = {
  image: string;
  name: string;
  position: string;
};

const staffList: staffMember[] = [
  {
    image: '/images/page/about/zhe.png',
    name: 'Zhe',
    position: 'Intern',
  },
  {
    image: '/images/page/about/junyi.png',
    name: 'Junyi',
    position: 'Engineering',
  },
  {
    image: '/images/page/about/mila.png',
    name: 'Mila',
    position: 'Product Marketing',
  },
  {
    image: '/images/page/about/steven.png',
    name: 'Steven',
    position: 'Intern',
  },
  {
    image: '/images/page/about/changyu.png',
    name: 'Changyu',
    position: 'Solution Architect',
  },
  {
    image: '/images/page/about/ningjing.png',
    name: 'Ningjing',
    position: 'Developer Advocate',
  },
  {
    image: '/images/page/about/zipeng.png',
    name: 'Zipeng',
    position: 'Intern',
  },
  {
    image: '/images/page/about/ji.png',
    name: 'Ji',
    position: 'Engineering',
  },
  {
    image: '/images/page/about/candy.png',
    name: 'Candy',
    position: 'Product Manager',
  },
  {
    image: '/images/page/about/edward.png',
    name: 'Edward',
    position: 'Engineering',
  },
  {
    image: '/images/page/about/007.png',
    name: '007',
    position: 'Special Agent',
  },
];

const Staff = () => (
  <section className="container mt-20 grid grid-cols-4 gap-x-10 gap-y-20 border-t border-gray-90 pt-[52px]">
    {staffList.map((member) => (
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
      <p className="mt-[18px] border-b-[3px] border-secondary-2 pb-[5px] text-16 font-bold uppercase leading-none tracking-wide text-black">
        Join us
      </p>
    </div>
  </section>
);

export default Staff;
