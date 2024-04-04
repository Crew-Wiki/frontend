import { WikiDocument } from '@type/DocumentType';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';

const { GET_RANDOM_DOCUMENT } = ENDPOINT;

const useGetRandomDocument = () => {
  const getRandomDocument = async () => {
    const response = await axiosInstance.get<WikiDocument>(GET_RANDOM_DOCUMENT);
    return response.data.title;
  };

  return {
    getRandomDocument,
  };
};

export default useGetRandomDocument;
