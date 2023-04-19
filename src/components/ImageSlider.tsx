import React, { useState, useEffect } from "react";
import Image from "next/image";

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(!currentImage);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      {currentImage ? (
        <Image
          placeholder="blur"
          blurDataURL="/BMAS-cropped.jpg"
          src={"/BMAS-cropped.jpg"}
          alt="Slider of map"
          className="rounded-lg brightness-75"
          priority={true}
          width={1000}
          height={600}
        />
      ) : (
        <Image
          placeholder="blur"
          priority={true}
          blurDataURL="/PublicLands-cropped.jpg"
          src={"/PublicLands-cropped.jpg"}
          alt="Slider of map"
          className="rounded-lg brightness-75"
          width={1000}
          height={600}
        />
      )}
    </div>
  );
}

export default ImageSlider;
