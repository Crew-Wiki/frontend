import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import { WikiDocumentLog } from '@type/DocumentType';
import { useSuspenseQuery } from '@tanstack/react-query';
import KEYS from '@constants/keys';

const { GET_SPECIFIC_DOCUMENT_LOG } = ENDPOINT;
const { QUERY } = KEYS;

const useGetSpecificDocumentLog = (logId: number) => {
  const getSpecificDocumentLog = async () => {
    const response = await axiosInstance.get<WikiDocumentLog>(GET_SPECIFIC_DOCUMENT_LOG(logId));
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY.GET_SPECIFIC_DOCUMENT_LOG, logId],
    queryFn: getSpecificDocumentLog,
  });

  return {
    document: data,
  };
};

export default useGetSpecificDocumentLog;
