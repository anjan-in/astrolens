import api from '../../../services/api/axios';
import type { AuthTokens, User } from '../types/auth.types';

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

interface BackendUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  email_verified: boolean;
  created_at: string;
}

function mapUser(user: BackendUser): User {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    emailVerified: user.email_verified,
    createdAt: user.created_at,
  };
}

export async function registerUser(payload: RegisterPayload) {
  const response = await api.post('/auth/register/', {
    first_name: payload.firstName,
    last_name: payload.lastName,
    email: payload.email,
    password: payload.password,
    password_confirmation: payload.passwordConfirmation,
  });
  return response.data;
}

export async function loginUser(payload: LoginPayload): Promise<AuthTokens> {
  const response = await api.post<AuthTokens>('/auth/login/', payload);
  return response.data;
}

export async function getCurrentUser(): Promise<User> {
  const response = await api.get<BackendUser>('/auth/me/');
  return mapUser(response.data);
}