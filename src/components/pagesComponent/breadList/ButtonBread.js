import Link from "next/link";
import React from "react";
import styles from "./breadList.module.css";
import { useRouter } from "next/router";

export const ButtonBread=({ref, title})=> {
  const router = useRouter();

  return (
 
      <button  class={styles.bn54}>
        <span class={styles.bn54span}>{title}</span>
      </button>
 
  );
}

