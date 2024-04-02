import React from 'react';
import useGetSpecificDocumentLog from '@api/get/useGetSpecificDocumentLog';
import { useParams } from 'react-router-dom';

const LogContent = () => {
  const { logId } = useParams();

  console.log(logId);

  const { document } = useGetSpecificDocumentLog(Number(logId));
  console.log(document);

  return <></>;
};

export default LogContent;
