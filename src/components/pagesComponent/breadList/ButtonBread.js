import React from "react";
import styles from "./breadList.module.css";

export const ButtonBread = ({ ref, title }) => {
  return (
    <button class={styles.bn54}>
      <span class={styles.bn54span}>{title}</span>
    </button>
  );
};
