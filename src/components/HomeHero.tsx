import React from "react";
import Link from "next/link";

function HomeHero() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/deerBehindFence.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="font-robotoSlab mb-5 text-5xl font-bold">
            Welcome to Montana Hunters for Access
          </h1>
          <Link href={"#about"} className="btn-primary btn h-fit">
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
