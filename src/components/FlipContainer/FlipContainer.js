import CCard from "../cCard/CCard";
import { allRoutes} from "@/constants/constants";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Flipcont.module.css";
import FlipCard from "../flipCard/FlipCard";
import Image from "next/image";

function FlipContainer() {

  const slideLeft = () => {
    let slider = document.getElementById("flip");
    slider.scrollLeft -= 360;
  };

  const slideRight = () => {
    let slider = document.getElementById("flip");
    slider.scrollLeft += 360;
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
        <div
          style={{ alignSelf: "center", marginLeft: "30px" }}
          className={styles.rightSideLink}
        >
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
              <h3 style={{ color: `${activeIndex === id ? "#5197BD" : ""}` }}>
                {titleLink}
              </h3>
            </div>
          ))}
        </div>

        <div className={styles.btns}>
          <button
            className={styles.slideRight}
            title="scroll right"
            onClick={slideRight}
    
          >
            <Image
              src="/icons/prev-arrow.svg"
              alt="arrow-left"
              width={60}
              height={60}
              priority={true}
            />
            <span className={styles.prevputton}>Prev</span>
          </button>
          <button
            className={styles.slideLeft}
            title="scroll left"
            onClick={slideLeft}
          >
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

      <div className={styles.leftSide}>
        <div className={styles.lsTitle}>
          <h2>اختر وجهتك الان</h2>
        </div>
        <div
          className={styles.cardcont}
          style={{
            width: "100%",
            alignItems: "start",
            display: "grid",
            alignItems: "start",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            transition: "all 3s ease",
          }}
          id="flip"
        >
          {allRoutes.map(({ id, routs }) => (
            <div key={id}>
              {id === activeTitleId && (
                <>
                  <div className={`${styles.flipcont}`} id="flipcon">
                    {routs.map((item) => (
                      <div key={item.id}>
                        <div className={styles.flipCard}>
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
