import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@components/Layout/Layout';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return <Layout />;
};

export default App;
