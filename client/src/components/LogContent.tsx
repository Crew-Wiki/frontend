import React from 'react';
import useGetSpecificDocumentLog from '@api/get/useGetSpecificDocumentLog';
import { useParams } from 'react-router-dom';
import useGetDocumentByTitle from '@api/get/useGetDocumentByTitle';
import DocumentHeader from './DocumentHeader';
import DocumentContents from './DocumentContents';
import DocumentFooter from './DocumentFooter';
import MobileDocumentHeader from './MobileDocumentHeader';

const LogContent = () => {
  const { logId } = useParams();
  const { document } = useGetSpecificDocumentLog(Number(logId));
  const { docs } = useGetDocumentByTitle(document.title);

  return (
    <>
      <MobileDocumentHeader docs={docs} />
      <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8 max-[768px]:p-4 max-[768px]:gap-2 ">
        <DocumentHeader wiki={docs} />
        <DocumentContents contents={document.contents} />
      </div>
      <DocumentFooter generateTime={document.generateTime} />
    </>
  );
};

export default LogContent;
