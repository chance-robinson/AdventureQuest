import React, { useState, useEffect, useRef } from "react";
import { carouselData } from "../assets/carouselData";
import "./Carousel.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = carouselData[currentImageIndex];
  const intervalRef = useRef(null);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNextImage, 6000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goToNextImage, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-info">
        <h2>{currentImage.title}</h2>
        <p>{currentImage.text}</p>
        <a href={currentImage.link} target="_blank" className="button">
          Read More
        </a>
      </div>
      <div className="carousel-image-container">
        <img
          src={currentImage.image}
          alt={`Image ${currentImageIndex}`}
          className="carousel-image"
        />
      </div>
      <div className="carousel-indicators">
        {carouselData.map((item, index) => (
          <span
            key={index}
            className={`carousel-indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => {
              setCurrentImageIndex(index);
              resetInterval();
            }}
          />
        ))}
      </div>
      <div className="carousel-navigation">
        <div className="carousel-arrow" onClick={goToPreviousImage}>
          <MdChevronLeft />
        </div>
        <div className="carousel-arrow" onClick={goToNextImage}>
          <MdChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
