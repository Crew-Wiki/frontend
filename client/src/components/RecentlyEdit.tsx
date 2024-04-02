import React from 'react';
import useGetRecentlyDocuments from '@api/get/useGetRecentlyDocuments';
import URLS from '@constants/urls';
import timeConverter from '@utils/TimeConverter';

const RecentlyEdit = () => {
  const { recentlyDocuments } = useGetRecentlyDocuments();

  return (
    <aside className="max-[1024px]:hidden flex flex-col w-60 h-fit bg-white border-primary-100 border-solid border rounded-xl">
      <h2 className="flex justify-center items-center w-full h-12 font-pretendard font-bold text-lg border-b border-primary-100">
        최근 편집
      </h2>
      {recentlyDocuments.documents.map((document) => {
        return (
          <a
            key={`recently-${document.documentId}`}
            className="px-2.5 py-2 font-pretendard font-normal text-xs border-b border-grayscale-100 last:border-0"
            href={`${URLS.WIKI}/${document.title}`}
          >
            {`[${timeConverter(document.generateTime, 'YYYY.MM.DD')}] ${document.title}`}
          </a>
        );
      })}
    </aside>
  );
};

export default RecentlyEdit;
