"use client";

import React from "react";
import SubmitButton from "../SubmitButton/Index";
import styles from "./styles.module.css";
import { LoginSecondStepResponseSchema } from "@/models/common/Login";
import { getVerifyCookie } from "@/utils/index";
import {
  addFavoriteMovieAction,
  deleteFavoriteMovieAction,
} from "@/actions/FavoriteMovies";
import ErrorBoundary from "../ErrorBoundary";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

interface Props {
  movieID: number;
}

function FavoriteButton({ movieID }: Props): React.JSX.Element | null {
  const cookieData = getVerifyCookie("auth", LoginSecondStepResponseSchema);

  if (!cookieData) {
    return null;
  }

  const handlerAction = async (_: FormData): Promise<void> => {
    if (!cookieData.user.favorite_movies?.includes(movieID)) {
      await addFavoriteMovieAction(movieID);
      return;
    }

    await deleteFavoriteMovieAction(movieID);
  };

  return (
    <ErrorBoundary>
      <form action={(formData) => handlerAction(formData)}>
        <SubmitButton
          className={styles.favoriteButton}
          endIcon={
            cookieData.user.favorite_movies?.includes(movieID) ? (
              <MdOutlineFavorite className={styles.heartIcon} />
            ) : (
              <MdFavoriteBorder />
            )
          }
          onClick={(e) => e.stopPropagation()}
        />
      </form>
    </ErrorBoundary>
  );
}

export default FavoriteButton;
