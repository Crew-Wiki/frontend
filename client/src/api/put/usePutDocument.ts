import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import ENDPOINT from '@constants/endpoint';
import KEYS from '@constants/keys';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { AxiosResponse } from 'axios';
import { WikiDocument, WriteDocumentContent } from 'types/DocumentType';

const { UPDATE_DOCUMENT, GET_DOCUMENT_BY_TITLE } = ENDPOINT;
const { QUERY } = KEYS;

const usePutDocument = () => {
  const writeDocument = async (content: WriteDocumentContent) => {
    const response = await axiosInstance.put<WriteDocumentContent, AxiosResponse<WikiDocument>>(
      `${UPDATE_DOCUMENT}/${content.title}`,
      { writer: content.writer, contents: content.contents },
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
        queryKey: [GET_DOCUMENT_BY_TITLE, response.data.title],
      });
      navigate(`${URLS.WIKI}/${response.data.title}`);
    },
  });

  return {
    writeDocument: mutate,
    isPending,
  };
};

export default usePutDocument;
