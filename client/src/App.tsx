import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Router from './Router';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return <Router />;
};

export default App;
