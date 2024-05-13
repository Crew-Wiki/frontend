import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PersistGate from './PersistGate';
import './index.css';
import router from './Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 10, // 10 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 0,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.sessionStorage,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <PersistGate fallback={null}>
        <RouterProvider router={router} />
      </PersistGate>
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  </React.StrictMode>,
);
