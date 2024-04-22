import React, { Suspense } from 'react';
import { WikiDocument } from '@type/DocumentType';
import { useLocation } from 'react-router-dom';
import DocumentFooter from '../document/DocumentFooter';
import EditLogsHeader from './EditLogsHeader';
import LogsContents from './LogsContents';

const EditLogs = () => {
  const defaultDocumentData = useLocation().state as WikiDocument;

  if (defaultDocumentData === null) {
    window.history.back();
  }

  return (
    <>
      <div className="flex flex-col gap-6 w-full h-fit  min-h-[864px] bg-white border-primary-100 border-solid border rounded-xl p-8 max-md:p-4 max-md:gap-2">
        <EditLogsHeader wiki={defaultDocumentData} />
        <h1 className="font-bm text-2xl text-grayscale-800">{defaultDocumentData.title}</h1>
        <Suspense>
          <LogsContents title={defaultDocumentData.title} />
        </Suspense>
      </div>
      <DocumentFooter generateTime={defaultDocumentData.generateTime} />
    </>
  );
};

export default EditLogs;
