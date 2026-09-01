import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from '@/features/auth/services/token.service';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('No refresh token available.');
  }

  const response = await axios.post<{
    access: string;
    refresh?: string;
  }>(`${baseURL}/auth/token/refresh/`, {
    refresh: refreshToken,
  });

  const newAccessToken = response.data.access;
  const newRefreshToken = response.data.refresh ?? refreshToken;

  setTokens(newAccessToken, newRefreshToken);
  return newAccessToken;
}

// Attach access token to outgoing requests
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept 401s and deduplicate concurrent refresh calls
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (
      !originalRequest ||
      error.response?.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url?.includes('/auth/token/refresh/') ||
      originalRequest.url?.includes('/auth/login/')
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = refreshAccessToken().finally(() => {
          isRefreshing = false;
          refreshPromise = null;
        });
      }

      const newAccessToken = await refreshPromise;
      if (originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      }

      return api(originalRequest);
    } catch (refreshError) {
      clearTokens();
      window.location.href = '/login';
      return Promise.reject(refreshError);
    }
  }
);

export default api;