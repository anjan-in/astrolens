import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { resetPasswordSchema, type ResetPasswordFormData } from '../../schemas/reset-password.schema';
import { Input, Button, Alert } from '../../../../components/ui';
import { ROUTES } from '../../../../constants/routes';
import '../LoginPage/LoginPage.css';

export default function ResetPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (_data: ResetPasswordFormData) => {
    await new Promise((res) => setTimeout(res, 800));
    setIsSuccess(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Set new password</h1>
        <p>Choose a secure password with letters and numbers.</p>
      </div>

      {isSuccess ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Alert variant="success" title="Password updated">
            Your password has been changed successfully.
          </Alert>
          <Button size="lg" fullWidth onClick={() => (window.location.href = ROUTES.LOGIN)}>
            Continue to sign in
          </Button>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="new-password"
            label="New password"
            type="password"
            placeholder="Enter new password"
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            id="confirm-new-password"
            label="Confirm new password"
            type="password"
            placeholder="Confirm new password"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />

          <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
            Update password
          </Button>

          <p className="auth-page__footer">
            <Link to={ROUTES.LOGIN}>← Back to sign in</Link>
          </p>
        </form>
      )}
    </div>
  );
}