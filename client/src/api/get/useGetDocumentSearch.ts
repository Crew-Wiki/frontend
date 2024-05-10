import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import KEYS from '@constants/keys';
import { useQuery } from '@tanstack/react-query';

const { QUERY } = KEYS;

const useGetDocumentSearch = (keyWord: string) => {
  const searchDocuments = async () => {
    const response = await axiosInstance.get<string[]>(ENDPOINT.GET_DOCUMENT_SEARCH, {
      params: {
        keyWord,
      },
    });
    return response.data;
  };

  const { data, refetch } = useQuery({
    queryKey: [QUERY.GET_DOCUMENT_SEARCH, keyWord],
    queryFn: searchDocuments,
    select: (result: string[]) => result.slice(0, 5),
    enabled: false,
  });

  return {
    titles: data,
    searchDocuments: refetch,
  };
};

export default useGetDocumentSearch;
