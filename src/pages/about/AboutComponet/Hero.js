import Image from "next/image";
import React from "react";
import img from "../../../../public/images/londn.jpg";
export default function Hero() {
  return (
    <div className="about_hero">
      <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" fill src={img} alt="img" />
    </div>
  );
}
