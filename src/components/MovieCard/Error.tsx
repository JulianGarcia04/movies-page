import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import styles from "./styles.module.css";

function Error(): React.JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.posterContainer}>
        <MdOutlineErrorOutline fill="#ff0000" size={"50px"} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Unknown error</h2>
      </div>
    </div>
  );
}

export default Error;
