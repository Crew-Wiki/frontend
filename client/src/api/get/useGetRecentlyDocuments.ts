import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import { useSuspenseQuery } from '@tanstack/react-query';
import KEYS from '@constants/keys';

const { GET_RECENTLY_DOCUMENTS } = ENDPOINT;
const { QUERY } = KEYS;

interface RecentlyDocument {
  documentId: number;
  title: string;
  generateTime: string;
}

interface RecentlyDocumentsResponse {
  documents: RecentlyDocument[];
}

const useGetRecentlyDocuments = () => {
  const getRecentlyDocuments = async () => {
    const response = await axiosInstance.get<RecentlyDocumentsResponse>(GET_RECENTLY_DOCUMENTS);
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY.GET_RECENTLY_DOCUMENTS],
    queryFn: getRecentlyDocuments,
    select: (recently) => recently.documents.slice(0, 20),
  });

  return {
    recentlyDocuments: data,
  };
};

export default useGetRecentlyDocuments;
