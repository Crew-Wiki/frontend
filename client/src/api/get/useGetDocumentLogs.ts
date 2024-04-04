import { useSuspenseQuery } from '@tanstack/react-query';
import KEYS from '@constants/keys';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import { WikiDocumentLogSummary } from '@type/DocumentType';

const { QUERY } = KEYS;

const useGetDocumentLogs = (title: string) => {
  const getDocumentLogs = async () => {
    const response = await axiosInstance.get<WikiDocumentLogSummary[]>(ENDPOINT.GET_DOCUMENT_LOGS(title));
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY.GET_DOCUMENT_LOGS, title],
    queryFn: getDocumentLogs,
    select: (logs) =>
      logs.sort((a: WikiDocumentLogSummary, b: WikiDocumentLogSummary) => (a.generateTime <= b.generateTime ? 1 : -1)),
  });

  return {
    documentLogs: data,
  };
};

export default useGetDocumentLogs;
