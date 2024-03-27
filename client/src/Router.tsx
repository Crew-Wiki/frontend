import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DocumentPageWrapper from '@components/DocumentPageWrapper';
import Layout from './components/Layout/Layout';
import URLS from './constants/urls';
import PostPage from './components/PostPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* main */}
        <Route path={URLS.MAIN} element={<Navigate to={URLS.WIKI} />} />
        <Route path={URLS.WIKI} element={<DocumentPageWrapper daemoon={URLS.DAEMOON} />}>
          <Route path={URLS.DOCS} element={<DocumentPageWrapper />} />
        </Route>
        <Route path={URLS.POST} element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
