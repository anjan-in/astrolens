import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema, type RegisterFormData } from '../../schemas/register.schema';
import { registerUser } from '../../services/auth.api';
import { Input, Button, Checkbox, Alert } from '../../../../components/ui';
import { ROUTES } from '../../../../constants/routes';
import '../LoginPage/LoginPage.css';
import './RegisterPage.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setApiError(null);
    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.confirmPassword,
      });
      navigate(ROUTES.LOGIN);
    } catch (err: any) {
      const emailErr = err.response?.data?.email?.[0];
      const generalErr = err.response?.data?.detail || 'Failed to create account.';
      setApiError(emailErr || generalErr);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page__heading">
        <h1>Create your account</h1>
        <p>Begin mapping and discovering your behavioral patterns.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        {apiError && <Alert variant="error">{apiError}</Alert>}

        <div className="register-form__name">
          <Input
            id="firstName"
            label="First name"
            placeholder="Jane"
            error={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            id="lastName"
            label="Last name"
            placeholder="Doe"
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>

        <Input
          id="register-email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          id="register-password"
          label="Password"
          type="password"
          placeholder="Create a password"
          autoComplete="new-password"
          // helperText="At least 8 characters, including a letter and a number."
          error={errors.password?.message}
          {...register('password')}
        />

        <Input
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Checkbox
          id="terms"
          label="I agree to the AstroLens terms and privacy policy."
          required
        />

        <Button type="submit" size="lg" fullWidth loading={isSubmitting}>
          Create account
        </Button>
      </form>

      <p className="auth-page__footer">
        Already have an account? <Link to={ROUTES.LOGIN}>Sign in</Link>
      </p>
    </div>
  );
}