import React from 'react';
import { Outlet } from 'react-router-dom';
import RecentlyEditWrapper from '@components/RecentlyEditWrapper';
import WikiHeader from '../WikiHeader';

const Layout = () => {
  return (
    <div className="App bg-grayscale-50">
      <WikiHeader />
      <div className="flex items-center justify-center h-fit">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full">
          <div className="flex flex-col gap-6 w-full">
            <Outlet />
          </div>
          <RecentlyEditWrapper />
        </main>
      </div>
    </div>
  );
};

export default Layout;
