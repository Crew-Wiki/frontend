import React from 'react';
import { ReactComponent as SearchCircle } from '@assets/image/search-circle-secondary.svg';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';
import { twMerge } from 'tailwind-merge';

interface WikiInputProps {
  className?:string
}

const WikiInputField = ({className}:WikiInputProps) => {
  return (
    <div className={twMerge("flex w-80 h-11 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2", className)}>
      <input
        className="w-full outline-none font-pretendard text-base font-normal text-grayscale-800 placeholder:text-grayscale-lightText "
        placeholder="검색할 문서의 제목을 입력하세요."
      />
      <SearchCircle className="cursor-pointer" />
    </div>
  );
};

export default WikiInputField;
