import React, { useState, useEffect } from 'react';
import './Css/ImageSliderNavBar.css';
import Image1 from '../assets/Images/Crouselone.png'
import Image2 from '../assets/Images/carouseltow.png'
import Image3 from '../assets/Images/carousel3.png'
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    Image1,
    Image2,
    Image3
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 500); // animation duration in milliseconds
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 500); // animation duration in milliseconds
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
