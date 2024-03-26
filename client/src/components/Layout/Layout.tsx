import React from 'react';
import { Outlet } from 'react-router-dom';
import WikiHeader from '../WikiHeader';
import DocumentFooter from '../DocumentFooter';
import RecentlyEdit from '../RecentlyEdit';

const Layout = () => {
  return (
    <div className="App bg-grayscale-50">
      <WikiHeader />
      <div className="flex items-center justify-center h-fit">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full">
          <div className="flex flex-col gap-6 w-full">
            <Outlet />
            <DocumentFooter />
          </div>
          <RecentlyEdit />
        </main>
      </div>
    </div>
  );
};

export default Layout;
