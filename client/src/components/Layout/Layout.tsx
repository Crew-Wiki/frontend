import React from 'react';
import { Outlet } from 'react-router-dom';
import DocumentWrapper from '@components/DocumentWrapper';
import RecentlyEdit from '@components/RecentlyEdit';
import RecentlyEditFallback from '@components/RecentlyEditFallback';
import WikiHeader from '../WikiHeader';

const Layout = () => {
  return (
    <div className="App">
      <WikiHeader />
      <div className="flex items-center justify-center h-fit mt-20 max-[768px]:mt-12">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full max-[768px]:py-2 max-[768px]:px-0">
          <div className="flex flex-col gap-6 w-full max-[768px]:gap-2">
            <Outlet />
          </div>
          <DocumentWrapper fallback={RecentlyEditFallback}>
            <RecentlyEdit />
          </DocumentWrapper>
        </main>
      </div>
    </div>
  );
};

export default Layout;
