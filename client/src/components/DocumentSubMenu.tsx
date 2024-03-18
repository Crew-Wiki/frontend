import React from 'react';
import Button from './Button';

const DocumentSubMenu = () => {
  return (
    <fieldset className="flex gap-2">
      <Button style="tertiary" size="xs" text="새로고침" />
      <Button style="tertiary" size="xs" text="편집하기" />
      <Button style="tertiary" size="xs" text="편집로그" />
      <Button style="primary" size="xs" text="작성하기" />
    </fieldset>
  );
};

export default DocumentSubMenu;
