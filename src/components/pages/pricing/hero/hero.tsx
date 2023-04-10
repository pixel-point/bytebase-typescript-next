import Card from './card';

const Hero = () => {
  type TCard = {
    image:
      | '/images/pricing/free.jpg'
      | '/images/pricing/team.jpg'
      | '/images/pricing/enterprise.jpg';
    planTitle: string;
    price: string;
    description: string;
    buttonText: string;
    buttonTheme: 'primary-filled' | 'primary-outline';
    buttonLink: string;
    planConditions: string;
  };

  const cards: TCard[] = [
    {
      image: '/images/pricing/free.jpg',
      planTitle: 'Free',
      price: '0',
      description: 'Up to 10 seats and 10 instances',
      buttonText: 'Free Deploy',
      buttonTheme: 'primary-outline',
      buttonLink: '/docs/get-started/install/deploy-with-docker',
      planConditions: 'Up to 3 users',
    },
    {
      image: '/images/pricing/team.jpg',
      planTitle: 'Team',
      price: '19',
      description: 'Up to 10 seats and 10 instances (first 3 FREE)',
      buttonText: 'Try Free now',
      buttonTheme: 'primary-filled',
      buttonLink:
        'https://bytebase-hub-prod.us.auth0.com/u/login?state=hKFo2SByU1VxQzVzb0JpSm01TjF5TjZmU1JoTTVndXNpU3FuY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIF9JakVqd1RRaVBjczh0NTVEQmxqSHo3ZGxzWV9zelBUo2NpZNkgN0IySDFrb05Sa3hQY0pENzBHeVJEbzVIbVNNMGI5V1E',
      planConditions: 'Up to 3 users',
    },
    {
      image: '/images/pricing/enterprise.jpg',
      planTitle: 'Enterprise',
      price: 'Custom',
      description: 'Customized, billed annually',
      buttonText: 'Contact us',
      buttonTheme: 'primary-outline',
      buttonLink: 'mailto:support@bytebase.com',
      planConditions: 'Up to 3 users',
    },
  ];

  return (
    <section className="hero mt-[120px] container">
      <header className="text-center">
        <p className="font-semibold leading-tight text-40 tracking-tighter">
          Bytebase is not a better tool to manage database changes. It&apos;s a better way to manage
          database changes.
        </p>
      </header>
      <ul className="mt-14 flex gap-x-6">
        {cards.map((card, idx) => (
          <li className="grow basis-1/3" key={idx}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
