// MovieCard.tsx
import React from "react";
import styles from "./styles.module.css";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Error from "./Error";

interface MovieCardProps {
  title?: string;
  releaseDate?: string;
  rating?: number;
  posterUrl?: string;
  hasError: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
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
    <div className={styles.card}>
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
          <div
            className={styles.ratingCircle}
            style={{ "--rating": `${rating}%` } as React.CSSProperties}
          >
            <span className={styles.ratingText}>{rating}%</span>
          </div>
          <button className={styles.favoriteButton}>
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
