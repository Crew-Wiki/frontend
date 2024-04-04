import React, { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import DocumentFallback from './DocumentFallback';

interface DocumentWrapperProps {
  fallback?: ({ error }: FallbackProps) => React.JSX.Element;
  children?: React.JSX.Element;
}

const DocumentWrapper = ({ children, fallback }: DocumentWrapperProps) => {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={fallback ?? DocumentFallback} resetKeys={[location.pathname]}>
      <Suspense>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default DocumentWrapper;
