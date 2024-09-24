import { z } from "zod";

export const UserRequestSchema = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email(),
  birthdate: z.date().optional(),
  password: z.string(),
});

export type UserRequest = z.infer<typeof UserRequestSchema>;
