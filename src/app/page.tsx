import DBScheme from '@/components/pages/home/db-scheme';
import Features from '@/components/pages/home/features/features';
import Hero from '@/components/pages/home/hero';
import Logos from '@/components/pages/home/logos';
import PromoAutomationChanges from '@/components/pages/home/promo-automation-changes';
import PromoOptions from '@/components/pages/home/promo-options';
import PromoSecurity from '@/components/pages/home/promo-security';
import PromoSQLEditor from '@/components/pages/home/promo-sql-editor';
import Testimonials from '@/components/pages/home/testimonials';
import Community from '@/components/shared/community';
import SubscriptionForm from '@/components/shared/subscription-form';

export default function Page() {
  return (
    <>
      <Hero />
      <DBScheme />
      <PromoAutomationChanges />
      {/* TODO: rename PromoOptions */}
      <PromoOptions />
      <PromoSQLEditor />
      <PromoSecurity />
      <Features />
      <Logos />
      <Testimonials />
      <Community />
      <SubscriptionForm />
    </>
  );
}
