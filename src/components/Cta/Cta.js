import Image from "next/image";
import React from "react";
import icon from "../../../public/icons/flytimer.png";
export default function Cta() {
  return (
    <div className="Cta_container">
      <div className="Cta_container_rightSide" >
      <figure>
        <Image src={icon} fill/>
      </figure>
      <div className="Cta_container_text">
        <h2>تأمين مجاني مع كل حجز طيران</h2>
        <span>تأمينك أمان لك ويغطي رحلتك لغاية 10,000 ر.س ويحميها</span>
      </div>
      </div>
      <div className="Cta_container_wesam_1">
        {" "}
        <button className="Cta_container_button">اعرف المزيد</button>
      </div>
    </div>
  );
}
