import api from "@/services/api/axios";

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

export interface AuthTokens {
  access: string;
  refresh: string;
}

export async function registerUser(
  payload: RegisterPayload,
) {
  const response = await api.post(
    "/auth/register/",
    {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      password: payload.password,
      password_confirmation:
        payload.passwordConfirmation,
    },
  );

  return response.data;
}

export async function loginUser(
  payload: LoginPayload,
): Promise<AuthTokens> {
  const response = await api.post(
    "/auth/login/",
    payload,
  );

  return response.data;
}

export async function getCurrentUser() {
  const response = await api.get(
    "/auth/me/",
  );

  return response.data;
}