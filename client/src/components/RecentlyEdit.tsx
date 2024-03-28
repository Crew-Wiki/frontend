import React from 'react';
import useGetRecentlyDocuments from '@api/get/useGetRecentlyDocuments';
import { Link } from 'react-router-dom';
import URLS from '@constants/urls';
import timeConverter from '@utils/TimeConverter';

const RecentlyEdit = () => {
  const { recentlyDocuments } = useGetRecentlyDocuments();
  return (
    <aside className="flex flex-col w-60 h-fit bg-white border-primary-100 border-solid border rounded-xl">
      <h2 className="flex justify-center items-center w-full h-12 font-pretendard font-bold text-lg border-b border-primary-100">
        최근 편집
      </h2>
      {recentlyDocuments.documents.map((document) => {
        return (
          <Link
            key={`recently-${document.logId}`}
            className="px-2.5 py-2 font-pretendard font-normal text-xs border-b border-grayscale-100 last:border-0"
            to={`${URLS.WIKI}/${document.title}`}
            target="_blank_"
          >
            {`[${timeConverter(document.generateTime, 'YYYY.MM.DD')}] ${document.title}`}
          </Link>
        );
      })}
    </aside>
  );
};

export default RecentlyEdit;
