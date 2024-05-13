import React from 'react';
import { WikiDocumentLogSummary } from '@type/DocumentType';
import timeConverter from '@utils/TimeConverter';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';

interface EachLogContentProps {
  title: string;
  summary: WikiDocumentLogSummary;
}

const EachLogContent = ({
  title,
  summary: { logId, writer, version, generateTime, documentBytes },
}: EachLogContentProps) => {
  const navigate = useNavigate();

  const goLogDetail = () => {
    navigate(`${URLS.WIKI}/${title}/log/${logId}`);
  };

  return (
    <button
      className="flex items-center justify-center w-full gap-2 px-2 py-4 border border-primary-100 rounded-2xl font-pretendard text-md  text-grayscale-800 md:gap-8"
      onClick={goLogDetail}
    >
      <div className="w-10">
        <p className="w-full text-center">{version}</p>
      </div>
      <div className="grow text-center flex justify-center">
        <p className="w-[144px] text-center md:w-full">
          {timeConverter(generateTime, 'YYYY년 M월 D일 (ddd) HH:mm:ss')}
        </p>
      </div>
      <div className="w-16">
        <p className="w-full text-center">{`${documentBytes ?? 0}B`}</p>
      </div>
      <div className="w-16">
        <p className="w-full text-center">{writer}</p>
      </div>
    </button>
  );
};

export default EachLogContent;
