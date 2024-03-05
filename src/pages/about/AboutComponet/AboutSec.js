import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/erth.jpg"
import img2 from "../../../../public/images/girl.jpg"
import img3 from "../../../../public/images/humen.jpg"
import img4 from "../../../../public/images/sira.jpg"
export default function AboutSec() {
  return (
    <div className="AboutSec_container">
      <h3>
        {" "}
        تدعم وسام النجاح رؤية المملكة العربية السعودية كشركة وطنية رائدة في مجال
        السياحة
      </h3>
      <div className="AboutSec_container_card_container">
        <div className="AboutSec_container_card_container_item">
          <figure>
            <Image src={img4} fill alt="img" />{" "}
          </figure>
          <span>تعتمد على تسخير خبرات مجموعة سيرا التي تمتد لأكثر من 40 عاماً</span>
        </div>
        <div className="AboutSec_container_card_container_item">
          <figure>
            <Image src={img2} fill alt="img" />{" "}
          </figure>
          <span>مستوى لا مثيل له من الخبرة المحلية</span>
        </div>
        <div className="AboutSec_container_card_container_item">
          <figure>
            <Image src={img3} fill  alt="img"/>{" "}
          </figure>
          <span>شبكة واسعة لخدمات السفر والضيافة</span>
        </div>
        <div className="AboutSec_container_card_container_item">
          <figure>
            <Image src={img1} fill  alt="img"/>{" "}
          </figure>
          <span>مساهم رئيسي في رؤية المملكة العربية السعودية 2030</span>
        </div>
      </div>
    </div>
  );
}
