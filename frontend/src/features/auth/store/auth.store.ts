import { create } from 'zustand';
import { getCurrentUser, loginUser } from '../services/auth.api';
import {
  clearTokens,
  getAccessToken,
  setTokens,
} from '../services/token.service';
import type { AuthState, User } from '../types/auth.types';

interface AuthActions {
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) => {
    set({
      user,
      isAuthenticated: Boolean(user),
    });
  },

  initialize: async () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      set({
        isLoading: false,
        user: null,
        isAuthenticated: false,
      });
      return;
    }

    try {
      const user = await getCurrentUser();
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch {
      clearTokens();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  login: async (email, password) => {
    const tokens = await loginUser({ email, password });
    setTokens(tokens.access, tokens.refresh);
    const user = await getCurrentUser();
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  logout: () => {
    clearTokens();
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
}));