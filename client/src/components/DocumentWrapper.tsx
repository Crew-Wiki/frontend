import React, { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import DocumentFallback from './DocumentFallback';

interface DocumentWrapperProps {
  fallback?: ({ error }: FallbackProps) => React.JSX.Element;
  children?: React.JSX.Element;
}

const DocumentWrapper = ({ children, fallback }: DocumentWrapperProps) => {
  return (
    <ErrorBoundary FallbackComponent={fallback ?? DocumentFallback}>
      <Suspense>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default DocumentWrapper;
