import React from "react";
// import { DestinationItems, responsive } from "./destinationItems";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import aos from "./../../../node_modules/aos/dist/aos.esm";
import { Link } from "react-router-dom";
// { destination }
const Destination = ({ destination }) => {
  const {
    id,
    destinationPlaceName,
    destinationPlaceTitle,
    destinationPlaceImage,
  } = destination;

  return (
    <div className="border border-color3.2 rounded-lg space-y-4 Rubik">
      <div className="relative top-0 transition-all">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-tl-lg rounded-tr-lg w-full h-[250px] hover:opacity-10 opacity-100 bg-[rgba(0,0,0,0.1)]"
          src={destinationPlaceImage}
          alt=""
        />
        <div className="hover flex justify-center items-center w-full h-[250px] absolute top-0 left-0 opacity-0 hover:opacity-100 transition bg-[rgba(0,0,0,0.6)] rounded-lg">
          <Link to={`/destination/${id}`}>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" hover:bg-color3 hover:border-none font-semibold text-color3 hover:text-white p-3 rounded-full border"
            >
              See all tour and adventure
            </button>
          </Link>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <h1 className="text-color1 font-bold text-3xl hover:text-color3">
          {destinationPlaceName}
        </h1>
        <p>{destinationPlaceTitle}</p>
      </div>
    </div>
  );
};

export default Destination;
/*
    <div
      style={{
        position: "relative",
        paddingBottom: "30px",
      }}
    >
      <Carousel
        autoPlay
        arrows={false}
        autoPlaySpeed={3000}
        infinite
        shouldResetAutoplay
        dotListClass
        centerMode={false}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        containerClass="container-padding-bottom"
        responsive={responsive}
      >
        {destinationItems.map((destinationItem, id) => (
          <div
            key={id}
            className="border  rounded-xl border-color3.2 mx-3 relative space-y-5"
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="rounded-tl-xl rounded-tr-xl h-[250px] hover:opacity-70"
              src={destinationItem?.destinationPlaceImage}
              alt=""
            />
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="5000"
              className="p-2 absolute top-20 left-20 hover"
            >
              <button className="hover:bg-color3 hover:border-none p-3 border border-white rounded-full ">
                See all Tour and Activity{" "}
              </button>
            </div>
            <div className="px-4">
              <h1 className="text-2xl font-semibold ">
                {destinationItem?.destinationPlaceName}
              </h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
*/
