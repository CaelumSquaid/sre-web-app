"use client";

import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

function Carousel({ images }: { images: any[] }) {
  return (
    <ReactCarousel
      showThumbs={false}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      autoPlay={true}
      className="w-full"
    >
      {images.map((image, indx) => (
        <div key={indx}>
          <div>
            <img
              src={image.url}
              className="h-96 w-full object-cover object-center rounded"
              alt="slides"
            />
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
