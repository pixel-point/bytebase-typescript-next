import DBScheme from '@/components/pages/home/db-scheme';
import Features from '@/components/pages/home/features/features';
import Hero from '@/components/pages/home/hero';
import Logos from '@/components/pages/home/logos';
import PromoAutomationChanges from '@/components/pages/home/promo-automation-changes';
import PromoOptions from '@/components/pages/home/promo-options';
import PromoQuery from '@/components/pages/home/promo-query';
import PromoSecurity from '@/components/pages/home/promo-security';
import Testimonials from '@/components/pages/home/testimonials';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

export default function Page() {
  return (
    <>
      <Hero />
      <DBScheme />
      <PromoAutomationChanges />
      <PromoOptions />
      {/* TODO: rename */}
      <PromoQuery />
      {/* TODO: rename */}
      <PromoSecurity />
      <Features />
      <Logos />
      <Testimonials />
      <Community />
      <SubscriptionForm />
    </>
  );
}
