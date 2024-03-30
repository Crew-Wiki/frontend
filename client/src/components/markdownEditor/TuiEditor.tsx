import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import { log } from 'console';

type HookCallback = (url: string, text?: string) => void;

type Props = {
  editorRef: React.RefObject<Editor> | null;
  imageHandler: (blob: File | Blob, callback: HookCallback) => void;
  content?: string;
};

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link'],
  ['scrollSync'],
];

function TuiEditor({ content, editorRef, imageHandler }: Props) {
  const isDesktop = window.screen.availWidth >= 768;
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
    />
  );
}

export default TuiEditor;
