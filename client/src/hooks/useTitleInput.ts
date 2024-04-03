import { WikiDocument } from '@type/DocumentType';
import axiosInstance from '@utils/axios';
import React, { useCallback, useState } from 'react';
import ENDPOINT from '@constants/endpoint';

const { GET_DOCUMENT_BY_TITLE } = ENDPOINT;

function useTitleInput(init: string) {
  const [value, setValue] = useState<string>(init);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isAlreadyWritten = async () => {
    try {
      await axiosInstance.get<WikiDocument>(`${GET_DOCUMENT_BY_TITLE}/${value}`);
      setErrorMessage('이미 있는 문서입니다.');
    } catch (error) {
      setErrorMessage('');
    }
  };

  const onChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  }, []);

  const reset = useCallback(() => {
    setValue(init);
    setErrorMessage('');
  }, [init]);
  return [value, onChange, reset, errorMessage, isAlreadyWritten] as const;
}

export default useTitleInput;
