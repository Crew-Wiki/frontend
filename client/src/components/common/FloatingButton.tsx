import URLS from '@constants/urls';
import React from 'react';
import { useMatch } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const FloatingButton = () => {
  const moveToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const matchDocumentPage = useMatch(`/${URLS.WIKI}/${URLS.DOCS}`);
  const matchLogs = useMatch(`/${URLS.WIKI}/${URLS.DOCS}/${URLS.LOGS}`);
  const matchSpecificLog = useMatch(`/${URLS.WIKI}/${URLS.DOCS}/${URLS.SPECIFIC_LOG}`);

  const hideThis = matchDocumentPage === null && matchLogs === null && matchSpecificLog === null;

  return (
    <svg
      className={twMerge(
        'drop-shadow-lg fixed bottom-8 right-8 cursor-pointer md:bottom-12 md:right-12',
        hideThis ? 'hidden' : 'block',
      )}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={moveToTheTop}
    >
      <g clipPath="url(#clip0_542_1513)">
        <circle cx="18" cy="18" r="18" fill="#25B4B9" />
        <path
          d="M27 15L18 6M18 6L9 15M18 6V30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_542_1513">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FloatingButton;
