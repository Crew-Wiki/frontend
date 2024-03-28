import React from 'react';

import { Editor } from '@toast-ui/react-editor';
import TuiEditor from './markdownEditor/TuiEditor';

type HookCallback = (url: string, text?: string) => void;

interface PostContentProps {
  editorRef: React.MutableRefObject<Editor | null>;
  initialValue?: string;
}

const PostContents = ({ editorRef, initialValue }: PostContentProps) => {
  const imageHandler = async (blob: File | Blob, callback: HookCallback) => {
    console.log(blob);
    callback(
      'https://www.seouldanurim.net/comm/getImage?srvcId=MEDIA&parentSn=54786&fileTy=MEDIA&fileNo=1&thumbTy=L',
      '공원',
    );
  };

  return (
    // 기본 content 어떻게 주어줄 지
    <TuiEditor content={initialValue} editorRef={editorRef} imageHandler={imageHandler} />
  );
};

export default PostContents;
