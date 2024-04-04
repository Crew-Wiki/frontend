import React from 'react';

import { Editor } from '@toast-ui/react-editor';
import { UploadImageMeta } from '@type/DocumentType';
import KEYS from '@constants/keys';
import mySessionStorage from '@utils/sessionStorage';
import TuiEditor from './markdownEditor/TuiEditor';

type HookCallback = (url: string, text?: string) => void;

interface PostContentProps {
  editorRef: React.MutableRefObject<Editor | null>;
  initialValue?: string;
  setImages: React.Dispatch<React.SetStateAction<UploadImageMeta[]>>;
}

const PostContents = ({ editorRef, initialValue, setImages }: PostContentProps) => {
  const setImageMeta = (file: File, callback: HookCallback) => {
    const objectURL = URL.createObjectURL(file);
    callback(objectURL, '미리보기');
    const imageMeta: UploadImageMeta = {
      file,
      objectURL,
      s3URL: '',
    };
    setImages((prev) => [...prev, imageMeta]);
  };

  const imageHandler = async (blob: File | Blob, callback: HookCallback) => {
    if (!(blob instanceof File)) {
      const fileFromBlob = new File([blob], 'blob');
      setImageMeta(fileFromBlob, callback);
    } else {
      setImageMeta(blob, callback);
    }
  };

  // 등록하기 누를 때
  // s3에다 이미지 올리고
  // 여기에 이미지를 찾아서 대체 -> createObjectURL
  return (
    // 기본 content 어떻게 주어줄 지
    <TuiEditor content={initialValue} editorRef={editorRef} imageHandler={imageHandler} />
  );
};

export default PostContents;
