import React, { useState } from "react";
import styles from "./packageCard.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import PopupGfg from "../Imagepop/ImgPop";
import CustomPopup from "../Imagepop/Imgpopcontainer";

export default function PackageCard({
  arryName,
  compTitle,
  sliderName,
  widthCard,
  hCard,
}) {
  const [Itemopen, setItemOpen] = useState(false);
  const close = () => {
    setItemOpen(!Itemopen);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const slideLeft = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft - 270;
  };

  const slideRight = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft + 270;
  };
  const myArray = arryName[0].nav;
  return (
    <>
      <div className={`trending`}>
        <div className={styles.container}>
          <div className="btns">
            <button
              className="slideLeft"
              title="scroll left"
              onClick={slideLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="slideRight"
              title="scroll right"
              onClick={slideRight}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div className={styles.head}>
            <h2>{compTitle}</h2>
          </div>
          <div className={styles.titleBtns}>
            <h3></h3>
          </div>
          <CustomPopup arryName={arryName} sliderName={sliderName} widthCard={widthCard} hCard={hCard}/>
        </div>
      </div>
    </>
  );
}
