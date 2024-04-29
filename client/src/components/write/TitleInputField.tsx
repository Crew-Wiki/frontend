import React from 'react';
import Input from '../common/Input';

interface TitleInputFieldProps {
  titleState: {
    title: string;
    setTitle: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    errorMessage: string;
    checkIsAlreadyWritten: () => Promise<void>;
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
        <Input
          className="flex h-14 px-4 py-2.5 rounded-xl border-grayscale-200 border-solid border gap-2 max-[768px]:h-10 font-bm text-2xl max-[768px]:text-sm"
          placeholder="문서의 제목을 입력해 주세요"
          input={titleState.title}
          handleChangeInput={titleState.setTitle}
          maxLength={12}
          disabled={disabled}
          onBlur={titleState.checkIsAlreadyWritten}
          invalid={titleState.errorMessage !== ''}
        />
        <Input
          className="flex w-36 h-14 px-4 py-2.5 rounded-xl bg-white border-grayscale-200 border-solid border gap-2 max-[768px]:h-10 font-bm text-2xl max-[768px]:text-sm"
          placeholder="편집자"
          input={nicknameState.nickname}
          handleChangeInput={nicknameState.setNickname}
          invalid={nicknameState.errorMessage !== ''}
        />
      </div>
    </div>
  );
};

export default TitleInputField;
