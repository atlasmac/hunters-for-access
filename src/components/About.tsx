import React from "react";
import ImageGridOg from "./ImageGridOg";
import geoJson from "~/data/geo.json";
import dynamic from "next/dynamic";
import type { GeoJsonObject } from 'geojson';
const geo = geoJson as GeoJsonObject

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
            Montana Hunters for Access (MHA) is an organization dedicated to
            preserving public access for hunters in the state. Our focus is on
            supporting the Block Management Program, a program run by Montana
            Fish, Wildlife, and Parks that compensates farmers, ranchers, and
            other landowners for permitting public access to their land, using
            funds from hunting license sales. However, this program is at risk
            due to poor behavior from some hunters and the high fees that
            outfitters and wealthy hunters are willing to pay for exclusive
            access to land. MHA is committed to advocating for the continuation
            and improvement of this important program.
          </p>
          <div className="divider"></div>
          <h2 className="py-6 text-4xl font-robotoSlab">Our Chapters</h2>
          <div>
            <Map data={geo} />
          </div>
          <div className="divider"></div>
          <p className="py-6 text-xl">
            MHA is devoted to combating the monopolization of hunting
            opportunity by showing appreciation to Block Management enrollees
            and incentivizing them to remain in the program. We do this by
            raising funds for appreciation gifts including agricultural supplies
            and equipment and gift certificates to local farm and ranch supply
            stores. Additionally, we organize work crews to conduct labor on
            participating farms and ranches, such as fixing fence, erecting
            stackyards, and cleaning up trash.
          </p>
          <div className="divider"></div>
          <p className="py-6 text-xl">
            Do you want to help protect high-quality, non-pay publicly
            accessible hunting? If so, please consider supporting MHA through
            donations or volunteering your time and labor. The future of Block
            Management rests with us.
          </p>
          <ImageGridOg></ImageGridOg>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
