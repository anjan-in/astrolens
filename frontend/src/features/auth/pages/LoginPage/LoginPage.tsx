import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema, type LoginFormData } from '../../schemas/login.schema';
import { Input, Button, Alert } from '../../../../components/ui';
import { ROUTES } from '../../../../constants/routes';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (_data: LoginFormData) => {
    // Simulated auth delay
    await new Promise((res) => setTimeout(res, 800));
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Welcome back</h1>
        <p>Sign in to continue your AstroLens journey.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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

        <Alert variant="info">
          Authentication API will be connected in the backend phase.
        </Alert>
      </form>

      <p className="auth-page__footer">
        Don't have an account? <Link to={ROUTES.REGISTER}>Create one</Link>
      </p>
    </div>
  );
}