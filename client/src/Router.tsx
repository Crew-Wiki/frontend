import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import EditLogs from '@components/logs/EditLogs';
import URLS from '@constants/urls';
import DocumentBoundary from '@components/common/DocumentBoundary';
import DocumentPage from '@components/document/DocumentPage';
import LogContent from '@components/logs/LogContent';
import WritePage from '@components/write/WritePage';
import App from './App';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <App />,
      children: [
        {
          path: URLS.MAIN,
          element: <Navigate to={`${URLS.WIKI}/${URLS.DAEMOON}`} />,
        },
        {
          path: `${URLS.WIKI}/${URLS.DOCS}`,
          element: (
            <DocumentBoundary>
              <DocumentPage />
            </DocumentBoundary>
          ),
        },
        {
          path: `${URLS.WIKI}/${URLS.DOCS}/${URLS.LOGS}`,
          element: <EditLogs />,
        },
        {
          path: `${URLS.WIKI}/${URLS.DOCS}/${URLS.SPECIFIC_LOG}`,
          element: (
            <DocumentBoundary>
              <LogContent />
            </DocumentBoundary>
          ),
        },
        { path: URLS.POST, element: <WritePage mode="add" /> },
        {
          path: URLS.EDIT,
          element: <WritePage mode="edit" />,
        },
        { path: '/*', element: <Navigate to="/" /> },
      ],
    },
  ],
  { basename: '/' },
);

export default router;
