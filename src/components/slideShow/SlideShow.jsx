import React, { useState, useEffect } from "react";
import cn from "classnames";

const images = [
  "https://landing.engotheme.com/html/lotus/demo/images/slider/img-5.jpg",
  "https://landing.engotheme.com/html/lotus/demo/images/slider/img-4.jpg",
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={cn("w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000", {
            "opacity-100": index === currentImageIndex,
            "opacity-0": index !== currentImageIndex,
          })}
          alt={"Slide " + (index + 1)}
        />
      ))}
    </div>
  );
}

export default Slideshow;