import React from "react";
import styles from "./layout.module.css";
import style from "@/styles/Home.module.css";
import Headern from "@/components/Header/newHeader/Header";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterContainer from "@/components/footer/FooterContainer";
import HamburgerMenu from "@/components/resMenu/ResMenu";
import FooterRes from "@/components/footer/FooterRes/FooterRes";
import ProgressComp from "@/components/progressBar/Progressbar";

export const Layout = ({ children, menuDis,bgcolor  , btnTitlea,
  btnRefa}) => {
  return (
    <div className={styles.container}>
      <ProgressComp/>
      <HamburgerMenu />
      <Headern navbarmenu={menuDis}  btnTitle={btnTitlea} btnRef={btnRefa} /> 
      
      <main className={`${style.main} `} style={{background:`${bgcolor}`}}>{children}</main>
      <FooterBar />
      <FooterContainer/>
      <FooterRes/>
    </div>
  );
};
