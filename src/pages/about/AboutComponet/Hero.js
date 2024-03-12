import Image from "next/image";
import React from "react";

export default function Hero({imag}) {
  return (
    <div className="about_hero">
      <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" fill src={imag} alt="img"
                      style={{objectFit:"cover"}} />
    </div>
  );
}
