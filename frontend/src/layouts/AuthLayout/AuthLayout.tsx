import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mb-6 text-2xl font-bold">Astrolens</div>
      <div className="w-full max-w-md rounded-lg border p-6 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}