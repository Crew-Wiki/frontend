import React from 'react';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface DocumentHeaderProps {
  title: string;
}

const DocumentHeader = ({ title }: DocumentHeaderProps) => {
  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title={title} />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="새로고침" />
        <Button style="tertiary" size="xs" text="편집하기" />
        <Button style="tertiary" size="xs" text="편집로그" />
        <Button style="primary" size="xs" text="작성하기" />
      </fieldset>
    </header>
  );
};

export default DocumentHeader;
