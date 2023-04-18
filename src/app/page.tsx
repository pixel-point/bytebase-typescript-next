import DBScheme from '@/components/pages/home/db-scheme';
import Features from '@/components/pages/home/features/features';
import Hero from '@/components/pages/home/hero';
import Logos from '@/components/pages/home/logos';
import PromoChangeDatabase from '@/components/pages/home/promo-change-database';
import PromoOptions from '@/components/pages/home/promo-options';
import PromoQuery from '@/components/pages/home/promo-query';
import PromoSecureAccess from '@/components/pages/home/promo-secure-access';
import Testimonials from '@/components/pages/home/testimonials';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

export default function Page() {
  return (
    <>
      <Hero />
      <DBScheme />
      <PromoChangeDatabase />
      <PromoOptions />
      <PromoQuery />
      <PromoSecureAccess />
      <Features />
      <Logos />
      <Testimonials />
      <Community />
      <SubscriptionForm />
    </>
  );
}
