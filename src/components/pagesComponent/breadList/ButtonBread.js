import Link from "next/link";
import React from "react";
import styles from "./breadList.module.css";

export default function ButtonBread({ref, title}) {
  return (
    <a href='/'>
      <button class={styles.bn54}>
        <span class={styles.bn54span}>{title}</span>
      </button>
    </a>
  );
}
