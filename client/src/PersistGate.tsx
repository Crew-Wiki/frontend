import React from 'react';
import { useIsRestoring } from '@tanstack/react-query';

interface PersistGateProps {
  children: React.JSX.Element;
  fallback: null;
}

function PersistGate({ children, fallback = null }: PersistGateProps) {
  const isRestoring = useIsRestoring();

  return isRestoring ? fallback : children;
}

export default PersistGate;
