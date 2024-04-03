import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleInputFieldProps {
  titleState: {
    title: string;
    setTitle: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    errorMessage: string;
    isAlreadyWritten: () => Promise<void>;
  };
  nicknameState: {
    nickname: string;
    setNickname: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
  };
  disabled: boolean;
}

const TitleInputField = ({ titleState, nicknameState, disabled }: TitleInputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full justify-between">
        <div className="font-pretendard text-error-error text-sm text-right">{titleState.errorMessage}</div>
        <div className="font-pretendard text-error-error text-sm text-right">{nicknameState.errorMessage}</div>
      </div>
      <div className="flex gap-6 w-full h-fit">
        <div
          className={twMerge(
            'flex w-full h-14 px-4 py-2.5 rounded-xl border-grayscale-200 border-solid border gap-2 max-[768px]:text-sm max-[768px]:h-10',
            disabled ? 'bg-grayscale-50' : 'bg-white',
          )}
        >
          <input
            className={twMerge(
              'w-full outline-none font-bm text-2xl  placeholder:text-grayscale-lightText max-[768px]:text-sm',
              disabled ? 'text-grayscale-400' : 'text-grayscale-800',
            )}
            placeholder="문서의 제목을 입력해 주세요"
            value={titleState.title}
            onChange={titleState.setTitle}
            maxLength={12}
            disabled={disabled}
            onBlur={titleState.isAlreadyWritten}
          />
        </div>
        <div className="flex w-36 h-14 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2 max-[768px]:text-sm  max-[768px]:h-10">
          <input
            className="w-full outline-none font-bm text-2xl text-grayscale-800 placeholder:text-grayscale-lightText max-[768px]:text-sm"
            placeholder="편집자"
            value={nicknameState.nickname}
            onChange={nicknameState.setNickname}
          />
        </div>
      </div>
    </div>
  );
};

export default TitleInputField;
