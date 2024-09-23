"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import MovieCard from "../MovieCard";
import { Movie } from "@/models/Movie";
import ScrollableContent from "../ScrollableContent/Index";
import { FilterQueries, FilterList } from "@/utils/FilterQueries";

interface Props {
  customMovies: Movie[];
  filter: {
    key: FilterQueries;
    value: string;
    customParam: Record<string, unknown>;
  };
  totalPage: number;
}

function CustomMoviesSection({
  customMovies,
  filter,
  totalPage,
}: Props): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const [movies, setMovies] = useState(customMovies);

  useEffect((): void => {
    if (currentPage === 1) {
      return;
    }

    const { key, customParam } = filter;

    FilterList[key](currentPage, customParam).then((res) => {
      setMovies([...movies, ...res.results]);
    });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setMovies(customMovies);
  }, [filter.value]);

  const handlerOnReachEnd = (): void => {
    if (currentPage >= totalPage) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  return (
    <ScrollableContent
      className={styles.CustomMoviesContainer}
      onReachEnd={handlerOnReachEnd}
    >
      <div className={styles.MoviesContainer}>
        {movies.length === 0 ? (
          <div className={styles.EmptyMoviesContainer}>
            <span>No se encontraron peliculas</span>
          </div>
        ) : (
          movies.map((movie) => {
            return (
              <div
                style={{ width: "auto", height: "300px", margin: "10px 0px" }}
                key={movie.id}
              >
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
          })
        )}
      </div>
    </ScrollableContent>
  );
}

export default CustomMoviesSection;
