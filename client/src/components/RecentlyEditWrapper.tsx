import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import RecentlyEditFallback from './RecentlyEditFallback';
import RecentlyEdit from './RecentlyEdit';

const RecentlyEditWrapper = () => {
  return (
    <ErrorBoundary FallbackComponent={RecentlyEditFallback}>
      <Suspense>
        <RecentlyEdit />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RecentlyEditWrapper;
