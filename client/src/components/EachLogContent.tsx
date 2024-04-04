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
    <tr className="w-full font-pretendard text-xs">
      <td className="w-10 text-center">{version}</td>
      <td className="text-center">{timeConverter(generateTime, 'YYYY년 M월 D일 (ddd) HH:mm:ss')}</td>
      <td className="w-28 text-center">{`${documentBytes ?? 0}bytes`}</td>
      <td className="w-16 text-center">{writer}</td>
      <td className="w-16 text-center">
        <Button size="xxs" style="text" text="조회" type="button" onClick={goLogDetail} />
      </td>
    </tr>
  );
};

export default EachLogContent;
