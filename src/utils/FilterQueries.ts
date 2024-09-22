import {
  GetCustomMoviesResponseSchema,
  GetCustomMoviesResponse,
} from "@/models/common/SearchMovies";
import { tmdb_api } from "@/utils/axios";

export type FilterQueries = "query" | "genre";

type ActionFn = (
  currentPage: number,
  customParams: Record<string, unknown>,
) => Promise<GetCustomMoviesResponse>;

export const FilterList: Record<FilterQueries, ActionFn> = {
  genre: (currentPage: number, customParams: Record<string, unknown>) => {
    return tmdb_api
      .get("/discover/movie", {
        params: {
          page: currentPage,
          ...customParams,
        },
      })
      .then((res) => {
        const parseResponse = GetCustomMoviesResponseSchema.parse(res.data);

        return parseResponse;
      });
  },
  query: (currentPage: number, customParams: Record<string, unknown>) => {
    return tmdb_api
      .get("/search/movie", {
        params: {
          ...customParams,
          page: currentPage,
        },
      })
      .then((res) => {
        const parseResponse = GetCustomMoviesResponseSchema.parse(res.data);

        return parseResponse;
      });
  },
};
