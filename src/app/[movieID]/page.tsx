import React from "react";
import styles from "./styles.module.css";
import { tmdb_api } from "@/utils/axios";
import { BaseMovieSchema } from "@/models/Movie";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import UserScoreChart from "@/components/UserScoreChart/Index";
import { IoChevronBackOutline } from "react-icons/io5";
import MoviesCarrouselContainer from "@/components/MoviesCarrouselContainer/Index";
import ScrollableContent from "@/components/ScrollableContent/Index";
import { GetKeywordsResponseSchema } from "@/models/common/GetKeywords";
import Link from "next/link";

interface Props {
  params: {
    movieID: string;
  };
}

export default async function Home({
  params,
}: Props): Promise<React.JSX.Element> {
  const movie = await tmdb_api.get(`/movie/${params.movieID}`).then((res) => {
    return BaseMovieSchema.parse(res.data);
  });

  const keyswords = await tmdb_api
    .get(`movie/${params.movieID}/keywords`)
    .then((res) => {
      return GetKeywordsResponseSchema.parse(res.data);
    });

  return (
    <ScrollableContent className={styles.container}>
      <div className={styles.content}>
        <div
          style={{
            backgroundImage: `url('${movie.backdrop_path}')`,
          }}
          className={styles.contentBackgroundImage}
        ></div>
        <div className={styles.backButtonContainer}>
          <Link href={"/"}>
            <IoChevronBackOutline size={"20px"} />
          </Link>
        </div>
        <div className={styles.movieContent}>
          <div className={styles.posterContainer}>
            <Image
              src={movie.poster_path ?? "/movie-placeholder.png"}
              alt={movie.title}
              width={200}
              height={400}
              className={styles.poster}
              placeholder="blur"
              blurDataURL="/movie-placeholder.png"
            />
            <button className={styles.actionButton}>Official Trailer ▶</button>
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.metadata}>{movie.release_date}</p>
            <div className={styles.overviewContainer}>
              <h2 className={styles.overviewTitle}>Overview:</h2>
              <p className={styles.overview}>{movie.overview}</p>
            </div>
            <div className={styles.optionsContainer}>
              <div className={styles.scoreContainer}>
                <UserScoreChart score={Math.round(movie.vote_average * 10)} />
                <span className={styles.scoreLabel}>Users Score</span>
              </div>
              <button className={styles.favoriteButton}>
                <FaHeart size={"30px"} />
              </button>
            </div>
            <div className={styles.tags}>
              {keyswords.keywords.map((tag) => (
                <span key={tag.id} className={styles.tag}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "50%", margin: "20px 0px" }}>
        <MoviesCarrouselContainer
          title="Recommendations"
          movies_key={`${params.movieID}/recommendations`}
          style={{ height: "100%" }}
        />
      </div>
    </ScrollableContent>
  );
}
