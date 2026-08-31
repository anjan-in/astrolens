import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProviders } from './app/providers';
import { useAuthStore } from './features/auth/store/auth.store';

export default function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}