import React from "react";
import HomePageBtn from "./HomePageBtn";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={false} showThumbs={false} >
      <div className="max-h-[90vh]">
        <img src="/hike.jpg" />
        <HomePageBtn Description="Welcome to Hunters for Access" href="#about" />
      </div>
      <div className="max-h-[90vh]">
        <img src="/sky.jpg" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;