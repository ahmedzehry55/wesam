import { useState } from "react";

export default function MyCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="carousel-dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <img className="img_carousels" src={images[currentSlide]} alt={`Image ${currentSlide}`} />
    </div>
  );
}
