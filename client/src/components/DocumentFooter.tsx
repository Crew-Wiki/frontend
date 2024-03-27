import timeConverter from '@utils/TimeConverter';
import React from 'react';

interface DocumentFooterProps {
  generateTime: string;
}

const DocumentFooter = ({ generateTime }: DocumentFooterProps) => {
  const ment = `이 문서는 ${timeConverter(generateTime)} 에 마지막으로 편집되었습니다.`;
  return (
    <footer className="flex w-full h-fit py-6 px-8 bg-white border-primary-100 border-solid border rounded-xl p-8">
      <p className="font-pretendard text-xs font-normal text-grayscale-800">{ment}</p>
    </footer>
  );
};

export default DocumentFooter;
