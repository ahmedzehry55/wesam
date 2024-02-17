import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { contentUsNav } from "@/constants/constants";
import logo from "../../../public/images/logo.png";
const Header = () => (
  <div className={`${styles.container} ${styles.secPadding} `}>
    <div className={styles.div2}>
      <ul className={styles.navcont}>
        {contentUsNav.map((nav) => (
          <li key={nav.id} className={styles.navLink}>
            <Image
              className={styles.icon}
              width={20}
              height={20}
              src={nav.image}
              alt={nav.title}
            />
            <Link style={{ color: "white" }} href={`#${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.div1}>
      <Link className="navLink" href="/">
        <Image
          priority
          width={220}
          height={48}
          src={logo}
          alt="wesam elnagah logo"
        />
      </Link>
    </div>
  </div>
);

export default Header;
