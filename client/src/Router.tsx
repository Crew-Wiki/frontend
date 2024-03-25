import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import URLS from './constants/urls';
import DocumentPage from './components/DocumentPage';
import DocumentWrite from './components/DocumentWrite';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* main */}
        <Route path={URLS.MAIN} element={<DocumentPage />} />
        <Route path={URLS.POST} element={<DocumentWrite />} />
      </Route>
    </Routes>
  );
};

export default Router;
