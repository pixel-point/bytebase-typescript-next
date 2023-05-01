import { notFound } from 'next/navigation';

import Posts from '@/components/pages/changelog/posts';

import { getChangelogPostsPerPage } from '@/lib/api-changelog';

export default function ChangelogPage() {
  const data = getChangelogPostsPerPage(1);

  if (!data) return notFound();

  return <Posts page={1} {...data} />;
}
