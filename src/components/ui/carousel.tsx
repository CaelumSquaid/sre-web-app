"use client";

import Image from "next/image";
import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import ImageContainer from "../ImageContainer";
import { CldImage } from "next-cloudinary";

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
          <CldImage
            alt="test-image"
            width={600}
            height={600}
            className="h-96 w-full object-cover object-center rounded"
            src={image.public_id}
          />
        </div>
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
