import { z } from 'zod'

// User validation schemas
export const UserSchema = z.object({
  id: z.number().positive(),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email format'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.enum(['male', 'female']),
  image: z.string().url('Invalid image URL'),
})

// Login validation schemas
export const LoginCredentialsSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  expiresInMins: z.number().positive().optional(),
})

// Auth response validation
export const AuthResponseSchema = UserSchema.extend({
  accessToken: z.string().min(1, 'Access token is required'),
  refreshToken: z.string().min(1, 'Refresh token is required'),
})

// Type exports for type safety
export type UserType = z.infer<typeof UserSchema>
export type LoginCredentialsType = z.infer<typeof LoginCredentialsSchema>
export type AuthResponseType = z.infer<typeof AuthResponseSchema>
