import React from 'react';
import DocumentHeader from './DocumentHeader';
import DocumentContents from './DocumentContents';

const DocumentPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
      <DocumentHeader />
      <DocumentContents />
    </div>
  );
};

export default DocumentPage;
