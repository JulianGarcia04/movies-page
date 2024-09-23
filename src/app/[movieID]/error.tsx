"use client";

import React from "react";
import styles from "./styles.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";

function error(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.backButtonContainer}>
        <button>
          <IoChevronBackOutline size={"20px"} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.errorIcon}>
          <MdErrorOutline fill="#ff0000" size={"12.5em"} />
        </div>
        <div className={styles.details}>
          <h1 className={styles.titleError}>Unknown Error</h1>
          <p className={styles.metadata}>Oops! Something went wrong.</p>
          <h2 className={styles.overviewTitle}>Error Details:</h2>
          <p className={styles.overview}>Please contact somebody of our team</p>
          <div className={styles.tags}>
            <div>
              <span className={styles.tag}>Error</span>
            </div>
            <div>
              <span className={styles.tag}>Not Found</span>
            </div>
          </div>
          <Link href={"/"} className={styles.returnMainPage}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default error;
