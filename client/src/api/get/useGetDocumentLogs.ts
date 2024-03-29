import { useSuspenseQuery } from '@tanstack/react-query';
import KEYS from '@constants/keys';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import { WikiDocumentLog } from '@type/DocumentType';

const { QUERY } = KEYS;

const useGetDocumentLogs = (title: string) => {
  const getDocumentLogs = async () => {
    const response = await axiosInstance.get<WikiDocumentLog>(ENDPOINT.GET_DOCUMENT_LOGS(title));
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY.GET_DOCUMENT_LOGS, title],
    queryFn: getDocumentLogs,
  });

  return {
    documentLogs: data,
  };
};

export default useGetDocumentLogs;
