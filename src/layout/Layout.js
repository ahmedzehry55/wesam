import React from "react";
import styles from "./layout.module.css";
import style from "@/styles/Home.module.css";
import Header from "@/components/Header/newHeader/Header";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterContainer from "@/components/footer/FooterContainer";
import FooterRes from "@/components/footer/FooterRes/FooterRes";
import ProgressComp from "@/components/progressBar/Progressbar";

export const Layout = ({ children, headerPos,headerbg,menuDis,bgcolor,btnTitlea, headerheight,
  btnRefa}) => {
  return (
    <div className={styles.container}>
      <ProgressComp/>
      <Header navbarmenu={menuDis} headerbg={headerbg} headerPos={headerPos}  btnTitle={btnTitlea} btnRef={btnRefa} headerheight={headerheight} /> 
      <main className={`${style.main} `} style={{background:`${bgcolor}`}}>{children}</main>
      <FooterBar />
      <FooterContainer/>
      <FooterRes/>
    </div>
  );
};
