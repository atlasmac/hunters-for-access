import React from "react";
import Link from "next/link";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="m-4 flex w-full flex-row gap-x-4 text-slate-300">
      <div className="relative w-full">
        <div className="brightness-50 hover:brightness-100">
          <Image
            className="max-h-64 w-full rounded-sm"
            src="/vista.jpg"
            alt="Image 1"
            width={200}
            height={300}
          />
        </div>

        <Link href={"/calendar"}>
          <div className="bg-black-50 absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-3xl">
            <h3 className="">Upcoming Events</h3>
          </div>
        </Link>
      </div>

      <div className="relative w-full">
        <div className="brightness-50">
          <Image
            className="max-h-64 w-full rounded-sm"
            src="/deer.jpg"
            alt="Image 2"
            width={200}
            height={300}
          />
        </div>

        <Link href={"/support"}>
          <div className="bg-black-50 absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-3xl">
            <h3 className="">Donate / Volunteer</h3>
          </div>
        </Link>
      </div>

      <div className="relative w-full">
        <div className="brightness-50">
          <Image
            className="max-h-64 w-full rounded-sm"
            src="/buckAntelope.jpg"
            alt="Image 3"
            width={200}
            height={300}
          />
        </div>

        <Link href={"/contact"}>
          <div className="bg-black-50 absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-3xl">
            <h3 className="">Contact</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageGrid;
