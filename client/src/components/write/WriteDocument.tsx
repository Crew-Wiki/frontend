import React, { useEffect, useRef, useState } from 'react';
import usePostPage from '@hooks/usePostPage';
import { Editor } from '@toast-ui/react-editor';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { UploadImageMeta, WikiDocument, WriteDocumentContent } from '@type/DocumentType';
import uploadImages from '@api/awsS3';
import getBytes from '@utils/getBytes';
import mySessionStorage from '@utils/mySessionStorage';
import KEYS from '@constants/keys';
import PostHeader from './PostHeader';
import TitleInputField from './TitleInputField';
import PostContents from './PostContents';
import useThrottle from './useThrottle';

interface WritePageProps {
  mode: 'add' | 'edit';
  writeDocument: UseMutateFunction<AxiosResponse<WikiDocument, any>, Error, WriteDocumentContent, unknown>;
  isPending: boolean;
  defaultDocumentData?: WikiDocument;
}

const getMarkDown = (editorRef: React.MutableRefObject<Editor | null>) => {
  return editorRef.current?.getInstance().getMarkdown();
};

const WriteDocument = ({ mode, writeDocument, isPending, defaultDocumentData }: WritePageProps) => {
  if (mode === 'edit' && defaultDocumentData === null) {
    window.history.back();
  }

  const { makeThrottle, cleanup } = useThrottle();
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
  const onClickSubmit = async () => {
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

    mySessionStorage.remove([KEYS.SESSION_STORAGE.WRITE, titleState.title]);
  };

  const initialValue = mySessionStorage.has([KEYS.SESSION_STORAGE.WRITE, titleState.title])
    ? (mySessionStorage.get([KEYS.SESSION_STORAGE.WRITE, titleState.title]) as string)
    : defaultDocumentData?.contents;

  useEffect(
    function attachBackupHandler() {
      const MARKDOWN_THROTTLE_TIME = 5000;

      const saveMarkDown = () => {
        mySessionStorage.set([KEYS.SESSION_STORAGE.WRITE, titleState.title], getMarkDown(editorRef) ?? '');
      };
      const saveMarkDownThrottle = makeThrottle(saveMarkDown, MARKDOWN_THROTTLE_TIME);

      if (editorRef.current !== null) {
        editorRef.current.getInstance().addHook('change', saveMarkDownThrottle);
      }
      return cleanup;
    },
    [editorRef, titleState.title],
  );

  const [refStartPose, setRefStartPose] = useState<[number, number] | null>(null);

  useEffect(() => {
    const recordRefStartPose = () => {
      if (!editorRef.current) return;
      const startPose = editorRef.current.getInstance().getSelection()[0] as [number, number];
      const letter = editorRef.current.getInstance().getSelectedText([startPose[0], startPose[1] - 1], startPose);
      if (letter === ' ') {
        setRefStartPose(null);
        return;
      }
      if (letter !== '@') return;
      setRefStartPose(startPose);
    };

    const recordRefEndPose = () => {
      if (!editorRef.current) return;
      if (!refStartPose) return;
      const refEndPose = editorRef.current.getInstance().getSelection()[1];
      const text = editorRef.current.getInstance().getSelectedText(refStartPose, refEndPose);
      console.log('refEndPose  기록됨 : ', text);
    };
    if (editorRef.current !== null) {
      editorRef.current.getInstance().addHook('change', () => {
        recordRefStartPose();
        recordRefEndPose();
      });
    }
  }, [editorRef.current, refStartPose, titleState.title]);

  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-3">
      <PostHeader mode={mode} onClickSubmit={onClickSubmit} isPending={isPending} disabledSubmit={disabledSubmit} />
      <TitleInputField titleState={titleState} nicknameState={nicknameState} disabled={mode === 'edit'} />
      <PostContents editorRef={editorRef} initialValue={initialValue} setImages={setImages} />
    </div>
  );
};

export default WriteDocument;
