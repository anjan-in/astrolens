import { Sparkles } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <aside className="auth-layout__visual">
        <div className="auth-layout__brand">
          <span className="auth-layout__logo">
            <Sparkles size={18} />
          </span>
          <span>AstroLens</span>
        </div>

        <div className="auth-layout__message">
          <span>UNDERSTAND YOUR PATTERNS</span>
          <h1>A clearer way to understand yourself.</h1>
          <p>
            Explore your patterns through thoughtful assessments, visual insights, and guided learning.
          </p>
        </div>

        <div />
      </aside>

      <main className="auth-layout__content">
        <div className="auth-layout__form">
          <Outlet />
        </div>
      </main>
    </div>
  );
}