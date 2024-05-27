import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

type HookCallback = (url: string, text?: string) => void;

interface Props extends EditorProps {
  editorRef: React.RefObject<Editor> | null;
  imageHandler: (blob: File | Blob, callback: HookCallback) => void;
  content?: string;
}

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link'],
  ['scrollSync'],
];

function TuiEditor({ content, editorRef, imageHandler, ...restProps }: Props) {
  const isDesktop = window.innerWidth >= 768;
  return (
    <Editor
      initialValue={content ?? '내용을 입력해주세요'}
      initialEditType="markdown"
      autofocus={false}
      previewStyle={isDesktop ? 'vertical' : 'tab'}
      ref={editorRef}
      toolbarItems={toolbar}
      hideModeSwitch={true}
      height="500px"
      hooks={{ addImageBlobHook: imageHandler }}
      {...restProps}
    />
  );
}

export default TuiEditor;
