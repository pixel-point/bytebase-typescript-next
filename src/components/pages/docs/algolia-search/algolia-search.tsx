'use client';

import { ReactNode } from 'react';

import { DocSearch } from '@docsearch/react';

import Link from '@/components/shared/link';

const AlgoliaSearch = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <DocSearch
        appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        apiKey={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!}
        placeholder="What you need?"
        hitComponent={Hit}
      />
    </div>
  );
};

const Hit = ({ hit, children }: { hit: any; children: ReactNode }) => {
  return (
    <Link href={hit.url} className="DocSearch-Hit--Child">
      {children}
    </Link>
  );
};

export default AlgoliaSearch;
