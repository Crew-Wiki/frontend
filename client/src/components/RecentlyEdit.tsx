import React from 'react';

const RecentlyEdit = () => {
  return (
    <aside className="flex flex-col w-60 h-fit bg-white border-primary-100 border-solid border rounded-xl">
      <h2 className="flex justify-center items-center w-full h-12 font-pretendard font-bold text-lg border-b border-primary-100">
        최근 편집
      </h2>
      {Array.from({ length: 20 }).map((_, index) => {
        return (
          <a
            key={index}
            className="px-2.5 py-2 font-pretendard font-normal text-xs border-b border-grayscale-100 last:border-0"
            href="https://techcourse.woowahan.com/"
            target="_blank_"
          >
            [2024.04.23] 쿠키
          </a>
        );
      })}
    </aside>
  );
};

export default RecentlyEdit;
