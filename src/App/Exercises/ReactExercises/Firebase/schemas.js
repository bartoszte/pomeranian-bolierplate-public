import { object, string, ref } from 'yup';

export const registerSchema = object({
  login: string().email(),
  password: string().min(6),
  confirmPassword: string().oneOf([ref('password')], 'Hasła muszą być zgodne'),
});

export const loginSchema = registerSchema.pick(['login', 'password']);
