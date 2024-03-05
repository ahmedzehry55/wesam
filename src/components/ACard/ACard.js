import React from "react";
import styles from "./ACard.module.css";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
export default function ACard({ arryName, compTitle, sliderName }) {
  const slideLeft = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft - 380;
  };
  const slideRight = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft + 380;
  };

  return (
    <>
      <div className={`trending`}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>{compTitle}</h2>
            <Link href="#">عرض المزيد</Link>
          </div>
          <div className={styles.titleBtns}>
            <div className={styles.btns}>
              <button
                className={styles.slideRight}
                title="scroll right"
                onClick={slideRight}
              >
                <IoIosArrowForward />
              </button>
              <button
                title="scroll left"
                className={styles.slideLeft}
                onClick={slideLeft}
              >
                <IoIosArrowBack />
              </button>
            </div>
          </div>
          <div className={styles.rowContainer} id={`${sliderName}`}>
            {arryName.map((item) => (
              <div key={item.id} className={styles.rowItem}>
                <div className={styles.link}>
                  <div className={styles.itemHeader}>
                    <Image
                      fill={true}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                      src={item.image}
                      alt={item.title}
                      style={{ borderRadius: ".2cm .2cm 0 0" }}
                    />
                  </div>
                  <div className={styles.itemDescription}>
                    <div className={styles.descText}>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div>
                      <Link href="/" style={{ marginLeft: "10px" }}>
                        <IoIosArrowBack />
                      </Link>
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
