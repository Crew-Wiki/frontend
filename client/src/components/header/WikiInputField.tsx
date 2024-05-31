import React from 'react';
import SearchCircle from '@assets/image/search-circle-secondary.svg';
import useInput from '@hooks/useInput';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import { twMerge } from 'tailwind-merge';
import useSearchDocumentByQuery from '@hooks/useSearchDocumentByQuery';
import RelativeSearchTerms from './RelativeSearchTerms';

interface WikiInputProps {
  id?: string;
  className?: string;
  handleSubmit: (e: React.FormEvent) => void;
}

const WikiInputField = ({ id, className, handleSubmit }: WikiInputProps) => {
  const [value, setValue] = useInput<string>('');
  const navigate = useNavigate();

  const { titles } = useSearchDocumentByQuery(value);

  const onSubmit = (event: React.FormEvent, search?: string) => {
    event.preventDefault();
    if (value.trim() === '') return;

    if (search !== undefined) {
      navigate(`${URLS.WIKI}/${search}`);
    } else if (titles !== undefined && titles.length !== 0) {
      navigate(`${URLS.WIKI}/${titles[0]}`);
    } else {
      navigate(`${URLS.WIKI}/${value}`);
    }

    setValue('');
    handleSubmit(event);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        'flex relative h-11 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2',
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
        <img className="cursor-pointer max-[768px]:hidden" src={SearchCircle} alt="search" />
      </button>
      {value.trim() !== '' && <RelativeSearchTerms searchTerms={titles ?? []} onClick={onSubmit} />}
    </form>
  );
};

export default WikiInputField;
