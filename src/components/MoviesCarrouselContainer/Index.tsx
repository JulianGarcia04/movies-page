import React, { CSSProperties } from "react";
import MoviesCarrousel from "../MoviesCarrousel/Index";
import { GetMoviesByListResponseSchema } from "@/models/common/GetMoviesBySection";
import { tmdb_api } from "@/utils/axios";
import styles from "./style.module.css";
import Error from "./Error";

interface Props {
  title: string;
  movies_key: string;
  style?: CSSProperties;
}

async function MoviesCarrouselContainer({
  title,
  movies_key,
  style,
}: Props): Promise<React.JSX.Element> {
  try {
    const request = await tmdb_api
      .get(`movie/${movies_key}`, {
        params: {
          page: 1,
        },
      })
      .then((res) => {
        const parseData = GetMoviesByListResponseSchema.parse(res.data);

        return parseData;
      });

    const movies = request.results;

    return (
      <section className={styles.MoviesSection} style={style}>
        <h2>{title}</h2>
        <MoviesCarrousel
          movies_key={movies_key}
          initialMovies={movies}
          totalPage={request.total_pages}
        />
      </section>
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return <Error title={title} />;
  }
}

export default MoviesCarrouselContainer;
