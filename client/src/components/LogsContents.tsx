import React from 'react';
import useGetDocumentLogs from '@api/get/useGetDocumentLogs';
import EachLogContent from './EachLogContent';

interface LogsContentsProps {
  title: string;
}

const LogsContents = ({ title }: LogsContentsProps) => {
  // 아직 api가 미완성된듯...
  const { documentLogs } = useGetDocumentLogs(title);

  return (
    <table className="border-separate border-spacing-y-6">
      <thead>
        <tr className="w-full font-bm text-sm">
          <th scope="col" className="w-10">
            버전
          </th>
          <th>생성일시</th>
          <th scope="col" className="w-28">
            문서 크기
          </th>
          <th scope="col" className="w-16">
            편집자
          </th>
          <th scope="col" className="w-16"></th>
        </tr>
      </thead>
      <tbody>
        {documentLogs.map((docs, index) => (
          <EachLogContent key={index} index={documentLogs.length - index} documentLog={docs} />
        ))}
      </tbody>
    </table>
  );
};

export default LogsContents;
