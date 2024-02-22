import React from "react";
import styles from "./layout.module.css";
import style from "@/styles/Home.module.css";
import Headern from "@/components/Header/newHeader/Header";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterContainer from "@/components/footer/FooterContainer";
import HamburgerMenu from "@/components/resMenu/ResMenu";
import FooterRes from "@/components/footer/FooterRes/FooterRes";
export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Headern/>  
      <main className={`${style.main} `}>{children}</main>
      <FooterBar />
      <FooterContainer/>
      <FooterRes/>
    </div>
  );
};
