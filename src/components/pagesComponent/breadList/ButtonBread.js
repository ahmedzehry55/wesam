import Link from "next/link";
import React from "react";
import styles from "./breadList.module.css";
import { useRouter } from "next/router";

export default function ButtonBread({ref, title}) {
  const router = useRouter();
  console.log(router)
  return (
    <a href={router.back}>
      <button onClick={router.back} class={styles.bn54}>
        <span class={styles.bn54span}>{title}</span>
      </button>
    </a>
  );
}
