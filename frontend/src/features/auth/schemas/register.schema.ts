import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(2, 'First name must contain at least 2 characters.'),
    lastName: z.string().trim().min(2, 'Last name must contain at least 2 characters.'),
    email: z.string().trim().email('Please enter a valid email address.'),
    password: z
      .string()
      .min(8, 'Password must contain at least 8 characters.')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least one letter and one number.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });

export type RegisterFormData = z.infer<typeof registerSchema>;