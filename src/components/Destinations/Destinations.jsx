import React, { useEffect, useState } from "react";
import Destination from "../Destination/Destination";
import { useLocation } from "react-router-dom";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == "/destination") {
      document.title = `Destination| Eco-Adventure Experiences`;
    }
  }, [pathname]);
  useEffect(() => {
    fetch("/destination.json")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <section className="mt-20 w-11/12 lg:w-11/12 mx-auto space-y-10">
      <h1
        className="Rubik text-2xl max-sm:text-center  lg:text-4xl leading-10 text-color1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Top Destination for your next vacation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination, id) => (
          <Destination key={id} destination={destination}></Destination>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
