import { useMemo, useRef, useState } from 'react';

import algoliasearch, { SearchClient } from 'algoliasearch/lite';

type UseAlgoliaSearch = {
  searchClient: SearchClient;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setFocus: (focus: boolean) => void;
  hasFocus: boolean;
  formRef: React.RefObject<HTMLFormElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  onSearchStateChange: (nextSearchState: { query: string }) => void;
};

const useAlgoliaSearch = (): UseAlgoliaSearch => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasFocus, setFocus] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchClient = useMemo<SearchClient>(
    () =>
      algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!,
      ),
    [],
  );

  const onSearchStateChange = (nextSearchState: { query: string }): void => {
    setSearchQuery(nextSearchState.query);
  };

  return {
    searchClient,
    searchQuery,
    setSearchQuery,
    setFocus,
    hasFocus,
    formRef,
    inputRef,
    onSearchStateChange,
  };
};

export default useAlgoliaSearch;
