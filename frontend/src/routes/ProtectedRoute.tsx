import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function ProtectedRoute() {
  // Architectural placeholder until Zustand auth store is active
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}