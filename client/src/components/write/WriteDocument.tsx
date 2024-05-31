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
import useSearchDocumentByQuery from '@hooks/useSearchDocumentByQuery';
import RelativeSearchTerms from '@components/header/RelativeSearchTerms';
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
  const [referQuery, setReferQuery] = useState('');
  const [refStartPos, setRefStartPos] = useState<[number, number] | null>(null);
  const [refEndPos, setRefEndPos] = useState<[number, number] | null>(null);

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

  const onClick = (event: React.MouseEvent<HTMLElement>, search?: string) => {
    if (!editorRef.current || !refStartPos || !refEndPos) return;
    const replacement = `[${search}](https://crew-wiki.site/wiki/${encodeURI(search!)})`;
    editorRef.current.getInstance().replaceSelection(replacement, [refStartPos[0], refStartPos[1] - 1], refEndPos);
    setRefEndPos(null);
    setRefStartPos(null);
    setReferQuery('');
  };

  const { titles } = useSearchDocumentByQuery(referQuery);
  const floatingArea = document.createElement('div');
  floatingArea.id = 'floating-area';
  floatingArea.style.width = '320px';
  floatingArea.style.height = '100px';
  floatingArea.style.position = 'relative';

  useEffect(() => {
    const recordRefStartPos = () => {
      if (!editorRef.current) return;
      const currentPos = editorRef.current.getInstance().getSelection()[0] as [number, number];
      const letter = editorRef.current.getInstance().getSelectedText([currentPos[0], currentPos[1] - 1], currentPos);
      if (letter === ' ') {
        setRefStartPos(null);
        return;
      }
      if (letter !== '@') return;
      setRefStartPos(currentPos);
    };

    const recordRefEndPose = () => {
      if (!editorRef.current) return;
      if (!refStartPos) return;
      const currentPos = editorRef.current.getInstance().getSelection()[1] as [number, number];
      setRefEndPos(currentPos);
      const text = editorRef.current.getInstance().getSelectedText(refStartPos, currentPos);
      setReferQuery(text);
    };
    if (editorRef.current !== null) {
      editorRef.current.getInstance().addHook('change', () => {
        recordRefStartPos();
        recordRefEndPose();
      });
    }
  }, [editorRef.current, refStartPos, titleState.title]);
  // editorRef.current?.getInstance().addWidget(floatingArea, 'bottom', refEndPos!);

  const floatingAreaTop = `${Number(floatingArea.style.top.slice(0, -2)) + window.scrollY + 36}px`;
  const floatingAreaLeft = floatingArea.style.left;

  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-3">
      <PostHeader mode={mode} onClickSubmit={onClickSubmit} isPending={isPending} disabledSubmit={disabledSubmit} />
      <TitleInputField titleState={titleState} nicknameState={nicknameState} disabled={mode === 'edit'} />
      <PostContents editorRef={editorRef} initialValue={initialValue} setImages={setImages} />
      <RelativeSearchTerms
        style={{ top: floatingAreaTop, left: floatingAreaLeft, width: 320 }}
        searchTerms={titles ?? []}
        onClick={onClick}
      />
    </div>
  );
};

export default WriteDocument;
