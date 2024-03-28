import React from 'react';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { WikiDocument } from 'types/DocumentType';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface DocumentHeaderProps {
  wiki: WikiDocument;
}

const DocumentHeader = ({ wiki }: DocumentHeaderProps) => {
  const navigate = useNavigate();

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  const goEditPage = () => {
    navigate(URLS.EDIT, { state: wiki });
  };

  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title={wiki.title} />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="새로고침" />
        <Button style="tertiary" size="xs" text="편집하기" onClick={goEditPage} />
        <Button style="tertiary" size="xs" text="편집로그" />
        <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
      </fieldset>
    </header>
  );
};

export default DocumentHeader;
