import React from "react";
import styles from "./resFooter.module.css";
import pay1 from "../../../../public/images/pay1.png";
import pay2 from "../../../../public/images/pay2.png";
import pay3 from "../../../../public/images/pay3.png";
import pay4 from "../../../../public/images/pay4.png";
import WTA from "../../../../public/images/WTA.png";

import logo from "../../../../public/images/logo.png";
import { footer, footerlegal, footersocial } from "@/constants/constants";
import logoicon from "../../../../public/images/iconlogo.png";
import Image from "next/image";
import style from "../footercontainer.module.css";
const Footer = ({ arraName }) => (
  <div className={styles.resfooterlink}>
    {arraName.map(({ title, id, links }) => (
      <div className={styles.innerDiv} key={id}>
        <h3
          style={{
            minWidth: "fit-content",
            color: "var(--primary5)",
          }}
          className={styles.h3titleres}
        >
          {title} :
        </h3>
        <ul>
          {links.slice(0, 5).map(({ link, image, id }) => (
            <div key={id} className={`${styles.hover} ${styles.linksDiv}`}>
              <li style={{ fontSize: `3vw` }}>{link}</li>
            </div>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
export default function FooterRes() {
  return (
    <div className={styles.resfootercontainer}>
      <div>
        <div className={style.logoIcon}>
          <Image
            src={logoicon}
            fill
            alt="wesam elnagah icon"
            sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
          />
        </div>
      </div>
      <div className={styles.linksdivcontainer}>
        <Footer arraName={footer} />
        <Footer arraName={footerlegal} />
      </div>
      <div>
        {footersocial.map(({ links, id }) => (
          <div className={styles.socialIcon} key={id}>
            {links.map(({ image, height, width, id }) => (
              <div
                key={id}
                className={styles.icon}
                style={{ width: `${width}`, height: `${height}` }}
              >
                <Image
                  fill
                  src={image}
                  alt="icon"
                  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={style.div1}>
        <Image src={WTA} alt="WTA" width={159} height={40} />
      </div>

      <div className={styles.logoDiv}>
        <Image src={logo} alt="wesam el nagah logo" width={200} height={48} />
        <p style={{ fontSize: "11px" }}>
          جميع الحقوق محفوظة © 2024 وسام النجاح
        </p>
      </div>
      <div className={style.pay}>
        <Image src={pay1} alt="pay" width={30} height={10} />
        <Image src={pay2} alt="pay" width={25} height={25} />
        <Image src={pay3} alt="pay" width={25} height={25} />
        <Image src={pay4} alt="pay" width={25} height={25} />
      </div>
      {/* <section className={styless.sec} title=".slideTwo">
      <Brightness/>
      </section> */}
    </div>
  );
}
