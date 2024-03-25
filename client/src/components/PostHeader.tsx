import React from 'react';
import DocumentTitle from './DocumentTitle';
import Button from './Button';

const PostHeader = () => {
  return (
    <header className="flex justify-between w-full">
      <DocumentTitle title="작성하기" />
      <fieldset className="flex gap-2">
        <Button style="tertiary" size="xs" text="취소하기" />
        <Button style="primary" size="xs" text="작성완료" />
      </fieldset>
    </header>
  );
};

export default PostHeader;
