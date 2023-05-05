'use client';

import { DocSearch } from '@docsearch/react';

const AlgoliaSearch = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <DocSearch
        appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        apiKey={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!}
        placeholder="What you need?"
      />
    </div>
  );
};

export default AlgoliaSearch;
