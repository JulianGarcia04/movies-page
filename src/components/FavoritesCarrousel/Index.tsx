import { getVerifyCookie } from "@/utils";
import React from "react";
import { cookies } from "next/headers";
import { LoginSecondStepResponseSchema } from "@/models/common/Login";
import { tmdb_api } from "@/utils/axios";
import { MovieSchema, Movie } from "@/models/Movie";
import styles from "./styles.module.css";
import ScrollableContent from "../ScrollableContent/Index";
import MovieCard from "../MovieCard/Index";

async function FavoriteCarrousel(): Promise<React.JSX.Element | null> {
  const cookieAuth = getVerifyCookie("auth", LoginSecondStepResponseSchema, {
    cookies,
  });

  if (!cookieAuth) {
    return null;
  }

  const favoritesMoviesID = cookieAuth.user.favorite_movies ?? [];

  let movies: Movie[] = [];

  for (const movieID of favoritesMoviesID) {
    const movie = await tmdb_api.get(`/movie/${movieID}`).then((res) => {
      return MovieSchema.parse(res.data);
    });

    movies = [...movies, movie];
  }

  return (
    <section className={styles.MoviesSection}>
      <h2>Favorites</h2>
      <ScrollableContent className={styles.MoviesCarrouselSection} horizontal>
        {movies.map((movie) => {
          return (
            <div key={`favorites-${movie.id}`}>
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
    </section>
  );
}

export default FavoriteCarrousel;
