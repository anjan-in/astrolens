import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from '../../../../components/ui';
import { ROUTES } from '../../../../constants/routes';
import '../LoginPage/LoginPage.css';

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const [resending, setResending] = useState(false);
  const [resentNotice, setResentNotice] = useState(false);

  const handleResend = async () => {
    setResending(true);
    await new Promise((res) => setTimeout(res, 800));
    setResending(false);
    setResentNotice(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Check your inbox</h1>
        <p>We've dispatched a confirmation link to your registered email address.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {resentNotice && (
          <Alert variant="success">A new verification link has been sent to your email.</Alert>
        )}

        <Button size="lg" fullWidth onClick={() => navigate(ROUTES.DASHBOARD)}>
          Continue to Dashboard
        </Button>

        <Button variant="outline" size="md" fullWidth loading={resending} onClick={handleResend}>
          Resend verification email
        </Button>

        <p className="auth-page__footer">
          Incorrect email? <span style={{ cursor: 'pointer', color: 'var(--color-primary-700)', fontWeight: 600 }} onClick={() => navigate(ROUTES.REGISTER)}>Change email</span>
        </p>
      </div>
    </div>
  );
}