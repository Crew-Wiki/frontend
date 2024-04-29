import React from 'react';
import usePostDocument from '@api/post/usePostDocument';
import usePutDocument from '@api/put/usePutDocument';
import { useLocation } from 'react-router-dom';
import { WikiDocument } from '@type/DocumentType';
import WriteDocument from './WriteDocument';

interface WritePageProps {
  mode: 'add' | 'edit';
}

const WritePage = ({ mode }: WritePageProps) => {
  return mode === 'add' ? (
    <WriteDocument mode="add" {...usePostDocument()} />
  ) : (
    <WriteDocument mode="edit" {...usePutDocument()} defaultDocumentData={useLocation().state as WikiDocument} />
  );
};

export default WritePage;
