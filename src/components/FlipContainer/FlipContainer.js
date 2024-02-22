import { worldHotel } from "@/constants/constants";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Flipcont.module.css";
import FlipCard from "../flipCard/FlipCard";
function FlipContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <div style={{ alignSelf: "center" }}>
          <Link
            className={styles.rightSideLink}
            style={{
              fontSize: "1rem",
              paddingBottom: "3rem",
            }}
            href="/"
          >
            عرض الكل
          </Link>
          <div className={styles.provider} />
        </div>

        <div className={styles.routes}>
      <div className={styles.routesTap} onClick={() => handle(0)}>
        {activeIndex === 0 && <div className={styles.routesprov} />}
        <h3>جميع الوجهات</h3>
      </div>
      <div className={styles.routesTap} onClick={() => handle(1)}>
        {activeIndex === 1 && <div className={styles.routesprov} />}
        <h3>االوجهات الداخلية</h3>
      </div>
      <div className={styles.routesTap} onClick={() => handle(2)}>
        {activeIndex === 2 && <div className={styles.routesprov} />}
        <h3>الوجهات الخارجية</h3>
      </div>
    </div>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.lsTitle}>
          <h2>اختر وجهتك الان</h2>
        </div>
        <div className={styles.flipcont}>
          {worldHotel.map((item) => (
            <div key={item.id} className={styles.flipCard}>
              <FlipCard compTitle={item.title} img={item.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipContainer;
