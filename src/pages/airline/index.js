import { airlines, bookingadv } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import rout_ar from "../../../public/icons/rout_ar.png";
import DynamicText from "./airlineComponet/accordion/DynamicText";
export default function Airline() {
  const phoneNumber = "+966545003143";
  const message = "Please help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  const flights = airlines[0].flights;
  const [activeIndexes, setActiveIndexes] = useState(
    flights.map((_, index) => null) // Set the initial active indexes to an array containing all indices
  );
  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <Layout menuDis="none">
      <div className="container airlines_div1 ">
        <video autoPlay loop muted className="background-video">
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
        <h2 style={{ zIndex: "1" }}>حجز تذاكر طيران؟</h2>
        <div className="airlines_div1_span">
          <span style={{ zIndex: "1" }}  >لا تشيل هم تذكرتك بنحصلك أفضل </span>{"  "}
          <DynamicText />
        </div>
        <button style={{ zIndex: "1" }} onClick={handleWhatsAppClick}>
          احجز تذكرتك الان
        </button>
      </div>
      <div className="container airlines_div2">
        <h2>أفضل أسعار تذاكر الطيران مع أشهر خطوط الطيران العالمية</h2>
        <span>
          تعرف على أرخص حجوزات الطيران واختر من بين أكثر من 500 خط طيران بأفضل
          الأسعار
        </span>
        <div className="airlines_div2_mapcontainer">
          {airlines.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="airlines_div2_mapitem"
            >
              <div className="airlines_div2_mapitem_div1">
                <figure>
                  <Image fill src={item.img} alt={item.title} />
                </figure>
                <h3>{item.title}</h3>
                {activeIndexes.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>

              {activeIndexes.includes(index) && (
                <div className="airlines_div2_mapitem_div2">
                  {item.flights.map((flight, index) => (
                    <div
                      key={index}
                      className="airlines_div2_mapitem_div2_mapitem"
                    >
                      <span>{flight.start}</span>
                      <div className="flight_road">
                        <Image fill src={rout_ar} alt="rout_ar" />
                      </div>

                      <span>{flight.end}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" container airlines_div3">
        <h2>مميزات الحجز عن طريق موقع وسام النجاح</h2>
        <div className="airlines_div3_mapcontainer">
          {bookingadv.map((item) => (
            <div className="airlines_div3_mapitem" key={item.id}>
              <figure>
                <Image fill src={item.img} alt={item.title} />
              </figure>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
