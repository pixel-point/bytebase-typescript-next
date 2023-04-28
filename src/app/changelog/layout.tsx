import Hero from '@/components/pages/changelog/hero';
import SubscriptionForm from '@/components/shared/subscription';

export default function ChangelogLayout({
  children,
  params: { page },
}: {
  children: React.ReactNode;
  params: { page: string };
}) {
  return (
    <>
      <Hero />
      {children}
      <SubscriptionForm className="md:!mt-[117px]" />
    </>
  );
}
