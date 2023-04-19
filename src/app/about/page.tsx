import Backed from '@/components/pages/about/backed';
import Crew from '@/components/pages/about/crew';
import Hero from '@/components/pages/about/hero';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <Crew />
      <Backed />
      <Community />
      <SubscriptionForm />
    </>
  );
};

export default AboutUsPage;
