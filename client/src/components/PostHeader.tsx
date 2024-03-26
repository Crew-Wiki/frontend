import React from 'react';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

interface PostHeaderProps {
  onClick: () => void;
  isPending: boolean;
}

const PostHeader = ({ onClick, isPending }: PostHeaderProps) => {
  // isPending과 validation 연산해서 버튼의 disabled 넘겨주기
  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title="작성하기" />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="취소하기" />
        <Button style="primary" size="xs" text="작성완료" onClick={onClick} disabled={isPending} />
      </fieldset>
    </header>
  );
};

export default PostHeader;
