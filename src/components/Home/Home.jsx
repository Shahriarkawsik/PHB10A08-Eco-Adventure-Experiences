import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import AdventureTour from "../AdventureTour/AdventureTour";
import Destination from "../Destinations/Destinations";
import Event from "../Event/Event";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Home | Eco-Adventure Experiences";
  }, [pathname]);
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <AdventureTour></AdventureTour>
      <Destination></Destination>
      <Event></Event>
    </div>
  );
};

export default Home;
