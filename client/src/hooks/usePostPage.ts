import { WikiDocument } from '@type/DocumentType';
import useNicknameInput from './useNicknameInput';
import useTitleInput from './useTitleInput';

const usePostPage = (defaultDocumentData?: WikiDocument) => {
  const [title, setTitle, , titleErrorMessage, checkIsAlreadyWritten] = useTitleInput(defaultDocumentData?.title ?? '');
  const [nickname, setNickname, , errorMessage] = useNicknameInput('');

  const titleState = {
    title,
    setTitle,
    errorMessage: titleErrorMessage,
    checkIsAlreadyWritten,
  };

  const nicknameState = {
    nickname,
    setNickname,
    errorMessage,
  };

  const isInputEmpty = titleState.title === '' || nicknameState.nickname === '';
  const disabledSubmit = isInputEmpty || titleErrorMessage !== '';

  return { titleState, nicknameState, disabledSubmit };
};

export default usePostPage;
