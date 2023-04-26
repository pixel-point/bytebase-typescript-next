import getMetadata from '@/utils/get-metadata';

import Backed from '@/components/pages/about/backed';
import Crew from '@/components/pages/about/crew';
import Hero from '@/components/pages/about/hero';
import MeetCrew from '@/components/pages/about/meet-crew';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

import SEO_DATA from '@/lib/seo-data';

export const metadata = getMetadata(SEO_DATA.ABOUT);

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <MeetCrew />
      <Crew />
      <Backed />
      <Community />
      <SubscriptionForm />
    </>
  );
};

export default AboutUsPage;
