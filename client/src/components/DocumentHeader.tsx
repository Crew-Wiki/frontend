import React from 'react';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface DocumentHeaderProps {
  title: string;
}

const DocumentHeader = ({ title }: DocumentHeaderProps) => {
  const navigate = useNavigate();

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title={title} />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="새로고침" />
        <Button style="tertiary" size="xs" text="편집하기" />
        <Button style="tertiary" size="xs" text="편집로그" />
        <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
      </fieldset>
    </header>
  );
};

export default DocumentHeader;
