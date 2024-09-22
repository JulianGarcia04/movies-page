import { MovieSchema } from "@/models/Movie";
import { z } from "zod";

export const GetMoviesByListResponseSchema = z.object({
  dates: z
    .object({
      maximum: z.string().date(),
      minimum: z.string().date(),
    })
    .optional(),
  page: z.number(),
  results: MovieSchema.array(),
  total_pages: z.number(),
  total_results: z.number(),
});
