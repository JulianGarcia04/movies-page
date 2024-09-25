import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import AuthButton from "../AuthButton/Index";

function Header(): React.JSX.Element {
  return (
    <>
      <header className={styles.HeaderContainer}>
        <div className={styles.HeaderOptionsSection}>
          <Image
            src="/logo.png"
            alt="quickbet-logo"
            width={70}
            height={40}
            style={{ objectFit: "contain", width: "100%" }}
          />

          <ul>
            <li style={{ width: "100%" }}>
              <Link href="/popular">Popular</Link>
            </li>
            <li>
              <Link href="/favorites">Favoritos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.HeaderUserSection}>
          <AuthButton />
        </div>
      </header>
    </>
  );
}

export default Header;
