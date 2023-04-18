import React from "react";
import Link from "next/link";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-slate-300">
      <div className="relative w-full">
        <div className="brightness-50 hover:brightness-100">
          <Image
            className="max-h-44 w-full rounded-lg"
            src="/vista.jpg"
            alt="Image 1"
            width={200}
            height={200}
          />
        </div>

        <Link href={"/calendar"}>
          <div className="bg-black-50 absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-2xl">
            <h3 className="">Upcoming Events</h3>
          </div>
        </Link>
      </div>

      <div className="relative w-full">
        <div className="brightness-50">
          <Image
            className="max-h-44 w-full rounded-lg"
            src="/deer.jpg"
            alt="Image 2"
            width={200}
            height={200}
          />
        </div>

        <Link href={"/support"}>
          <div className="bg-black-50 absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-2xl">
            <h3 className="">Support</h3>
          </div>
        </Link>
      </div>

      <div className="relative w-full">
        <div className="brightness-50">
          <Image
            className="max-h-44 w-full rounded-lg"
            src="/buckAntelope.jpg"
            alt="Image 3"
            width={200}
            height={200}
          />
        </div>

        <Link href={"/contact"}>
          <div className="bg-black-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center text-lg font-bold text-slate-300/80 hover:text-xl hover:text-slate-300/100 sm:text-2xl sm:hover:text-2xl">
            <h3 className="">Contact</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageGrid;
