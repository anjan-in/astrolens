import type { AuthState } from '../types/auth.types';

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};