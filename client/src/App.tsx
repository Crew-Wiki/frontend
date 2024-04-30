import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import useRouteChangeTracker from '@hooks/useRouteChangeTracker';

const App = () => {
  const location = useLocation();
  // useRouteChangeTracker();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return <Layout />;
};

export default App;
