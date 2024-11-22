import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SingleTourDetails = ({ tourDetail }) => {
  const { id, image, adventureTitle, ecoFriendlyFeatures } = tourDetail;
  return (
    <div className="border p-4 rounded-xl space-y-6 h-fit">
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        src={image}
        className="w-full h-[300px] rounded-xl"
        alt=""
      />
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl lg:text-base xl:text-xl font-semibold text-color1 Rubik"
      >
        {adventureTitle}
      </h2>
      {/* <hr className="border-t border-dashed"></hr>
       */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="divider font-bold text-xl sm:text-3xl Rubik"
      >
        Features
      </div>

      <ul className="px-6 my-2 space-y-3 ">
        {ecoFriendlyFeatures.map((Features, idx) => (
          <li
            data-aos="fade-up"
            data-aos-duration="1000"
            key={idx}
            className=" text-color1 lg:text-xl Rubik list-disc"
          >
            {Features}
          </li>
        ))}
      </ul>
      <div data-aos="fade-up" data-aos-duration="1000" className="p-2">
        <Link to={`/tourDetails/${id}`}>
          <button className="btn bg-teal-500 border-none w-full hover:text-color3 text-white text-2xl sm:text-3xl  font-semibold Rubik">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTourDetails;
