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
      planTitle: 'free',
      price: 0,
      description: 'Up to 10 seats and&nbsp;10&nbsp;instances',
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
      planTitle: 'team',
      price: 19,
      priceDescription: '/ starts at month',
      description: 'Up to 10 seats and 10 instances (first 3 FREE)',
      additionalDescription: 'You can start <b>a&nbsp;free&nbsp;trial for 14 days.</b>',
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
      planTitle: 'enterprise',
      price: 'Custom',
      description: 'Customized, billed&nbsp;annually',
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
    <section className="hero pt-[120px] 2xl:pt-[108px] bg-pricing-hero pb-20 lg:pb-16 md:pt-24 md:pb-[54px] sm:pb-11">
      <div className="container max-w-[1396px] 2xl:max-w-full">
        <header className="text-center">
          <h1 className="sr-only">Bytebase pricing page</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pricing/quote.svg" alt="" className="mx-auto md:w-10 md:h-auto" />
          <p className="mt-5 font-semibold leading-tight text-40 tracking-tighter max-w-[1048px] mx-auto lg:max-w-[800px] lg:text-30 lg:leading-extra-tight md:mt-6 md:text-24 md:tracking-tight md:max-w-[670px] xs:text-20 xs:tracking-normal xs:leading-tight sm:mt-4">
            Bytebase is not a better tool to manage database changes. It&apos;s a better way to
            manage database changes.
          </p>
          <p className="text-gray-40 mt-2.5 text-18 leading-extra-tight lg:text-16 lg:leading-snug md:mt-4.5 md:text-14 xs:mt-3.5">
            Built by engineers knowing database development flow
          </p>
          <ul className="flex items-center gap-x-16 mt-11 lg:gap-x-[52px] justify-center md:mt-10 md:gap-x-10 sm:flex-wrap sm:gap-y-4 sm:gap-x-14 sm:mt-6">
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pricing/microsoft.svg"
                alt="Microsoft logo"
                className="h-10 w-auto lg:h-9 md:h-[30px]"
              />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pricing/google.svg"
                alt="Google logo"
                className="h-10 w-auto lg:h-9 md:h-[30px]"
              />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pricing/ant-group.svg"
                alt="Ant Group logo"
                className="h-10 w-auto lg:h-9 md:h-[30px]"
              />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pricing/pingcap.svg"
                alt="Pingcap logo"
                className="h-10 w-auto lg:h-9 md:h-[30px]"
              />
            </li>
          </ul>
        </header>
        <ul className="mt-14 lg:mt-12 flex gap-x-8 lg:gap-x-6 md:gap-x-5 sm:gap-x-0 sm:gap-y-5 sm:flex-wrap">
          {cards.map((card, idx) => (
            <li className="grow basis-1/3 sm:basis-full" key={idx}>
              <Card {...card} />
            </li>
          ))}
        </ul>
        <p className="mt-9 text-15 leading-snug text-center text-gray-40 lg:mt-8 lg:text-14 lg:leading-tight md:mt-7 sm:mt-6">
          You can upgrade, downgrade, or{' '}
          <Link size="sm" to="/refund" theme="primary-1" additionalClassName="lg:text-14 sm:inline">
            cancel your subscription
          </Link>{' '}
          anytime. No hidden charges.
        </p>
      </div>
    </section>
  );
};

export default Hero;
