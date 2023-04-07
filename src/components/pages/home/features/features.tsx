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
    <section className="features mt-[238px] container">
      <header className="text-center grid grid-cols-12">
        <h2 className="font-title font-semibold leading-none text-88 col-span-12">
          Stay confident
        </h2>
        <p className="mt-4 text-20 leading-[150%] col-span-6 col-start-4">
          Bytebase streamlines database deployment from non-prod to prod by integrating with version
          control systems for a GitOps workflow.
        </p>
      </header>
      <ul className="mt-14 grid grid-gap grid-cols-3">
        {cards.map((card, idx) => (
          <li key={idx}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Features };
