import React, { Children } from "react";
import styles from "./flip.module.css";
import Image from "next/image";
import logoBlack from "../../../public/images/logoBlack1.png";
import logoicon from "../../../public/images/iconlogo.png";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "../button/Button";
export default function FlipCard({ compTitle, img }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            className={styles.front}
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
          >
            <Image
              width={60}
              height={60}
              src={logoicon}
              alt="wesam elnagah logo"
              style={{ margin: "30px" }}
            />

            <h3
              style={{ margin: "0 50px 50px 0 ", color: "white", zIndex: "2" }}
            >
              {compTitle}
            </h3>
          </div>
          <div className={styles.back}>
            <Image
              width={160}
              height={30}
              style={{
                alignSelf: "flex-start",
                margin: "80px 20px 0 0 ",
                justifySelf: "flex-start",
              }}
              src={logoBlack}
              alt="wesam elnagah logo"
            />
            <h3 style={{ alignSelf: "center" }}>{compTitle}</h3>
            <div
              className={styles.button}
              style={{ alignSelf: "flex-end", margin: "0 0 50px 10px" }}
            >
              <Button title={"تفاصيل البرنامج"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
