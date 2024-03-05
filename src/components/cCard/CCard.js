import React from "react";
import styles from "./cCard.module.css";
import Image from "next/image";
export default function CCard({ arryName, compTitle, sliderName }) {
  return (
    <>
      <div className={`trending`}>
        <div className={styles.container}>
          <div className={styles.rowContainer} id={`${sliderName}`}>
            {arryName.map((item) => (
              <div key={item.id} className={styles.rowItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  src={item.image}
                  alt='{item.title}'
                  // alt={item.title}
                  style={{ borderRadius: ".2cm " }}
                />
                <div className={styles.link}>
                  <div
                    style={{
                      position: "relative",
                      position: "absolute",
                      zIndex: "12",
                      top: "3vw",
                      right: "5vw",
                      width:"5vw",
                      height:"5vw"
                    }}
                  >
                    <Image fill src="/images/iconlogo.png"  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" alt="logo icon"/>
                  </div>
                  <div className={styles.itemDescription}>
                    <div className={styles.descText}>
                      <h3>{item.link}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
