import React from 'react';
import DocumentPage from './DocumentPage';
import RecentlyEdit from './RecentlyEdit';
import DocumentFooter from './DocumentFooter';

const MainContainer = () => {
  return (
    <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full">
      <div className="flex flex-col gap-6 w-full">
        <DocumentPage />
        <DocumentFooter />
      </div>
      <RecentlyEdit />
    </main>
  );
};

export default MainContainer;
