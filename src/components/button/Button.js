import React from "react";
import styles from "./Button.module.css";
import { MdOutlineArrowBack } from "react-icons/md";
import Link from "next/link";

export default function Button({ title, itemId }) {
  return (
    <div>
      <Link href={`/${itemId}`} className={styles.button}>
        <p className={styles.pABtn} style={{ zIndex: "10" }}>
          {title}
        </p>
        <div style={{ zIndex: "10" }} className={styles.aBtnicon}>
          <MdOutlineArrowBack className={styles.abt} />
        </div>
      </Link>
    </div>
  );
}
