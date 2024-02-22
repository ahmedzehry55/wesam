import React from "react";
import styles from "./resFooter.module.css";
import logo from "../../../../public/images/logo.png";
import {
  footer,
  footerlegal,
  footersocia,
  footersocial,
} from "@/constants/constants";
import Image from "next/image";
const Footer = ({ arraName }) => (
  <div className={styles.resfooterlink}>
    {arraName.map(({ title, id, links }) => (
      <div className={styles.innerDiv} key={id}>
        <h3
          style={{
            minWidth: "fit-content",
            color: "var(--primary5)",
          }}
        >
          {title} :
        </h3>
        <ul>
          {links.slice(0, 5).map(({ link, image }) => (
            <div
              className={`${styles.hover} ${styles.linksDiv}`}
              // style={{
              //   display: "flex",
              //   flexDirection: "row",
              //   justifyContent: "flex-start",
              //   alignItems: "center",
              //   padding: "10px 0 0 0",
              //   cursor: "pointer",
              //   paddingBottom: `1vh`,
              // }}
            >
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
      <div className={styles.linksdivcontainer}>
        <Footer arraName={footer} />
        <Footer arraName={footerlegal} />
      </div>
      <div>
        {footersocial.map(({ links }) => (
          <div className={styles.socialIcon}>
            {links.map(({ image, height,width }) => (
              <div
                className={styles.icon}
                style={{ width: `${width}`, height: `${height}` }}
              >
                <Image fill src={image} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.logoDiv}>
        <Image src={logo} width={200} height={48} />
        <p>جميع الحقوق محفوظة © 2024 وسام النجاح</p>
      </div>
    </div>
  );
}
