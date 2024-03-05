import React from "react";
import Footer from "./Footer";
import {
  footer,
  footerhelp,
  footerlegal,
  footersocial,
  ourloc,
} from "@/constants/constants";
import styles from "./footercontainer.module.css";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
import pay1 from "../../../public/images/pay1.png";
import pay2 from "../../../public/images/pay2.png";
import pay3 from "../../../public/images/pay3.png";
import pay4 from "../../../public/images/pay4.png";
import logo from "../../../public/images/logo.png";
import WTA from "../../../public/images/WTA.png";
import logoicon from "../../../public/images/iconlogo.png";

import Image from "next/image";

export default function FooterContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.logoIcon}>
          <Image
            src={logoicon}
            fill
            alt="wesam elnagah icon"
            sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
          />
        </div>
        <Footer arryName={footer} bp="5px" fontSize="14px" iconsize="10" />
        <Footer arryName={footersocial} fontSize="14px" iconsize="25" />
        <Footer arryName={footerlegal} fontSize="14px" />
        <Footer arryName={footerhelp} fontSize="14px" />
      </div>
      <section className={styles.sec} title=".slideTwo">
        {/* <!-- .slideTwo --> */}
        <label
          style={{ color: "yellow" }}
          className={styles.labelicon}
          htmlFor="slideTwo"
        >
          <FaSun />
        </label>
        <div className={styles.slideTwo}>
          <input
            className={styles.input}
            type="checkbox"
            value="None"
            id="slideTwo"
            name="check"
          />
          <label className={styles.label} htmlFor="slideTwo"></label>
        </div>
        <label className={styles.labelicon} htmlFor="slideTwo">
          <IoMoonSharp />
        </label>
        <Link href="/" className={styles.link}>
          English
        </Link>
        {/* <!-- end .slideTwo --> */}
      </section>
      <hr
        style={{
          width: "90%",
          marginTop: "50px",
          alignSelf: "center",
          border: "1.5px solid #aea7a782",
          borderRadius: "5px",
        }}
      ></hr>
      <section className={styles.logoSec}>
        <div className={styles.div1}>
          <Image src={WTA} alt="WTA" width={200} height={50} />
        </div>
        <div className={styles.logoDiv}>
          <Image src={logo} alt="wesam elnagah" width={200} height={48} />
          <p>جميع الحقوق محفوظة © 2024 وسام النجاح</p>
        </div>
        <div className={styles.pay}>
          <Image src={pay1} alt="pay" width={60} height={28} />
          <Image src={pay2} alt="pay" width={60} height={60} />
          <Image src={pay3} alt="pay" width={60} height={60} />
          <Image src={pay4} alt="pay" width={40} height={40} />
        </div>
      </section>
    </div>
  );
}
