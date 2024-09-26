// MovieCard.tsx
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Error from "./Error";
import UserScoreChart from "../UserScoreChart/Index";
import FavoriteButton from "../FavoriteButton/Index";
import Link from "next/link";

interface MovieCardProps {
  id: number;
  title?: string;
  releaseDate?: string;
  rating?: number;
  posterUrl?: string;
  hasError: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  releaseDate,
  rating,
  posterUrl,
  hasError,
}) => {
  if (hasError) {
    return <Error />;
  }

  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.posterContainer}>
        <Image
          src={posterUrl ?? "/movie-placeholder.png"}
          alt={`${title} poster`}
          fill
          className={styles.poster}
          placeholder="blur"
          blurDataURL="/movie-placeholder.png"
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.releaseDate}>{releaseDate}</p>
        <div className={styles.ratingContainer}>
          {rating ? (
            <UserScoreChart
              score={rating}
              responsive
              style={{ width: "20%" }}
            />
          ) : null}

          <FavoriteButton movieID={id} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
