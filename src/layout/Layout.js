import React from "react";
import Header from "../components/Header/Header";
import styles from "./layout.module.css";
import style from "@/styles/Home.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${style.main} `}>{children}</main>
    </div>
  );
};
