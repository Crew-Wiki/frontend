import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';
import RandomButton from '@assets/image/RandomButton';
import WikiInputField from './WikiInputField';

const WikiHeader = () => {
  return (
    <header className="flex w-full h-12 md:h-20 bg-primary-primary justify-center">
      <div className="flex justify-between items-center px-4 header-container max-w-[1440px] w-full">
        <Link to="/">
          <h1 className="font-bm text-2xl text-white font-normal">크루위키</h1>
        </Link>

        <div className="flex items-center">
          <RandomButton className="mr-4 cursor-pointer" />
          <WikiInputField className="w-20 md:w-[20.25rem] hidden md:flex" />
          <SearchCircleSmall className="cursor-pointer md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default WikiHeader;
