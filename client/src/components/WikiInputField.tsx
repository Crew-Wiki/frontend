import React from 'react';
import { ReactComponent as SearchCircle } from '@assets/image/search-circle-secondary.svg';
import useInput from '@hooks/useInput';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';

const WikiInputField = () => {
  const [value, onChange] = useInput<string>('');
  const navigate = useNavigate();

  const onSubmit = () => {
    if (value.trim() === '') return;
    navigate(`${URLS.WIKI}/${value}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-80 h-11 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2"
    >
      <input
        className="w-full outline-none font-pretendard text-base font-normal text-grayscale-800 placeholder:text-grayscale-lightText"
        placeholder="검색할 문서의 제목을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button>
        <SearchCircle className="cursor-pointer" />
      </button>
    </form>
  );
};

export default WikiInputField;
