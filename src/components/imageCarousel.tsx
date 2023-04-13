import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
      <div className="max-h-[90vh]">
        <img src="/sky.jpg" />
      </div>
      <div className="max-h-[90vh]">
        <img src="/hike.jpg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-200 h-100 bg-white">
            <p className="text-3xl text-gray-700">Hello</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;