import React from "react";
import { MOVIES_SECTIONS } from "@/models/Movie";
import styles from "./styles.module.css";
import MoviesCarrouselContainer from "../MoviesCarrouselContainer/Index";

function DefaultMoviesSection(): React.JSX.Element {
  return (
    <div className={styles.MoviesContainer}>
      {Object.entries(MOVIES_SECTIONS).map(([key, title]) => {
        return (
          <MoviesCarrouselContainer title={title} movies_key={key} key={key} />
        );
      })}
    </div>
  );
}

export default DefaultMoviesSection;
