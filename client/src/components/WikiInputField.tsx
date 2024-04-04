import React, { FormEvent } from 'react';
import { ReactComponent as SearchCircle } from '@assets/image/search-circle-secondary.svg';
import useInput from '@hooks/useInput';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { twMerge } from 'tailwind-merge';

interface WikiInputProps {
  id?: string;
  className?: string;
  handleSubmit: (e: FormEvent) => void;
}

const WikiInputField = ({ id, className, handleSubmit }: WikiInputProps) => {
  const [value, setValue] = useInput<string>('');
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    value.trim() === '' ? navigate('/') : navigate(`${URLS.WIKI}/${value}`);
    setValue('');
    handleSubmit(event);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        'flex h-11 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2',
        className,
      )}
    >
      <input
        id={id}
        className="w-full outline-none font-pretendard text-base font-normal text-grayscale-800 placeholder:text-grayscale-lightText "
        placeholder="검색할 문서의 제목을 입력하세요."
        value={value}
        onChange={setValue}
      />
      <button>
        <SearchCircle className="cursor-pointer max-[768px]:hidden" />
      </button>
    </form>
  );
};

export default WikiInputField;
