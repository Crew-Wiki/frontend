import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DocumentPageWrapper from '@components/DocumentPageWrapper';
import WritePage from '@components/WritePage';
import usePostDocument from '@api/post/usePostDocument';
import usePutDocument from '@api/put/usePutDocument';
import { WikiDocument } from '@type/DocumentType';
import EditLogs from '@components/EditLogs';
import Layout from '@components/Layout/Layout';
import URLS from '@constants/urls';
import LogPageWrapper from '@components/LogPageWrapper';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* main */}
        <Route path={URLS.MAIN} element={<Navigate to={URLS.WIKI} />} />
        <Route path={URLS.WIKI} element={<DocumentPageWrapper daemoon={URLS.DAEMOON} />} />
        <Route path={`${URLS.WIKI}/${URLS.DOCS}`} element={<DocumentPageWrapper />} />
        <Route
          path={`${URLS.WIKI}/${URLS.DOCS}/${URLS.LOGS}`}
          element={<EditLogs defaultDocumentData={useLocation().state as WikiDocument} />}
        />
        <Route path={`${URLS.WIKI}/${URLS.DOCS}/${URLS.SPECIFIC_LOG}`} element={<LogPageWrapper />} />
        {/* post */}
        <Route path={URLS.POST} element={<WritePage mode="add" {...usePostDocument()} />} />
        <Route
          path={URLS.EDIT}
          element={
            <WritePage mode="edit" {...usePutDocument()} defaultDocumentData={useLocation().state as WikiDocument} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
