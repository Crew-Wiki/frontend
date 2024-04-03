import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DocumentFallback from './DocumentFallback';
import LogContent from './LogContent';

const LogPageWrapper = () => {
  return (
    <ErrorBoundary FallbackComponent={DocumentFallback}>
      <Suspense>
        <LogContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LogPageWrapper;
