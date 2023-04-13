import React from "react";
import HomePageSlide from "./HomePageSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop={false}
      showThumbs={false}
      showStatus={false}
    >
      <HomePageSlide
        Description="Welcome to Hunters for Access"
        href={"#about"}
        btnText={"Learn More"}
        img="/sky.jpg"
      />

      <HomePageSlide
        Description="See what we've been up to"
        href={"/blog"}
        btnText={"View Blog"}
        img="/hike.jpg"
      />
    </Carousel>
  );
}

export default ImageCarousel;
