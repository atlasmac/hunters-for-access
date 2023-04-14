import React from "react";
import HomePageSlide from "./HomePageSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop={true}
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
      <HomePageSlide
        Description="Montana Hunters for Access"
        href={"/states/montana"}
        btnText={"View Chapter"}
        img="/vista.jpg"
      />
      <HomePageSlide
        Description="Kansas Hunters for Access"
        href={"/states/kansas"}
        btnText={"View Chapter"}
        img="/LPC2.jpg"
      />
    </Carousel>
  );
}

export default ImageCarousel;
