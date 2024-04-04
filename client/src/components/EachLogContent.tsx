import React from 'react';
import { WikiDocumentLogSummary } from '@type/DocumentType';
import timeConverter from '@utils/TimeConverter';
import { useNavigate } from 'react-router-dom';
import URLS from '@constants/urls';
import Button from './Button';

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
    <button className="flex items-center justify-center w-full gap-2 px-2 py-4 border border-secondary-100 rounded-2xl font-pretendard text-md  text-grayscale-800 md:gap-8" onClick={goLogDetail}>
      <div className="w-10">
        <p className='w-full text-center'>
          {version}
        </p>
      </div>
      <div className='grow text-center flex justify-center'>
        <p className='w-[154px] text-center break-words md:w-full'>
          {timeConverter(generateTime, 'YYYY년 M월 D일 (ddd) HH:mm:ss')}
        </p>
      </div>
      <div className="w-16">
        <p className='w-full text-center'>
          {`${documentBytes ?? 0}B`}
        </p>
      </div>
      <div className="w-16">
        <p className='w-full text-center'>
          {writer}
        </p>
      </div>
    </button>

    // <div className="w-full font-pretendard text-xs border border-secondary-secondary border-solid bg-grayscale-50">
    //   <td className="w-10 text-center">{version}</td>
    //   <td className="text-center">{timeConverter(generateTime, 'YYYY년 M월 D일 (ddd) HH:mm:ss')}</td>
    //   <td className="w-28 text-center">{`${documentBytes ?? 0}bytes`}</td>
    //   <td className="w-16 text-center">{writer}</td>
    // <td className="w-16 text-center">
    //   <Button size="xxs" style="text" text="조회" type="button" onClick={goLogDetail} />
    // </td>
    // </div>
  );
};

export default EachLogContent;
