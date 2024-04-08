import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import KEYS from '@constants/keys';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { AxiosResponse } from 'axios';

const { POST_DOCUMENT } = ENDPOINT;
const { QUERY } = KEYS;

// 요청할 때 필요한 데이터
export interface PostDocumentContent {
  title: string;
  contents: string;
  writer: string;
  documentBytes: number;
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
    const response = await axiosInstance.post<PostDocumentContent, AxiosResponse<PostDocumentResponse>>(
      `${POST_DOCUMENT}`,
      body,
    );
    return response;
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY.POST_DOCUMENT],
    mutationFn: writeDocument,
    onSuccess: (response) => {
      queryClient.removeQueries({
        queryKey: [QUERY.GET_RECENTLY_DOCUMENTS],
      });
      queryClient.removeQueries({
        queryKey: [QUERY.GET_DOCUMENT_BY_TITLE, response.data.title],
      });

      navigate(`${URLS.WIKI}/${response.data.title}`);
    },
  });

  return {
    writeDocument: mutate,
    isPending,
  };
};

export default usePostDocument;
