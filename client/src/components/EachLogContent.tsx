import React from 'react';
import { WikiDocumentLog } from '@type/DocumentType';
import timeConverter from '@utils/TimeConverter';
import Button from './Button';

interface EachLogContentProps {
  documentLog: WikiDocumentLog;
  index: number;
}

const EachLogContent = ({ index, documentLog: { generateTime } }: EachLogContentProps) => {
  return (
    <tr className="w-full font-pretendard text-xs">
      <td className="w-10 text-center">{index}</td>
      <td className="text-center">{timeConverter(generateTime, 'YYYY년 M월 D일 (ddd) HH:mm:ss')}</td>
      <td className="w-28 text-center">8192 byte</td>
      <td className="w-16 text-center">토다리</td>
      <td className="w-16 text-center">
        <Button size="xs" style="text" text="조회" type="button" />
      </td>
    </tr>
  );
};

export default EachLogContent;
