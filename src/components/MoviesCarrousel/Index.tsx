"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import styles from "./style.module.css";
import { tmdb_api } from "@/utils/axios";
import ScrollableContent from "../ScrollableContent/Index";
import { Movie } from "@/models/Movie";
import { GetMoviesByListResponseSchema } from "@/models/common/GetMoviesBySection";

interface Props {
  totalPage: number;
  movies_key: string;
  initialMovies: Movie[];
}

function MoviesCarrousel({
  movies_key,
  initialMovies,
  totalPage,
}: Props): React.JSX.Element {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    tmdb_api
      .get(`movie/${movies_key}`, {
        params: {
          page: currentPage,
        },
      })
      .then((res) => {
        const parseData = GetMoviesByListResponseSchema.parse(res.data);

        return parseData;
      })
      .then((res) => {
        setMovies([...movies, ...res.results]);
      });
  }, [currentPage]);

  const handlerOnReachEnd = (): void => {
    if (currentPage >= totalPage) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  return (
    <ScrollableContent
      className={styles.MoviesCarrouselSection}
      onReachEnd={handlerOnReachEnd}
      horizontal
    >
      {movies.map((movie) => {
        return (
          <div key={`${movies_key}-${movie.id}`}>
            {movie.hasError ? (
              <MovieCard id={movie.id} hasError={movie.hasError} />
            ) : (
              <MovieCard
                id={movie.id}
                hasError={movie.hasError}
                title={movie.title}
                posterUrl={movie.poster_path}
                rating={Math.round(movie.vote_average * 10)}
                releaseDate={movie.release_date}
              />
            )}
          </div>
        );
      })}
    </ScrollableContent>
  );
}

export default MoviesCarrousel;
