import React from "react";
import { fetchEvents } from "../utils/calendar";
import NavBar from "../components/NavBar";
import type { calendar_v3 } from "googleapis";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Link from "next/link";

type Event = {
  title: string | null | undefined;
  location: string;
  start: calendar_v3.Schema$EventDateTime | undefined;
  end: calendar_v3.Schema$EventDateTime | undefined;
  description: string;
  images: Image[] | null;
};

type Image = {
  fileId: string;
  fileUrl: string;
  iconLink: string;
  mimeType: string;
  title: string;
};

export async function getServerSideProps() {
  const events = await fetchEvents();

  return {
    props: {
      events,
    },
  };
}

const Calendar = ({ events }: { events: Event[] | undefined }) => {
  const cal = events?.map((e, i) => {
    let url = "";
    if (e.images && e.images[0]?.fileId) {
      url = `https://drive.google.com/uc?export=view&id=${e.images[0]?.fileId}`;
    }
    return (
      <div
        key={`cal${i}`}
        className="my-10 w-80 text-neutral-content/75 sm:w-2/3"
      >
        <div className="card bg-base-100 shadow-xl">
          <div className="flex flex-col items-center p-3">
            {e.start?.dateTime && e.end?.dateTime && (
              <h3 className="mt-10 font-bold">
                {new Date(e.start?.dateTime).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                })}{" "}
                -{" "}
                {new Date(e.end?.dateTime)
                  .toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                  })
                  .split(" ")
                  .slice(-2)
                  .join(" ")}
              </h3>
            )}
          </div>
          {e.images && (
            <figure className=" px-10 pt-6">
              <Image
                alt="thing"
                loader={() => url}
                priority={true}
                className="max-h-[40rem] w-auto rounded-xl brightness-75"
                src={url}
                width={200}
                height={200}
              ></Image>
            </figure>
          )}
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">{e.title}</h2>
            <h2 className="card-title"> {e.location}</h2>
            <p className="font-robotoSlab">{e.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>Montana Hunters for Access Events</title>
        <meta
          name="description"
          content="Calendar and event page for Montana Hunter's for Access. Promoting and incentivizing Block Management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics />
      <div className="bg-base-200">
        <NavBar />
        <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/vista.jpg')] bg-cover bg-fixed bg-bottom">
          {cal}
          {events && events?.length < 1 && (
            <div className="my-5 flex min-h-[20rem] w-[95vw] flex-col items-center justify-center gap-y-5 rounded-lg bg-base-100 p-10 text-center shadow-lg sm:w-2/3 ">
              <h1 className="font-robotoSlab text-4xl">
                Please check back soon for upcoming events or join our{" "}
                <Link
                  href={"/support"}
                  className="underline hover:text-slate-700"
                >
                  volunteer sign up list.
                </Link>
              </h1>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Calendar;
