import CCard from "../cCard/CCard";
import { allRoutes, worldHotel } from "@/constants/constants";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Flipcont.module.css";
import FlipCard from "../flipCard/FlipCard";

import { IoIosArrowRoundBack,IoIosArrowRoundForward  } from "react-icons/io";

function FlipContainer() {
  const slideLeft = () => {
    let slider = document.getElementById("flipcon");
    slider.scrollLeft -= 270;
  };

  const slideRight = () => {
    let slider = document.getElementById("flipcon");
    slider.scrollLeft += 270;
  };
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeTitleId, setActiveTitleId] = useState(1);

  const handle = (index, titleId) => {
    setActiveIndex(index);
    setActiveTitleId(titleId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <div style={{ alignSelf: "center" }} className={styles.rightSideLink}>
          <Link
            className={styles.rightSideLink}
            style={{
              fontSize: "1rem",
              paddingBottom: "3rem",
            }}
            href="{()=>activeIndex(1)}"
          >
            عرض الكل
          </Link>
          <div className={styles.provider} />
        </div>

        <div className={styles.routes}>
          {allRoutes.map(({ titleLink, id }) => (
            <div
              key={id}
              className={styles.routesTap}
              onClick={() => handle(id, id)}
            >
              {activeIndex === id && <div className={styles.routesprov} />}
              <h3>{titleLink}</h3>
            </div>
          ))}
        </div>

        <div className={styles.btns}>
          <button
            className={styles.slideRight}
            title="scroll right"
            onClick={slideRight}
          >
            <IoIosArrowRoundForward />
          </button>
          <button
            className={styles.slideLeft}
            title="scroll left"
            onClick={slideLeft}
          >
            <IoIosArrowRoundBack />
          </button>
        </div>
      </div>

      <div className={styles.leftSide}>
        <div className={styles.lsTitle}>
          <h2>اختر وجهتك الان</h2>
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "start",
            display: "grid",
            alignItems: "start",
          }}
        >
          {allRoutes.map(({ id, routs }) => (
            <div key={id}>
              {id === activeTitleId && (
                <>
                  <div className={`${styles.flipcont}`} id="flipcon">
                    {routs.map((item) => (
                      <div key={item.id}>
                        <div  className={styles.flipCard}>
                          <FlipCard compTitle={item.link} img={item.image} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <CCard arryName={routs} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipContainer;
