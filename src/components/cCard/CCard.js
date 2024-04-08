import React, { useRef } from "react";
import Image from "next/image";
import styles from "../FlipContainer/Flipcont.module.css";

export default function CCard({ arryName, compTitle, sliderName }) {
  const containerRef = useRef(null);
  const slideRight = () => {
    containerRef.current.scrollLeft += 350; // Adjust the scroll distance as needed
  };

  const slideLeft = () => {
    containerRef.current.scrollLeft -= 350; // Adjust the scroll distance as needed
  };
  return (
    <div className="container C_container ">
      <div className="rowContainer cCardDis"  id="flip" ref={containerRef}>
        {arryName.map((item) => (
          <div
            key={item.id}
            className="B_rowItem  rowItem"
            style={{ height: "350px" }}
          >
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              src={item.image}
              alt="{item.title}"
              // alt={item.title}
              style={{ borderRadius: ".2cm " }}
            />
            <div className="c_link">
              <div
                style={{
                  position: "relative",
                  position: "absolute",
                  zIndex: "12",
                  top: "3vw",
                  right: "5vw",
                  width: "5vw",
                  height: "5vw",
                }}
              >
                <Image
                  fill
                  src="/images/iconlogo.png"
                  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  alt="logo icon"
                />
              </div>
              <div className="blackdiv" />

              <div style={{ zIndex: "2" }} className="B_itemDescription">
                <div className="descText">
                  <h3>{item.link}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className={`${styles.btns} ${styles.btnsres}`}>
          <button className={styles.slideRight} onClick={slideRight}>
            <Image
              src="/icons/prev-arrow.svg"
              alt="arrow-left"
              width={60}
              height={60}
              priority={true}
            />
            <span className={styles.prevputton}>Prev</span>
          </button>
          <button className={styles.slideLeft} onClick={slideLeft}>
            <Image
              src="/icons/next-arrow.svg"
              alt="arrow-right"
              width={60}
              height={60}
              priority={true}
            />
             <span className={styles.nextputton}>Next</span>
          </button>
        </div>
    </div>
  );
}
