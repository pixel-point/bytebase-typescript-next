import { Card } from './card';

const Features = () => {
  type TCard = {
    icon: string;
    href: string;
    title: string;
    description: string;
  };

  const cards: TCard[] = [
    {
      href: '#',
      icon: '/images/attention.svg',
      title: 'Anomaly center',
      description:
        'Simplify database changes with standardization, lint rules, and GitOps integration. It automatically starts deployment processes for new database change scripts.',
    },
    {
      href: '#',
      icon: '/images/database.svg',
      title: 'Drift detection',
      description:
        "Perform complex SQL tasks and protect data privacy with ByteBase's web-based IDE, anonymization engine, and access controls.",
    },
    {
      href: '#',
      icon: '/images/disk.svg',
      title: 'Disaster recovery',
      description:
        'Eliminate administrative complexity and ensure compliance with one-stop resource management, policy enforcement and CLI-like SQL editor experience.',
    },
  ];

  return (
    <section className="features mt-[238px] 2xl:mt-36 xl:mt-32 lg:mt-24 container md:mt-20">
      <header className="text-center flex flex-col items-center md:items-start md:text-start">
        <h2 className="font-title font-semibold leading-none text-88 xl:text-68 lg:text-54 md:text-48">
          Stay confident
        </h2>
        <p className="mt-4 xl:mt-5 lg:mt-2 text-20 xl:text-18 lg:text-14 leading-[150%] max-w-[716px] lg:max-w-[468px]">
          Bytebase streamlines database deployment from non-prod to prod by integrating with version
          control systems for a GitOps workflow.
        </p>
      </header>
      <ul className="mt-14 2xl:mt-12 xl:mt-[46px] lg:mt-9 md:mt-5 grid grid-gap xl:gap-x-6 lg:gap-x-5 grid-cols-3 xl:grid-cols-12 md:flex md:flex-col md:[&>li:not(:first-child)]:mt-8">
        {cards.map((card, idx) => (
          <li key={idx} className="col-span-4 ">
            <Card {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Features };
