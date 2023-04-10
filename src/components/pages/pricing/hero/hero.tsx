import Link from '@/components/shared/link';

import Card from './card';

const Hero = () => {
  type TCard = {
    image:
      | '/images/pricing/free.jpg'
      | '/images/pricing/team.jpg'
      | '/images/pricing/enterprise.jpg';
    planTitle: string;
    price: string | number;
    description: string;
    buttonText: string;
    buttonTheme: 'primary-filled' | 'primary-outline';
    buttonLink: string;
    planConditions: Array<string>;
    priceDescription?: string;
    additionalDescription?: string;
  };

  const cards: TCard[] = [
    {
      image: '/images/pricing/free.jpg',
      planTitle: 'Free',
      price: 0,
      description: 'Up to 10 seats and 10 instances',
      buttonText: 'Free Deploy',
      buttonTheme: 'primary-outline',
      buttonLink: '/docs/get-started/install/deploy-with-docker',
      planConditions: [
        'Schema and data change review workflow',
        'Multi-environment batch change',
        'VCS integration #GitOps',
        'SQL Editor',
        'Database backup / restore',
        'Terraform integration',
      ],
    },
    {
      image: '/images/pricing/team.jpg',
      planTitle: 'Team',
      price: 19,
      priceDescription: '/ starts at month',
      description: 'Up to 10 seats and 10 instances (first 3 FREE)',
      additionalDescription: 'You can start <b>a free trial for 14 days.</b>',
      buttonText: 'Try Free now',
      buttonTheme: 'primary-filled',
      buttonLink:
        'https://bytebase-hub-prod.us.auth0.com/u/login?state=hKFo2SByU1VxQzVzb0JpSm01TjF5TjZmU1JoTTVndXNpU3FuY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIF9JakVqd1RRaVBjczh0NTVEQmxqSHo3ZGxzWV9zelBUo2NpZNkgN0IySDFrb05Sa3hQY0pENzBHeVJEbzVIbVNNMGI5V1E',
      planConditions: [
        'Everything in free plan',
        'Owner, DBA and Developer roles',
        'Advanced SQL check',
        'Review and backup policy',
        'Large table online schema migration',
        'Point-in-Time-Recovery',
      ],
    },
    {
      image: '/images/pricing/enterprise.jpg',
      planTitle: 'Enterprise',
      price: 'Custom',
      description: 'Customized, billed annually',
      buttonText: 'Contact us',
      buttonTheme: 'primary-outline',
      buttonLink: 'mailto:support@bytebase.com',
      planConditions: [
        'Dedicated CSM and SLA support',
        'Everything in team plan',
        'Single Sign-On (SSO)',
        'Multi-region / Multi-tenancy batch change',
        'Sensitive data masking',
        'Database access control',
        'Roadmap prioritization',
      ],
    },
  ];

  return (
    <section className="hero pt-[120px] bg-pricing-hero pb-20">
      <div className="container max-w-[1396px]">
        <header className="text-center">
          <h1 className="sr-only">Bytebase pricing page</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pricing/quote.svg" alt="" className="mx-auto" />
          <p className="mt-4 font-semibold leading-tight text-40 tracking-tighter max-w-[1048px] mx-auto">
            Bytebase is not a better tool to manage database changes. It&apos;s a better way to
            manage database changes.
          </p>
          <p className="text-gray-40 mt-3.5 text-18 leading-extra-tight">
            Built by engineers knowing database development flow
          </p>
          <ul className="flex items-center gap-x-16 mt-11 justify-center">
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pricing/microsoft.svg" alt="Microsoft logo" />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pricing/google.svg" alt="Google logo" />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pricing/ant-group.svg" alt="Ant Group logo" />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pricing/pingcap.svg" alt="Pingcap logo" />
            </li>
          </ul>
        </header>
        <ul className="mt-14 flex gap-x-8">
          {cards.map((card, idx) => (
            <li className="grow basis-1/3" key={idx}>
              <Card {...card} />
            </li>
          ))}
        </ul>
        <p className="mt-9 text-15 leading-snug text-center text-gray-40">
          You can upgrade, downgrade, or{' '}
          <Link size="sm" to="/refund" theme="primary-1">
            cancel your subscription
          </Link>{' '}
          anytime. No hidden charges.
        </p>
      </div>
    </section>
  );
};

export default Hero;
