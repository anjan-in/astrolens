import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema, type LoginFormData } from '../../schemas/login.schema';
import { Input, Button, Alert } from '../../../../components/ui';
import { useAuthStore } from '../../store/auth.store';
import { ROUTES } from '../../../../constants/routes';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setApiError(null);
    try {
      await login(data.email, data.password);
      navigate(ROUTES.DASHBOARD);
    } catch (err: any) {
      const message =
        err.response?.data?.detail || 'Invalid email or password. Please try again.';
      setApiError(message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Welcome back</h1>
        <p>Sign in to continue your AstroLens journey.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        {apiError && <Alert variant="error">{apiError}</Alert>}

        <Input
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register('password')}
        />

        <div className="auth-form__forgot">
          <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
        </div>

        <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
          Sign in
        </Button>
      </form>

      <p className="auth-page__footer">
        Don't have an account? <Link to={ROUTES.REGISTER}>Create one</Link>
      </p>
    </div>
  );
}