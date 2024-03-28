import useInput from './useInput';
import useNicknameInput from './useNicknameInput';

const usePostPage = () => {
  const [title, setTitle] = useInput<string>('');
  const [nickname, setNickname, , errorMessage] = useNicknameInput('');

  const titleState = {
    title,
    setTitle,
  };

  const nicknameState = {
    nickname,
    setNickname,
    errorMessage,
  };

  return { titleState, nicknameState };
};

export default usePostPage;
