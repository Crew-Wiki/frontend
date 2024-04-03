import { WikiDocument } from '@type/DocumentType';
import useNicknameInput from './useNicknameInput';
import useTitleInput from './useTitleInput';

const usePostPage = (defaultDocumentData?: WikiDocument) => {
  const [title, setTitle, , titleErrorMessage, isAlreadyWritten] = useTitleInput(defaultDocumentData?.title ?? '');
  const [nickname, setNickname, , errorMessage] = useNicknameInput(defaultDocumentData?.writer ?? '');

  const titleState = {
    title,
    setTitle,
    errorMessage: titleErrorMessage,
    isAlreadyWritten,
  };

  const nicknameState = {
    nickname,
    setNickname,
    errorMessage,
  };

  return { titleState, nicknameState };
};

export default usePostPage;
