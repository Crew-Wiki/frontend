import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import usePostPage from '@hooks/usePostPage';
import usePostDocument from '@api/post/usePostDocument';
import PostContents from './PostContents';
import PostHeader from './PostHeader';
import TitleInputField from './TitleInputField';

const PostPage = () => {
  const editorRef = useRef<Editor | null>(null);
  const { writeDocument, isPending } = usePostDocument();
  const { titleState, nicknameState } = usePostPage();

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
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
      <PostHeader onClick={onClick} isPending={isPending} />
      <TitleInputField titleState={titleState} nicknameState={nicknameState} />
      <PostContents editorRef={editorRef} />
    </div>
  );
};

export default PostPage;
