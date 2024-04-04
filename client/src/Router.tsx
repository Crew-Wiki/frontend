import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import WritePage from '@components/WritePage';
import usePostDocument from '@api/post/usePostDocument';
import usePutDocument from '@api/put/usePutDocument';
import { WikiDocument } from '@type/DocumentType';
import EditLogs from '@components/EditLogs';
import Layout from '@components/Layout/Layout';
import URLS from '@constants/urls';
import DocumentWrapper from '@components/DocumentWrapper';
import DocumentPage from '@components/DocumentPage';
import LogContent from '@components/LogContent';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* main */}
        <Route path={URLS.MAIN} element={<Navigate to={URLS.WIKI} />} />
        <Route
          path={URLS.WIKI}
          element={
            <DocumentWrapper>
              <DocumentPage daemoon={URLS.DAEMOON} />
            </DocumentWrapper>
          }
        />
        <Route
          path={`${URLS.WIKI}/${URLS.DOCS}`}
          element={
            <DocumentWrapper>
              <DocumentPage />
            </DocumentWrapper>
          }
        />
        <Route
          path={`${URLS.WIKI}/${URLS.DOCS}/${URLS.LOGS}`}
          element={<EditLogs defaultDocumentData={useLocation().state as WikiDocument} />}
        />
        <Route
          path={`${URLS.WIKI}/${URLS.DOCS}/${URLS.SPECIFIC_LOG}`}
          element={
            <DocumentWrapper>
              <LogContent />
            </DocumentWrapper>
          }
        />
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
