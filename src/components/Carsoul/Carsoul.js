import Image from "next/image";
import { useState } from "react";

export default function MyCarousel({ images ,dotbottm}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="carousel-dots" style={{bottom:`${dotbottm}`}}>
        {images.map((image, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <Image fill className="img_carousels" src={images[currentSlide]} alt={`Image ${currentSlide}`} style={{objectFit:`cover`}}  />
    </div>
  );
}
