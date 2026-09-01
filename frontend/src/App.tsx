import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProviders } from './app/providers';
import AuthInitializer from './features/auth/components/AuthInitializer/AuthInitializer';

export default function App() {
  return (
    <AppProviders>
      <AuthInitializer>
        <RouterProvider router={router} />
      </AuthInitializer>
    </AppProviders>
  );
}