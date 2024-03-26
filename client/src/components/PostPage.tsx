import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import usePostDocument from '@/api/post/usePostDocument';
import PostContents from './PostContents';
import PostHeader from './PostHeader';
import TitleInputField from './TitleInputField';

const PostPage = () => {
  const editorRef = useRef<Editor | null>(null);
  const { writeDocument, isPending } = usePostDocument();

  const onClick = () => {
    if (editorRef === null) return;
    const editorInstance = editorRef.current?.getInstance();
    const contentMark = editorInstance?.getMarkdown();
    const context = {
      title: '켈리(6기)',
      contents: contentMark ?? '',
      writer: '켈리',
    };
    writeDocument(context);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
      <PostHeader onClick={onClick} isPending={isPending} />
      <TitleInputField />
      <PostContents editorRef={editorRef} />
    </div>
  );
};

export default PostPage;
