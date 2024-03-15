import React from 'react';
import Button from '@components/Button';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
  return (
    <div className="App">
      <div className="text-3xl font-bold bg-black">안녕하세요</div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
      />
      <Button />
    </div>
  );
}

export default App;
