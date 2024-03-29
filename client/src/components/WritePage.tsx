import React, { useRef } from 'react';
import usePostPage from '@hooks/usePostPage';
import { Editor } from '@toast-ui/react-editor';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { WikiDocument, WriteDocumentContent } from '@type/DocumentType';
import PostHeader from './PostHeader';
import TitleInputField from './TitleInputField';
import PostContents from './PostContents';

interface WritePageProps {
  mode: 'add' | 'edit';
  writeDocument: UseMutateFunction<AxiosResponse<WikiDocument, any>, Error, WriteDocumentContent, unknown>;
  isPending: boolean;
  defaultDocumentData?: WikiDocument;
}

const WritePage = ({ mode, writeDocument, isPending, defaultDocumentData }: WritePageProps) => {
  if (mode === 'edit' && defaultDocumentData === null) {
    window.history.back();
  }
  const editorRef = useRef<Editor | null>(null);
  const { titleState, nicknameState } = usePostPage(defaultDocumentData);

  const onClick = () => {
    if (editorRef === null) return;
    const editorInstance = editorRef.current?.getInstance();
    const contentMark = editorInstance?.getMarkdown();
    const context = {
      title: titleState.title,
      contents: contentMark ?? '',
      writer: nicknameState.nickname,
    };

    writeDocument(context);
  };
  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-3">
      <PostHeader mode={mode} onClick={onClick} isPending={isPending} />
      <TitleInputField titleState={titleState} nicknameState={nicknameState} disabled={mode === 'edit'} />
      <PostContents editorRef={editorRef} initialValue={defaultDocumentData?.contents} />
    </div>
  );
};

export default WritePage;
