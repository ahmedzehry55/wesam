import { ourExpArry } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function OurExp() {
  return (
    <div className="ourExp">
      <div className="ourExp_container">
        <h3 > مدعومون بخبرتنا وابتكاراتنا</h3>
        <span>
          كعلامة تجارية تنتهج الرقمية بشكل أساسي ومدفوعة بأحدث الابتكارات، تقوم
          المسافر بتسخير تقنياتها الحديثة وخبرتها الواسعة في هذا المجال بالإضافة
          إلى شبكة شركاء وموردين كبيرة لتتمكّن من تقديم تجارب لا مثيل لها
        </span>
        <div className="ourExp_container_itemsContainer">
          {ourExpArry.map((item) => (
            <div key={item.id} className="ourExp_container_item">
              <figure>
                <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" fill src={item.img} alt="img" />
              </figure>
              <span style={{width:"80%" ,fontWeight:"lighter"}} >{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
