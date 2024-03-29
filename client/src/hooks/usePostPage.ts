import { WikiDocument } from '@type/DocumentType';
import useInput from './useInput';
import useNicknameInput from './useNicknameInput';

const usePostPage = (defaultDocumentData?: WikiDocument) => {
  const [title, setTitle] = useInput<string>(defaultDocumentData?.title ?? '');
  const [nickname, setNickname, , errorMessage] = useNicknameInput(defaultDocumentData?.writer ?? '');

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
