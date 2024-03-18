import React from 'react';
import DocumentTitle from './DocumentTitle';
import DocumentSubMenu from './DocumentSubMenu';

const DocumentHeader = () => {
  return (
    <header className="flex justify-between w-full">
      <DocumentTitle />
      <DocumentSubMenu />
    </header>
  );
};

export default DocumentHeader;
