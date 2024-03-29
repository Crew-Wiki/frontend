import React from 'react';
import { AxiosError } from 'axios';

import { FallbackProps } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';

interface Error {
  errorMessage: string;
}

const DocumentFallback = ({ error }: FallbackProps) => {
  const axiosError = error as AxiosError;
  const errorDetail = axiosError.response?.data as Error;

  const { title } = useParams();

  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
      <header className="flex justify-between w-full">
        <DocumentTitle title={title ?? ''} />
      </header>
      {errorDetail.errorMessage}
    </div>
  );
};

export default DocumentFallback;
