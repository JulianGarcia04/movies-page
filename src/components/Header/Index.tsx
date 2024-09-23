"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./style.module.css";
import AuthDialog from "../AuthDialog/Index";

function Header(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className={styles.HeaderContainer}>
        <div className={styles.HeaderOptionsSection}>
          <Image
            src="/logo.png"
            alt="quickbet-logo"
            width={70}
            height={40}
            style={{ objectFit: "contain" }}
          />

          <ul>
            <li>
              <Link href="/popular">Popular</Link>
            </li>
            <li>
              <Link href="/favorites">Favoritos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.HeaderUserSection}>
          <button onClick={() => setOpen(true)}>
            <FaRegUserCircle size="26px" />
          </button>
          <AuthDialog open={open} handlerOpen={setOpen}></AuthDialog>
        </div>
      </header>
    </>
  );
}

export default Header;
