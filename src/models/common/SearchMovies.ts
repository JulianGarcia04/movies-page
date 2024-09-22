import { MovieSchema } from "@/models/Movie";
import { z } from "zod";

export const GetCustomMoviesResponseSchema = z.object({
  page: z.number(),
  total_pages: z.number(),
  results: MovieSchema.array(),
});

export type GetCustomMoviesResponse = z.infer<
  typeof GetCustomMoviesResponseSchema
>;
