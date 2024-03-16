import React from "react";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function BCard({
  arryName,
  compTitle,
  compspan,
  titleBtns,
  sliderName,
  widthCard,
  hCard,
  titleBtnsheader,
  titleBtnsLink,
}) {
  const slideLeft = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft - 303;
  };

  const slideRight = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft + 303;
  };
  const myArray = arryName[0].nav;
  return (
    <div className="container">
      <div className="Card_head">
        <div className="Card_head_text" >
          <h2>{compTitle}</h2>
          <span>{compspan}</span>
        </div>
        <Link href={`/${titleBtnsLink}`}>{titleBtnsheader}</Link>
      </div>

      <div className="btns">
        <button className="slideLeft" title="scroll left" onClick={slideLeft}>
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

      <div className="rowContainer" id={`${sliderName}`}>
        {myArray.map((item) => (
          <div
            key={item.id}
            className="B_rowItem rowItem"
            style={{ width: `${widthCard}`, height: `${hCard}` }}
          >
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              src={item.image}
              alt="item"
              // alt={item.title}
              style={{ borderRadius: ".2cm " }}
            />
            <div className="B_itemDescription">
              <div className="descText" >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
