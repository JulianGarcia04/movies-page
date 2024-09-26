import { z } from "zod";

export const UserRequestSchema = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email(),
  birthdate: z.date().optional(),
  password: z.string(),
});

export type UserRequest = z.infer<typeof UserRequestSchema>;

export const UserSchema = UserRequestSchema.merge(
  z.object({
    id: z.string(),
    favorite_movies: z.array(z.number()).optional(),
  }),
);
