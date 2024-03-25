import React, { useCallback, useState } from 'react';

function useNicknameInput(init: string) {
  const [value, setValue] = useState<string>(init);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue.length <= 3 && !/^[ㄱ-ㅎ가-힣]*$/.test(newValue)) {
      setErrorMessage('닉네임은 한글만 입력할 수 있어요');
      setValue(newValue.replace(/[^ㄱ-ㅎ가-힣]/g, ''));
    } else if (newValue.length > 4) {
      setErrorMessage('닉네임은 4자가 최대에요');
      setValue(newValue.slice(0, 4));
    } else {
      // 에러 메시지 초기화
      setErrorMessage('');
      setValue(newValue);
    }
  }, []);

  const reset = useCallback(() => {
    setValue(init);
    setErrorMessage('');
  }, [init]);
  return [value, onChange, reset, errorMessage] as const;
}

export default useNicknameInput;
