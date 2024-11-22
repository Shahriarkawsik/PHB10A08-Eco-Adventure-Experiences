import React, { useEffect, useState } from "react";
import SingleTourDetails from "./SingleTourDetails";
import { useLocation } from "react-router-dom";

const AdventureTour = () => {
  const [tourDetails, setTourDetails] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == "/adventures") {
      document.title = "Adventures | Eco-Adventure Experiences";
    }
  }, [location]);
  useEffect(() => {
    fetch("/eco.json")
      .then((response) => response.json())
      .then((data) => setTourDetails(data));
  }, []);
  return (
    <section className="mt-20 w-11/12 lg:w-11/12 mx-auto space-y-10">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="Rubik text-4xl sm:text-6xl  leading-10 text-center text-color1"
      >
        Adventure Tour
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="Rubik  text-xl leading-8 text-justify sm:text-center text-color1"
      >
        Embark on thrilling journeys to the world's most stunning destinations.{" "}
        <br />
        Discover nature's wonders and push your limits with unforgettable
        experiences.
      </p>
      <div className="grid sm:text-2xl sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapping */}
        {tourDetails.map((tourDetail, id) => (
          // single card
          <SingleTourDetails
            tourDetail={tourDetail}
            key={id}
          ></SingleTourDetails>
        ))}
      </div>
    </section>
  );
};

export default AdventureTour;
