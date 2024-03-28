import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import { useSuspenseQuery } from '@tanstack/react-query';

const { GET_RECENTLY_DOCUMENTS } = ENDPOINT;

interface RecentlyDocument {
  logId: number;
  title: string;
  contents: string;
  writer: string;
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
    queryKey: [GET_RECENTLY_DOCUMENTS],
    queryFn: getRecentlyDocuments,
  });

  return {
    recentlyDocuments: data,
  };
};

export default useGetRecentlyDocuments;
