import React from 'react';

const TitleInputField = () => {
  return (
    <div className="flex gap-6 w-full h-fit">
      <div className="flex w-full h-14 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2">
        <input
          className="w-full outline-none font-bm text-2xl text-grayscale-800 placeholder:text-grayscale-lightText"
          placeholder="작성할 문서의 제목을 입력해 주세요"
        />
      </div>
      <div className="flex w-36 h-14 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2">
        <input
          className="w-full outline-none font-bm text-2xl text-grayscale-800 placeholder:text-grayscale-lightText"
          placeholder="닉네임"
        />
      </div>
    </div>
  );
};

export default TitleInputField;
