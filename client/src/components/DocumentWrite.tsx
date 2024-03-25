import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import usePostDocument from '@api/post/usePostDocument';
import TuiEditor from './markdownEditor/TuiEditor';
import '@toast-ui/editor/dist/toastui-editor.css';

type HookCallback = (url: string, text?: string) => void;

const DocumentWrite = () => {
  const { writeDocument, isPending } = usePostDocument();
  const editorRef = useRef<Editor | null>(null);
  const imageHandler = async (blob: File | Blob, callback: HookCallback) => {
    console.log(blob);
    callback(
      'https://www.seouldanurim.net/comm/getImage?srvcId=MEDIA&parentSn=54786&fileTy=MEDIA&fileNo=1&thumbTy=L',
      '공원',
    );
  };
  const onSubmit = () => {
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
    <div className="App bg-grayscale-50">
      <TuiEditor content="" editorRef={editorRef} imageHandler={imageHandler} />
    </div>
  );
};
export default DocumentWrite;
