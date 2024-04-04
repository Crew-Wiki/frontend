import React from 'react';
import { AxiosError } from 'axios';

import { FallbackProps } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';
import URLS from '@constants/urls';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface Error {
  errorMessage: string;
}

const DocumentFallback = ({ error }: FallbackProps) => {
  const axiosError = error as AxiosError;
  const errorDetail = axiosError.response?.data as Error;

  const navigate = useNavigate();
  const { title } = useParams();

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-fit min-h-[864px] bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-2">
      <header className="max-[768px]:flex-col-reverse max-[768px]:gap-4 flex justify-between w-full">
        <DocumentTitle title={title ?? ''} />
        <fieldset className="flex gap-2 max-[768px]:w-full max-[768px]:justify-center">
          <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
        </fieldset>
      </header>
      {'존재하지 않는 문서입니다.'}
    </div>
  );
};

export default DocumentFallback;
