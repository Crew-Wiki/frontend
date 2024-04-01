import { useSuspenseQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import KEYS from '@constants/keys';
import { WikiDocument } from '@type/DocumentType';

const { QUERY } = KEYS;
const { GET_DOCUMENT_BY_TITLE } = ENDPOINT;

const useGetDocumentByTitle = (title: string) => {
  const getDocumentByTitle = async () => {
    const url = `${GET_DOCUMENT_BY_TITLE}/${title}`;
    const response = await axiosInstance.get<WikiDocument>(url);
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [QUERY.GET_DOCUMENT_BY_TITLE, title],
    queryFn: getDocumentByTitle,
  });

  return { docs: data };
};

export default useGetDocumentByTitle;
