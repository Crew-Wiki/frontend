import React from 'react';
import WikiInputField from './WikiInputField';

const WikiHeader = () => {
  return (
    <header className="flex w-ful h-20 bg-primary-primary justify-center">
      <div className="flex justify-between items-center px-4 header-container max-w-[1440px] w-full">
        <h1 className="font-bm text-2xl text-white font-normal">크루위키</h1>
        <WikiInputField />
      </div>
    </header>
  );
};

export default WikiHeader;
