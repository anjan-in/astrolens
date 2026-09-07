import axios from 'axios';

export interface ApiErrorResponse {
  detail?: string;
  message?: string;
  [key: string]: unknown;
}

export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return 'An unexpected error occurred. Please try again.';
  }

  const data = error.response?.data as ApiErrorResponse | undefined;

  if (typeof data?.detail === 'string') {
    return data.detail;
  }

  if (typeof data?.message === 'string') {
    return data.message;
  }

  // Handle DRF validation error structures (e.g., { email: ["This field must be unique."] })
  if (data && typeof data === 'object') {
    const firstKey = Object.keys(data)[0];
    const firstVal = data[firstKey];
    if (Array.isArray(firstVal) && typeof firstVal[0] === 'string') {
      return firstVal[0];
    }
  }

  return 'Something went wrong. Please check your connection and try again.';
}