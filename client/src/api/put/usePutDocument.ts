import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import KEYS from '@constants/keys';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { AxiosResponse } from 'axios';
import { WikiDocument, WriteDocumentContent } from '@type/DocumentType';

const { UPDATE_DOCUMENT } = ENDPOINT;
const { QUERY } = KEYS;

const usePutDocument = () => {
  const writeDocument = async ({ title, writer, contents, documentBytes }: WriteDocumentContent) => {
    const response = await axiosInstance.put<WriteDocumentContent, AxiosResponse<WikiDocument>>(
      `${UPDATE_DOCUMENT}/${title}`,
      { writer, contents, documentBytes },
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
        queryKey: [QUERY.GET_DOCUMENT_BY_TITLE, response.data.title],
      });
      queryClient.removeQueries({
        queryKey: [QUERY.GET_RECENTLY_DOCUMENTS],
      });
      queryClient.invalidateQueries({ queryKey: [QUERY.GET_DOCUMENT_LOGS] });
      navigate(`${URLS.WIKI}/${response.data.title}`);
    },
  });

  return {
    writeDocument: mutate,
    isPending,
  };
};

export default usePutDocument;
