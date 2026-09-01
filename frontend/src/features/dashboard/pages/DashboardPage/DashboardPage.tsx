import { useAuthStore } from '@/features/auth/store/auth.store';
import { Badge, Card, Button } from '@/components/ui';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, margin: 0 }}>
            Welcome back, {user?.firstName || 'Explorer'}
          </h1>
          <p style={{ color: 'var(--color-neutral-500)', margin: 'var(--space-1) 0 0 0' }}>
            {user?.email}
          </p>
        </div>
        <Badge variant="success">Authenticated</Badge>
      </div>

      <Card
        title="AstroLens Workspace"
        description="Your personalized self-awareness and dimension map will appear here."
        footer={
          <Button variant="outline" size="sm" onClick={logout}>
            Sign Out
          </Button>
        }
      >
        <p style={{ margin: 0, color: 'var(--color-neutral-700)', lineHeight: 1.6 }}>
          Your session is secured via JWT access and refresh token rotation. As you complete assessments, your patterns, archetypes, and progress logs will dynamically populate this view.
        </p>
      </Card>
    </div>
  );
}