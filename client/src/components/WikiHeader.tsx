import React from 'react';
import WikiInputField from './WikiInputField';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';


const WikiHeader = () => {
  return (
    <header className="flex w-full h-20 bg-primary-primary justify-center">
      <div className="flex justify-between items-center px-4 header-container max-w-[1440px] w-full">
        <h1 className="font-bm text-2xl text-white font-normal">크루위키</h1>
        <WikiInputField className="w-20 md:w-[20.25rem] hidden md:flex" />
        <SearchCircleSmall className="cursor-pointer md:hidden" />
      </div>
    </header>
  );
};

export default WikiHeader;
