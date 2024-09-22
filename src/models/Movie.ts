import { z } from "zod";
import { langs } from "./Langs";

export enum MOVIES_SECTIONS {
  upcoming = "Upcoming",
  top_rated = "Top Rated",
  popular = "Popular",
  now_playing = "Now Playing",
}

const appendImage = (path?: string | null): string | undefined => {
  if (!path) {
    return;
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const MovieSchemaError = z.object({
  hasError: z.literal(true).default(true),
  id: z.number(),
});

export type MovieError = z.infer<typeof MovieSchemaError>;

export const MovieSchema = z.union([
  z.object({
    adult: z.boolean().default(true),
    backdrop_path: z.string().nullish().transform(appendImage),
    genre_ids: z.array(z.number()),
    description: z.string().optional(),
    favorite_count: z.number().int().default(0),
    id: z.number(),
    original_language: z.enum(langs),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullish().transform(appendImage),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
    hasError: z.literal(false).default(false),
  }),
  MovieSchemaError,
]);

export type Movie = z.infer<typeof MovieSchema>;
