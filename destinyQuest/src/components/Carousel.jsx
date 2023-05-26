import React, { useState, useEffect } from "react";
import { carouselData } from "../assets/carouselData";
import "./Carousel.css";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = carouselData[currentImageIndex];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-info">
        <h2>{currentImage.title}</h2>
        <p>{currentImage.text}</p>
        <a href={currentImage.link} target="_blank">
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
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="carousel-arrow-left" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="carousel-arrow-right" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
