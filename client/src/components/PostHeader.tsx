import React from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface PostHeaderProps {
  mode: 'add' | 'edit';
  onClick: () => void;
  isPending: boolean;
  disabledSubmit: boolean;
}

const MODE_TITLE: Record<string, string> = {
  add: '작성하기',
  edit: '편집하기',
};

const PostHeader = ({ mode, onClick, isPending, disabledSubmit }: PostHeaderProps) => {
  // isPending과 validation 연산해서 버튼의 disabled 넘겨주기
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title={MODE_TITLE[mode]} />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="취소하기" onClick={goBack} />
        <Button style="primary" size="xs" text="작성완료" onClick={onClick} disabled={isPending || disabledSubmit} />
      </fieldset>
    </header>
  );
};

export default PostHeader;
