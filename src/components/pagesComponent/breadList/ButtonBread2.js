import React from "react";
import styles from "./buttonB.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ButtonBread2 = ({ ref, title }) => {
  return (
    <button class={styles.bn55}>
      <span style={{ fontSize: "30px", height: "30px" }}>
        {" "}
        <IoIosArrowRoundForward />
      </span>
      <span class={styles.bn55span}> {title} </span>
    </button>
  );
};
