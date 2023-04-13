import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
      <div >
        <img src="/sky.jpg" className="h-[90vh] w-auto" />
        <div className="legend"> <p>hello</p></div>
      </div>
      <div>
        <img src="/hike.jpg" className="h-[90vh] w-auto" />
        <div className="legend h-[100px]">
          <p>hello</p>
        </div>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;