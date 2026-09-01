import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Spinner } from '@/components/ui';
import { useAuthStore } from '@/features/auth/store/auth.store';

export default function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
}