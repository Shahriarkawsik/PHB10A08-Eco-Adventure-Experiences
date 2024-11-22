import React, { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { ImMan } from "react-icons/im";
import { GoStack } from "react-icons/go";
import { FaHouseFlag } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
const DestinationInfo = () => {
  const { destId } = useParams();

  const destinationId = parseInt(destId);
  const data = useLoaderData();

  const destinationPlace = data.find((item) => item.id === destinationId);

  const {
    id,
    destinationPlaceName,
    destinationPlaceTitle,
    destinationPlaceImage,
    destinationPlaceUniqueSpecialty,
    destinationPlaceHistory,
    titleOfTheDestinationPlaceHistory,
    destinationPlaceHistoricalImage,
    seasonalActivities,
    seasonalActivitiesImage,
    mustKnowAndFacts,
    language,
    currency,
    religion,
    timeZone,
  } = destinationPlace;
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == `/destination/${id}`) {
      document.title = `${destinationPlaceName} | Destination | Eco-Adventure Experiences`;
    }
  }, [pathname]);
  return (
    <section className="w-11/12 lg:w-11/12 2xl:w-4/5 mx-auto space-y-8 sm:space-y-12 lg:space-y-16 Rubik">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center gap-4 text-3xl sm:text-5xl"
      >
        <FaHouseFlag className="  text-color3 font-bold" />
        <h1 className="  text-color1 font-bold">
          Explore {destinationPlaceName}
        </h1>
      </div>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex justify-center items-end bg-cover bg-center h-[500px] rounded-lg "
        style={{ backgroundImage: `url(${destinationPlaceImage})` }}
      >
        <div className=" mb-5  bg-[rgba(244,244,244,0.7)] max-sm:w-full w-11/12 mx-auto rounded-lg  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:justify-between items-start sm:items-center gap-3 p-4 sm:text-xl lg:text-base ">
          <div className="flex  items-center lg:justify-center gap-2 ">
            <TbWorld className="text-color3 " />
            <p className=" text-color1">
              Language: <span className="font-semibold">{language}</span>{" "}
            </p>
          </div>
          <div className="flex  items-center lg:justify-center gap-2 ">
            <BsCoin className="text-color3 " />
            <p className=" text-color1">
              Currency: <span className="font-semibold">{currency}</span>{" "}
            </p>
          </div>
          <div className="flex  items-center lg:justify-center gap-2  ">
            <ImMan className="text-color3 " />
            <p className=" text-color1">
              Religion: <span className="font-semibold">{religion}</span>{" "}
            </p>
          </div>
          <div className="flex  items-center lg:justify-center gap-2 ">
            <GoStack className="text-color3 " />
            <p className=" text-color1">
              Timezone: <span className="font-semibold">{timeZone}</span>{" "}
            </p>
          </div>
        </div>
      </section>
      {/* History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:gap-10 2xl:gap-40 max-lg:space-y-6  Rubik ">
        <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
          <p className="text-color3  font-semibold">
            {destinationPlaceUniqueSpecialty}
          </p>
          <h1 className="text-color1 text-4xl sm:text-6xl lg:text-5xl font-bold PlayfairDisplay">
            {destinationPlaceTitle}
          </h1>
          <p className="text-justify text-xl sm:text-2xl lg:text-xl">
            {destinationPlaceHistory}
          </p>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-lg max-lg:w-full "
          src={destinationPlaceHistoricalImage}
          alt=""
        />
      </div>
      {/* Seasonal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10 lg:gap-10 2xl:gap-40 ">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-lg w-full h-full "
          src={seasonalActivitiesImage}
          alt=""
        />
        <div className="space-y-4 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-color1 text-4xl sm:text-6xl lg:text-5xl font-bold PlayfairDisplay"
          >
            Seasonal Activities
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="space-y-4"
          >
            {seasonalActivities.map((seasonalActivity, index) => (
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <h3 className="collapse-title text-xl sm:text-3xl lg:text-2xl font-medium">
                  {seasonalActivity.title}
                </h3>
                <div className="collapse-content">
                  <p className="sm:text-2xl lg:text-xl">
                    {seasonalActivity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Know and facts */}
      <div className="space-y-7">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl sm:text-5xl lg:text-4xl text-color1 text-center"
        >
          {destinationPlaceName} - Must Know & Facts
        </h1>
        <ul
          data-aos="fade-up"
          data-aos-duration="1000"
          className="space-y-5 sm:space-y-5"
        >
          {mustKnowAndFacts.map((mustKnowAndFact, index) => (
            <div
              className="flex items-center gap-4 sm:gap-6 sm:text-4xl"
              key={index}
            >
              <MdTask className="text-color3 text-3xl sm:text-4xl" />
              <li className="text-color1 text-xl sm:text-3xl lg:text-2xl sm:text-justify">
                {mustKnowAndFact}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DestinationInfo;
