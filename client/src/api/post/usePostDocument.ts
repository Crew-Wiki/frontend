import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/utils/axios';
import ENDPOINT from '@/constants/endpoint';
import KEYS from '@/constants/keys';

const { POST_DOCUMENT } = ENDPOINT;
const { QUERY } = KEYS;

// 요청할 때 필요한 데이터
interface PostDocumentContent {
  title: string;
  contents: string;
  writer: string;
}

// Request body 타입
interface PostDocumentRequest {
  contents: string;
  writer: string;
}

// Response body 타입
interface PostDocumentResponse {
  documentId: number;
  title: string;
  contents: string;
  writer: string;
  generateTime: string;
}

const usePostDocument = () => {
  const writeDocument = async (body: PostDocumentContent) => {
    const response = await axiosInstance.post<PostDocumentContent, PostDocumentResponse>(`${POST_DOCUMENT}`, body);
    return response;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY.POST_DOCUMENT],
    mutationFn: writeDocument,
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return {
    writeDocument: mutate,
    isPending,
  };
};

export default usePostDocument;
