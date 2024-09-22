import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./style.module.css";

function Header(): React.JSX.Element {
  return (
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
        <button>
          <FaRegUserCircle size="26px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
