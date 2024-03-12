import React, { useState } from 'react';
import styles from './SwiperSlide.module.css';

const SwiperSlide = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.swiperWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={goToPrevSlide}>
        Prev
      </button>
      <button className={styles.nextButton} onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default SwiperSlide;
