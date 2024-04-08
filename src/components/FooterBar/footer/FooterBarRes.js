import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./FooterBarRes.module.css";
import { footbar } from "@/constants/constants";
import Link from "next/link";
export default function FooterBarRes() {
  return (
    <div className={styles.a}>
      <div className={`${styles.b} ${styles.text1}`}>
        <h2>بحاجة الى مساعدتنا ؟</h2>
      </div>
      <div>
        <ul>
          {footbar.map((nav, index) => (
            <div key={index}>
              <li key={nav.id} className={styles.footerLi}>
                <>
                  <div className={styles.icon}>
                    {nav.icon}
                  </div>
                  <div className={styles.textwithicon}>
                    <div className={styles.text}>
                      <h5 className={styles.text2}>{nav.titleRes}</h5>
                      <Link className={`${styles.text3}`} href={`#${nav.id}`}>
                        {nav.desc}
                      </Link>
                    </div>
                    <IoIosArrowBack style={{ color: "var( --primary2)" , fontSize:"24PX" }} />
                  </div>
                </>
              </li>
              {/* <div className={styles.provider} /> */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
