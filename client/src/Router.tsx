import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import URLS from './constants/urls';
import DocumentPage from './components/DocumentPage';
import PostPage from './components/PostPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* main */}
        <Route path={URLS.MAIN} element={<DocumentPage />} />
        <Route path={URLS.POST} element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
