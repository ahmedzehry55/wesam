import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { navbar } from "@/constants/constants";
export default function Navbar() {
  return (
    <div className={`${styles.container} ${styles.secPadding} `}>
      <div className={styles.div2}>
        <ul className={styles.navcont}>
          {navbar.map((nav, index) => (
            <>
              <li key={index} className={styles.navLink}>
                <Image
                  className={styles.icon}
                  width={55}
                  height={55}
                  src={nav.image}
                  alt={nav.title}
                />
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "2 solid BLACK",
                  }}
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </Link>
              </li>
              <div className={styles.provider} />
            </>
          ))}
        </ul>
      </div>
      <hr style={{ marginTop: "10px", width: "1296px" }} />
    </div>
  );
}
