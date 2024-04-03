import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetDocumentByTitle from '@api/get/useGetDocumentByTitle';
import DocumentHeader from './DocumentHeader';
import DocumentContents from './DocumentContents';
import DocumentFooter from './DocumentFooter';
import { useQueryClient } from '@tanstack/react-query';
import URLS from '@constants/urls';
import Button from './Button';

interface DocumentPageProps {
  daemoon?: string;
}

const DocumentPage = ({ daemoon }: DocumentPageProps) => {
  const { title } = useParams();
  const { docs } = useGetDocumentByTitle(title ?? daemoon ?? '');

  const navigate = useNavigate();

  useEffect(() => {
    if (daemoon !== undefined && title === undefined) {
      navigate(daemoon);
    }
  }, [daemoon]);


  const queryClient = useQueryClient();

  const refreshData = () => {
    queryClient.removeQueries();
    navigate('');
  };

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  const goEditPage = () => {
    navigate(URLS.EDIT, { state: docs });
  };

  const goLogsPage = () => {
    navigate(URLS.LOGS, { state: docs });
  };

  return (
    <>
      <div className="md:hidden">
        <fieldset className="flex gap-2 max-[768px]:w-full max-[768px]:justify-center">
          <Button style="tertiary" size="xs" text="새로고침" onClick={refreshData} />
          <Button style="tertiary" size="xs" text="편집하기" onClick={goEditPage} />
          <Button style="tertiary" size="xs" text="편집로그" onClick={goLogsPage} />
          <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
        </fieldset>
      </div>
      <div className="flex flex-col gap-6 w-full h-fit min-h-[864px] bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-2">
        <DocumentHeader wiki={docs} />
        <DocumentContents contents={docs.contents} />
      </div>
      <DocumentFooter generateTime={docs.generateTime} />
    </>
  );
};

export default DocumentPage;
