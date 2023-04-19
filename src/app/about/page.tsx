import Hero from '@/components/pages/about/hero';
import Staff from '@/components/pages/about/staff';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <Staff />
      <Community />
      <SubscriptionForm />
    </>
  );
};

export default AboutUsPage;
