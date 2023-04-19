import React from "react";
import ImageGridOg from "./ImageGridOg";
import geo from "../data/geo.json";
import dynamic from "next/dynamic";
import type { GeoJsonObject } from "geojson";
const geoJson = geo as GeoJsonObject;

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

function About() {
  return (
    <div
      className="hero min-h-screen bg-base-200 text-neutral-content/75"
      id="about"
    >
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="mt-10 font-robotoSlab text-5xl font-bold">About Us</h1>
          <p className="py-6 text-xl">
            Hunters For Access (HFA) is an organization dedicated to promoting
            public access for hunters. Our focus is on supporting state wildlife
            agency hunting access programs that compensate farmers, ranchers,
            and other landowners for permitting public access to their land
            using funds from hunting license sales. However, these programs are
            at risk due to high lease fees for exclusive access from outfitters,
            wealthy hunters, and poor behavior by some hunters. We are committed
            to advocating for the continuation and improvement of these
            programs.
          </p>
          <div className="divider"></div>
          <h2 className="py-6 font-robotoSlab text-4xl">Our Chapters</h2>
          <div>
            <Map data={geoJson} />
          </div>
          <div className="divider"></div>
          <p className="py-6 text-xl">
            HFA is devoted to combating the monopolization of hunting
            opportunity by showing appreciation to land access program enrollees
            and incentivizing them to remain in the program. We do this by
            raising funds for gifts of appreciation, including agricultural
            supplies and equipment and gift certificates to local farm and ranch
            supply stores. Additionally, we organize work crews to perform labor
            on participating farms and ranches, such as fixing fences, erecting
            stackyards, and cleaning up trash.
          </p>
          <div className="divider"></div>
          <p className="py-6 text-xl">
            If you want to help protect high-quality, non-pay publicly
            accessible hunting, please consider supporting HFA through donations
            or volunteering your time and labor. The future of publicly
            accessible hunting land rests with us.
          </p>
          <ImageGridOg></ImageGridOg>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
