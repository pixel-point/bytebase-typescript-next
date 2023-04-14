import Hero from '@/components/pages/blog/hero/index';
import Posts from '@/components/pages/blog/posts';
import SubscriptionForm from '@/components/pages/blog/subscription-form';

export default function Blog() {
  return (
    <>
      <Hero />
      <SubscriptionForm />
      <Posts />
    </>
  );
}
