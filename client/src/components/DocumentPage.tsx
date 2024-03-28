import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetDocumentByTitle from '@api/get/useGetDocumentByTitle';
import DocumentHeader from './DocumentHeader';
import DocumentContents from './DocumentContents';
import DocumentFooter from './DocumentFooter';

interface DocumentPageProps {
  daemoon?: string;
}

const DocumentPage = ({ daemoon }: DocumentPageProps) => {
  const { title } = useParams();
  const { docs } = useGetDocumentByTitle(title ?? daemoon ?? '');

  const navigate = useNavigate();

  useEffect(() => {
    if (daemoon !== undefined && title === undefined) {
      navigate(daemoon);
    }
  }, [daemoon]);

  return (
    <>
      <div className="flex flex-col gap-6 w-full h-fit bg-white border-primary-100 border-solid border rounded-xl p-8">
        <DocumentHeader wiki={docs} />
        <DocumentContents contents={docs.contents} />
      </div>
      <DocumentFooter generateTime={docs.generateTime} />
    </>
  );
};

export default DocumentPage;
