import React from "react";
import styles from "./FooterBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { footbar } from "@/constants/constants";
import FooterBarRes from "./footer/FooterBarRes";
export default function FooterBar() {
  return (
    <div className={styles.container}>
      <div className={styles.div2}>
        <div className={styles.textcontainer}>
          <h3>تحتاج مساعدة؟</h3>
          <h4>فريقنا متواجد لخدمتكم على مدار الساعة 24/7</h4>
        </div>
        <ul className={styles.navcont}>
          {footbar.slice(0,3).map((nav) => (
            <>
              
              <li key={nav.id} className={styles.navLink}>
                <Image
                  className={styles.icon}
                  width={41}
                  height={41}
                  src={nav.image}
                  alt={nav.title}
                  style={{ marginLeft: "10px" }}
                />
                <div className={styles.textz}>
                  <h4>{nav.title}</h4>
                  <Link
                    style={{
                      color: "black",
                      fontSize: "21px",
                      fontWeight: 'bolder'
                    }}
                    href={`#${nav.id}`}
                  >
                    {nav.desc}
                  </Link>
                </div>
              </li>
              {/* <div className={styles.provider} /> */}
            </>
          ))}
        </ul>
        <div className={styles.loc}>
          <h4>تفضل بزيارتنا الآن:</h4>
          <div className={styles.but}>
            <Link href="/">ابحث عن فرع</Link>
          </div>
        </div>
        
      </div>
      <FooterBarRes/>
    </div>
  );
}
