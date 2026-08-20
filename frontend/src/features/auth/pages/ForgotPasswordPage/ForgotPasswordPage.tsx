import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '../../schemas/reset-password.schema';
import { Input, Button, Alert } from '../../../../components/ui';
import { ROUTES } from '../../../../constants/routes';
import '../LoginPage/LoginPage.css';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (_data: ForgotPasswordFormData) => {
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Forgot your password?</h1>
        <p>Enter your email address and we'll send you a recovery link.</p>
      </div>

      {submitted ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Alert variant="success" title="Check your inbox">
            If an account exists with that email, we've sent password reset instructions.
          </Alert>
          <p className="auth-page__footer">
            <Link to={ROUTES.LOGIN}>← Back to sign in</Link>
          </p>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="forgot-email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
            Send reset link
          </Button>

          <p className="auth-page__footer">
            <Link to={ROUTES.LOGIN}>← Back to sign in</Link>
          </p>
        </form>
      )}
    </div>
  );
}