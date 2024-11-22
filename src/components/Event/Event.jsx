import { CiClock2 } from "react-icons/ci";
import { MdOutlineStarHalf } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useLocation } from "react-router-dom";
const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/event.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == `/event`) {
      document.title = ` Event | Eco-Adventure Experiences`;
    }
  }, [pathname]);
  return (
    <section className="w-11/12 lg:w-11/12 mx-auto Rubik space-y-20">
      <div className="space-y-5">
        <h1
          className=" text-center text-4xl leading-10 text-color1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Adventure Hub
        </h1>
        <p className="Rubik  text-xl leading-8 text-center text-color1">
          Discover extraordinary journeys across the globe. Adventure
          awaits—your next experience starts here.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {events.map((event, id) => (
          <div key={id} className="border border-color3.2 rounded-xl hover:scale-105 transition">
            <img
              className="w-full h-[250px] rounded-tl-xl rounded-tr-xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={event?.img}
              alt=""
            />
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="p-3 space-y-3"
            >
              <p className="flex items-center gap-2 text-slate-400">
                <CiLocationOn />
                <span>{event.location}</span>
              </p>
              <h2 className="text-xl text-color1 font-bold">
                {event.eventTitle}
              </h2>
              <p className="flex items-center gap-2">
                <MdOutlineStarHalf className="text-orange-400 text-xl" />
                <span className="text-gray-500">
                  {event.ratings} ({event.review} reviews)
                </span>
              </p>
              <button className="rounded-md bg-color3 px-2 py-1 text-xs text-white">
                {event.tourType}
              </button>
              <hr className="border-t border-dotted border-color3.2" />
              <div className="flex justify-between items-center">
                <p className="text-gray-500">
                  From{" "}
                  <span className="text-color1 font-semibold">
                    {" "}
                    ${event.cost}
                  </span>
                </p>
                <p className="flex gap-3 items-center text-gray-500">
                  <CiClock2 />
                  <span>{event.duration}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
        {/*  {
        "id": 5,
        "img": "https://example.com/images/event5.jpg",
        "location": "Reykjavik, Iceland",
        "eventTitle": "Northern Lights Adventure",
        "review": 1423,
        "ratings": 4.9,
        "tourType": "Adventure",
        "cost": 2700,
        "duration": "5 days - 4 nights"
    }, */}
      </div>
    </section>
  );
};

export default Event;
