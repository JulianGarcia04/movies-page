import { z } from "zod";

export const GetMoviesGenresByListResponseSchema = z.object({
  genres: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .array(),
});

export type GetMoviesGenresByListResponse = z.infer<
  typeof GetMoviesGenresByListResponseSchema
>;
