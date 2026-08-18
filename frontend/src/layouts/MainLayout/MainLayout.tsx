import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b p-4">Navbar</header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="border-t p-4">Footer</footer>
    </div>
  );
}