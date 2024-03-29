import React, { Suspense } from 'react';
import { WikiDocument } from '@type/DocumentType';
import DocumentFooter from './DocumentFooter';
import EditLogsHeader from './EditLogsHeader';
import LogsContents from './LogsContents';

interface EditLogsProps {
  defaultDocumentData: WikiDocument;
}

const EditLogs = ({ defaultDocumentData }: EditLogsProps) => {
  if (defaultDocumentData === null) {
    window.history.back();
  }

  return (
    <>
      <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
        <EditLogsHeader wiki={defaultDocumentData} />
        <Suspense>
          <LogsContents title={defaultDocumentData.title} />
        </Suspense>
      </div>
      <DocumentFooter generateTime={defaultDocumentData.generateTime} />
    </>
  );
};

export default EditLogs;
