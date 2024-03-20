import React from "react";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
export default function ACard({ arryName, compTitle, titleBtns, sliderName ,titleBtnsLink}) {
  const slideLeft = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft - 400;
  };
  const slideRight = () => {
    let slider = document.getElementById(`${sliderName}`);
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="container section_margin">
      <div className="Card_head">
        <h2>{compTitle}</h2>
        <Link href={`/${titleBtnsLink}`}>{titleBtns}</Link>
      </div>

      <div className="btns">
        <button
          title="scroll left"
          className='slideLeft'
          onClick={slideLeft}
        >
          <IoIosArrowBack />
        </button>
        <button
          className='slideRight'
          title="scroll right"
          onClick={slideRight}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className='rowContainer' id={`${sliderName}`}>
        {arryName.map((item) => (
          <div key={item.id} className='rowItem A_rowItem'>
              <div className='itemHeader'>
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  src={item.image}
                  alt={item.title}
                  style={{ borderRadius: ".2cm .2cm 0 0" }}
                />
              </div>
              <div className='A_itemDescription'>
                <div className='descText'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="arrow_card"> 
                  <Link href={`/`} >
                    <IoIosArrowBack />
                  </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
