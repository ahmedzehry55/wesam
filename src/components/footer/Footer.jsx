import React from "react";
import styles from "./footer.module.css";

import { footer } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";

function Footer({ arryName, iconsize, bp, fontSize }) {
  return (
    <div className={styles.container}>
      {arryName.map((item) => (
        <div className={styles.innerDiv} key={`${item.id} + ${item.index}`}>
          <h3
            style={{
              paddingBottom: "5px",
              width: "fit-content",
              borderBottom: "2px solid",
              borderRadius: ".02cm",
            }}
          >
            title, id, links ,index
            {item.title}
          </h3>
          <ul>
            {item.links.map(({ link, icon, id }) => (
              <div
                key={id}
                className={styles.hover}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  padding: "10px 0 0 0",
                  cursor: "pointer",
                  paddingBottom: `${bp}`,
                }}
              >
                {icon ? (
                  <Image
                    src={icon}
                    alt="icon"
                    height={iconsize}
                    width={iconsize}
                  />
                ) : null}

                <li style={{ fontSize: `${fontSize}` }}>{link}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Footer;
