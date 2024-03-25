import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

type HookCallback = (url: string, text?: string) => void;

type Props = {
  editorRef: React.RefObject<Editor> | null;
  imageHandler: (blob: File | Blob, callback: HookCallback) => void;
  content?: string;
};

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']];

function TuiEditor({ content, editorRef, imageHandler }: Props) {
  return (
    <>
      <Editor
        initialValue={content ?? ' '}
        initialEditType="wysiwyg"
        autofocus={false}
        ref={editorRef}
        toolbarItems={toolbar}
        hideModeSwitch
        height="500px"
        hooks={{ addImageBlobHook: imageHandler }}
      />
    </>
  );
}

export default TuiEditor;
