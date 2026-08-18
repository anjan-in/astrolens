import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">Sidebar</aside>
      <div className="flex flex-1 flex-col">
        <header className="border-b p-4">Topbar</header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}