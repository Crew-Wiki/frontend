import React, { useRef, useState } from 'react';
import usePostPage from '@hooks/usePostPage';
import { Editor } from '@toast-ui/react-editor';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { UploadImageMeta, WikiDocument, WriteDocumentContent } from '@type/DocumentType';
import uploadImages from '@api/awsS3';
import getBytes from '@utils/getBytes';
import mySessionStorage from '@utils/sessionStorage';
import KEYS from '@constants/keys';
import PostHeader from './PostHeader';
import TitleInputField from './TitleInputField';
import PostContents from './PostContents';

interface WritePageProps {
  mode: 'add' | 'edit';
  writeDocument: UseMutateFunction<AxiosResponse<WikiDocument, any>, Error, WriteDocumentContent, unknown>;
  isPending: boolean;
  defaultDocumentData?: WikiDocument;
}

const backupContent = (editorRef: React.MutableRefObject<Editor | null>, title: string) => {
  const getMarkDown = () => {
    if (editorRef.current === null) return '';
    const editorInstance = editorRef.current.getInstance();
    const contentMark = editorInstance.getMarkdown();
    return contentMark;
  };

  const makeThrottle = (callback: () => void, throttleTime: number) => {
    let isThrottle: boolean = false;
    return () => {
      if (!isThrottle) {
        isThrottle = true;
        setTimeout(() => {
          callback();
          isThrottle = false;
        }, throttleTime);
      }
    };
  };

  const MARKDOWN_THROTTLE_TIME = 2000;
  const getMarkDownThrottle = makeThrottle(() => {
    mySessionStorage.set([KEYS.SESSION_STORAGE.WRITE, title], getMarkDown());
  }, MARKDOWN_THROTTLE_TIME);
  if (editorRef.current !== null) {
    editorRef.current.getInstance().addHook('change', () => {
      getMarkDownThrottle();
    });
  }
};
const WritePage = ({ mode, writeDocument, isPending, defaultDocumentData }: WritePageProps) => {
  if (mode === 'edit' && defaultDocumentData === null) {
    window.history.back();
  }
  const initialValue = mySessionStorage.has([KEYS.SESSION_STORAGE.WRITE])
    ? (mySessionStorage.get([KEYS.SESSION_STORAGE.WRITE]) as string)
    : defaultDocumentData?.contents;
  const editorRef = useRef<Editor | null>(null);
  const { titleState, nicknameState, disabledSubmit } = usePostPage(defaultDocumentData);
  const [images, setImages] = useState<UploadImageMeta[]>([]);

  const getMarkup = () => {
    const editorInstance = editorRef.current?.getInstance();
    const contentMark = editorInstance?.getMarkdown();
    return contentMark;
  };

  const replaceLocalUrlToS3Url = (contents: string, imageMetas: UploadImageMeta[]) => {
    let newContents = contents;
    imageMetas.forEach(({ objectURL, s3URL }) => {
      newContents = newContents.replace(objectURL, s3URL);
    });

    return newContents;
  };

  const onClick = async () => {
    if (editorRef === null) return;

    const newMetas = await uploadImages(titleState.title, images);
    const linkReplacedContents = replaceLocalUrlToS3Url(getMarkup() ?? '', newMetas);

    const context = {
      title: titleState.title,
      contents: linkReplacedContents,
      writer: nicknameState.nickname,
      documentBytes: getBytes(getMarkup() ?? ''),
    };

    writeDocument(context);
  };

  backupContent(editorRef, titleState.title);
  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-3">
      <PostHeader mode={mode} onClick={onClick} isPending={isPending} disabledSubmit={disabledSubmit} />
      <TitleInputField titleState={titleState} nicknameState={nicknameState} disabled={mode === 'edit'} />
      <PostContents editorRef={editorRef} initialValue={initialValue} setImages={setImages} />
    </div>
  );
};

export default WritePage;
