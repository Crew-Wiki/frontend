import React, { useRef } from 'react';
import WikiHeader from '@components/WikiHeader';
import WikiMain from '@components/WikiMain';

import '@toast-ui/editor/dist/toastui-editor.css';
import TuiEditor from './components/markdownEditor/TuiEditor';

type HookCallback = (url: string, text?: string) => void;

function App() {
  const editorRef = useRef(null);
  const imageHandler = async (blob: File | Blob, callback: HookCallback) => {
    console.log(blob);
    callback(
      'https://www.seouldanurim.net/comm/getImage?srvcId=MEDIA&parentSn=54786&fileTy=MEDIA&fileNo=1&thumbTy=L',
      '공원',
    );
  };
  return (
    <div className="App bg-grayscale-50">
      <WikiHeader />
      <TuiEditor content="" editorRef={editorRef} imageHandler={imageHandler} />
      <WikiMain />
    </div>
  );
}

export default App;
