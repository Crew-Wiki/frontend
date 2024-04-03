import React from 'react';
import { Outlet } from 'react-router-dom';
import RecentlyEditWrapper from '@components/RecentlyEditWrapper';
import WikiHeader from '../WikiHeader';

const Layout = () => {
  return (
    <div className="App">
      <WikiHeader />
      <div className="flex items-center justify-center h-fit">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full max-[768px]:py-2 max-[768px]:px-0">
          <div className="flex flex-col gap-6 w-full max-[768px]:gap-2">
            <Outlet />
          </div>
          <RecentlyEditWrapper />
        </main>
      </div>
    </div>
  );
};

export default Layout;
