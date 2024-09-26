import { z } from "zod";
import { UserSchema } from "../User";

export const LoginFirstStepRequestSchema = z.object({
  email: z.string().email(),
  with2FA: z.coerce.boolean(),
  password: z.string(),
});

export const LoginFirstStepResponseSchema = z.object({
  authStatus: z.object({
    valid: z.boolean(),
    status: z.string().optional(),
  }),
  token: z.string(),
});

export type LoginFirstStepResponse = z.infer<
  typeof LoginFirstStepResponseSchema
>;

export const LoginSecondStepRequestSchema = z.object({
  token: z.string(),
  code: z.string(),
});

export const LoginSecondStepResponseSchema = z.object({
  authToken: z.string(),
  user: UserSchema,
});
