import Image from "next/image";
import React from "react";
import icon from "../../../public/icons/flytimer.svg";
export default function Cta() {
  const phoneNumber = "+966545003143";
  const message = "Please help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  return (
    <div className="Cta_container section_margin">
      <div className="Cta_container_rightSide" >
      <figure>
        <Image src={icon} fill alt="CTa"/>
      </figure>
      <div className="Cta_container_text_button" >
      <div className="Cta_container_text">
        <h2>تأمين مجاني مع كل حجز طيران</h2>
        <span>تأمينك أمان لك ويغطي رحلتك لغاية 10,000 ر.س ويحميها</span>
        
      </div>
      <div className="Cta_container_wesam_1">
        {" "}
        <button className="Cta_container_button" onClick={handleWhatsAppClick}>اعرف المزيد</button>
      </div>
      </div>
      </div>
      
    </div>
  );
}
