import { dynamicText } from "@/constants/constants";
import React, { useState, useEffect } from "react";
import styles from "./dynamicText.module.css";

export default function DynamicText() {
  const dynamicText = ["الرحلات", "الخطوط", "المقاعد", "الاسعار"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.dynamictextContainer}`}  style={{  position: "relative" ,  textAlign:"center"}}>
      {isVisible && (
        <h2 className={`${styles.textContainer} `}>
          {dynamicText[currentIndex]}{" "}
        </h2>
      )}
      {/* <div className={styles.divpor} /> */}
    </div>
  );
}
