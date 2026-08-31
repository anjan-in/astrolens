import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../features/auth/store/auth.store';
import { Spinner } from '../components/ui';
import { ROUTES } from '../constants/routes';

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}