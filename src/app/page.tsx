import { Change } from '@/components/pages/home/change';
import { Databases } from '@/components/pages/home/databases';
import { Features } from '@/components/pages/home/features/features';
import { Hero } from '@/components/pages/home/hero';
import { Logos } from '@/components/pages/home/logos';
import { Options } from '@/components/pages/home/options';
import { Query } from '@/components/pages/home/query';
import { Secure } from '@/components/pages/home/secure';
import { Testimonials } from '@/components/pages/home/testimonials';
import { Community } from '@/components/shared/community';
import { SubscriptionForm } from '@/components/shared/subscription-form';

export default function Page() {
  return (
    <>
      <Hero />
      <Databases />
      <Change />
      <Options />
      <Query />
      <Secure />
      <Features />
      <Logos />
      <Testimonials />
      <Community />
      <SubscriptionForm />
    </>
  );
}
