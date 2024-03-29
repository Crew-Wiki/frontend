import React from 'react';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { WikiDocument } from '@type/DocumentType';
import Button from './Button';

interface EditLogsHeaderProps {
  wiki: WikiDocument;
}

const EditLogsHeader = ({ wiki }: EditLogsHeaderProps) => {
  const navigate = useNavigate();

  const goPostPage = () => {
    navigate(URLS.POST);
  };

  const goEditPage = () => {
    navigate(URLS.EDIT, { state: wiki });
  };

  return (
    <header className="flex justify-between w-full">
      <h1 className="font-bm text-3xl text-greyscale-800">{`"${wiki.title}"의 편집로그`}</h1>
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="편집하기" onClick={goEditPage} />
        <Button style="primary" size="xs" text="작성하기" onClick={goPostPage} />
      </fieldset>
    </header>
  );
};

export default EditLogsHeader;
