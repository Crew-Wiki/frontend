import { useSuspenseQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';

const { GET_DOCUMENT_BY_TITLE } = ENDPOINT;

interface Document {
  documentId: number;
  title: string;
  contents: string;
  writer: string;
  generateTime: string;
}

const useGetDocumentByTitle = (title: string) => {
  const getDocumentByTitle = async () => {
    const url = `${GET_DOCUMENT_BY_TITLE}/${title}`;
    const response = await axiosInstance.get<Document>(url);
    return response.data;
  };

  const { data } = useSuspenseQuery({
    queryKey: [GET_DOCUMENT_BY_TITLE, title],
    queryFn: getDocumentByTitle,
  });

  return { docs: data };
};

export default useGetDocumentByTitle;
