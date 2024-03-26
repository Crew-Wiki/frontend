import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

interface DocumentContentsProps {
  contents: string;
}

const DocumentContents = ({ contents }: DocumentContentsProps) => {
  return <Viewer initialValue={contents}></Viewer>;
};

export default DocumentContents;
