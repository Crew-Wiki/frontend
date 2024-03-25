import React from 'react';
import WikiHeader from '@components/WikiHeader';
import WikiMain from '@components/WikiMain';

import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
  return (
    <div className="App bg-grayscale-50">
      <WikiHeader />
      {/* <div className="bg-">안녕하세요</div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
      />
      <Button /> */}
      <WikiMain />
    </div>
  );
}

export default App;
