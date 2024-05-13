// https://velog.io/@dea8307/React-useDebounce-Hook-%EC%82%AC%EC%9A%A9%EA%B8%B0
import { useRef } from 'react';

const useDebounce = (callback: () => void, term: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, term);
    timer.current = newTimer;
  };

  return dispatchDebounce;
};

export default useDebounce;
