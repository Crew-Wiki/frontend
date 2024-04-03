import React from 'react';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { WikiDocument } from '@type/DocumentType';
import { useQueryClient } from '@tanstack/react-query';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface DocumentHeaderProps {
  wiki: WikiDocument;
}

const DocumentHeader = ({ wiki }: DocumentHeaderProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const refreshData = () => {
    queryClient.removeQueries();
    navigate('');
  };

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  const goEditPage = () => {
    navigate(URLS.EDIT, { state: wiki });
  };

  const goLogsPage = () => {
    navigate(URLS.LOGS, { state: wiki });
  };

  return (
    <header className="max-[768px]:flex-col-reverse max-[768px]:gap-4 flex justify-between w-full">
      <DocumentTitle title={wiki.title} />
      <fieldset className="flex gap-2 max-[768px]:w-full max-[768px]:justify-center">
        <Button style="tertiary" size="xs" text="새로고침" onClick={refreshData} />
        <Button style="tertiary" size="xs" text="편집하기" onClick={goEditPage} />
        <Button style="tertiary" size="xs" text="편집로그" onClick={goLogsPage} />
        <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
      </fieldset>
    </header>
  );
};

export default DocumentHeader;
