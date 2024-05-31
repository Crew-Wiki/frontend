import { useEffect } from 'react';
import useGetDocumentSearch from '@api/get/useGetDocumentSearch';
import useDebounce from './useDebounce';

const useSearchDocumentByQuery = (query: string) => {
  const { titles, searchDocuments } = useGetDocumentSearch(query);

  const searchDocumentsIfValid = () => {
    if (query.trim() !== '' && /^[가-힣()0-9]*$/.test(query)) searchDocuments();
  };

  const debouncedSearchDocuments = useDebounce(searchDocumentsIfValid, 200);

  useEffect(() => {
    debouncedSearchDocuments();
  }, [query]);

  return {
    titles,
  };
};

export default useSearchDocumentByQuery;
