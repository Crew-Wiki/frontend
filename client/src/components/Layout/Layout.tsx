import React from 'react';
import { Outlet } from 'react-router-dom';
import RecentlyEdit from '@components/recentlyEdit/RecentlyEdit';
import RecentlyEditFallback from '@components/recentlyEdit/RecentlyEditFallback';
import FloatingButton from '@components/common/FloatingButton';
import DocumentBoundary from '@components/common/DocumentBoundary';
import WikiHeader from '../header/WikiHeader';

const Layout = () => {
  return (
    <div className="App relative">
      <WikiHeader />
      <div className="flex items-center justify-center h-fit">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full max-[768px]:py-2 max-[768px]:px-0">
          <div className="flex flex-col gap-6 w-full max-[768px]:gap-2">
            <Outlet />
          </div>
          <DocumentBoundary fallback={RecentlyEditFallback}>
            <RecentlyEdit />
          </DocumentBoundary>
        </main>
      </div>
      <FloatingButton />
    </div>
  );
};

export default Layout;
