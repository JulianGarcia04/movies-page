"use client";

import React from "react";
import styles from "./style.module.css";
import { MdOutlineErrorOutline } from "react-icons/md";

interface Props {
  title: string;
}

function Error({ title }: Props): React.JSX.Element {
  return (
    <section className={styles.MoviesSection}>
      <h2>{title}</h2>
      <div className={styles.MoviesCarrouselSectionError}>
        <MdOutlineErrorOutline fill="#ff0000" size={"50px"} />
        <h3 style={{ color: "red" }}>Error</h3>
      </div>
    </section>
  );
}

export default Error;
