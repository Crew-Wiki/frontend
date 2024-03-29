import React from 'react';
import Button from './Button';

const EachLogContent = () => {
  return (
    <tr className="w-full font-pretendard text-xs">
      <td className="w-10 text-center">7.</td>
      <td className="text-center">2024년 1월 2일 (일) 23:20:36</td>
      <td className="w-28 text-center">8192 byte</td>
      <td className="w-16 text-center">토다리</td>
      <td className="w-16 text-center">
        <Button size="xs" style="text" text="조회" type="button" />
      </td>
    </tr>
  );
};

export default EachLogContent;
