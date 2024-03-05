import Image from "next/image";
import React from "react";
import img from "../../../../public/images/londn.jpg";
export default function Hero() {
  return (
    <div className="about_hero">
      <Image fill src={img} alt="img" />
    </div>
  );
}
