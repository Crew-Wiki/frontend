import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DocumentFallback from './DocumentFallback';
import DocumentPage from './DocumentPage';

interface DocumentPageProps {
  daemoon?: string;
}

const DocumentPageWrapper = ({ daemoon }: DocumentPageProps) => {
  return (
    <ErrorBoundary FallbackComponent={DocumentFallback}>
      <Suspense>
        <DocumentPage daemoon={daemoon} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DocumentPageWrapper;
