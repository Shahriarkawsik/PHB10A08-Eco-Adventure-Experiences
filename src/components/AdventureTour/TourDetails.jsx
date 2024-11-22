import React, { useContext, useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { Alert } from "./../../Alert/Alert";
import ModalBG from "../../assets/image/bgModal.png";
import { AuthContext } from "../../Providers/AuthProvider";

const TourDetails = () => {
  const { destination, setDestination } = useContext(AuthContext);

  const { id } = useParams();
  const itemId = parseInt(id);
  const data = useLoaderData();
  const tourItem = data.find((item) => item.id === itemId);

  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = tourItem;

  const pathLocation = useLocation();

  useEffect(() => {
    setDestination(pathLocation.pathname);
    if (pathLocation == `/tourDetails/${id}`) {
      document.title = `${categoryName} | Eco-Adventure Experiences`;
    }
  }, [pathLocation]);

  const handleTalkExpert = (event) => {
    const currentHour = new Date().getHours();
    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com/fay-pstt-fsp", "_blank");
    } else {
      document.getElementById("my_modal").showModal();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 Rubik">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 text-white rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4 Nothing">
              {adventureTitle}
            </h1>
            <p className="text-lg">{shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Cost</h2>
          <p className="text-green-600 text-xl font-bold">${adventureCost}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Availability</h2>
          <p
            className={`text-lg font-bold ${
              bookingAvailability ? "text-green-600" : "text-red-600"
            }`}
          >
            {bookingAvailability ? "Available Now" : "Fully Booked"}
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Location</h2>
          <p className="text-gray-800">{location}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Duration</h2>
          <p className="text-gray-800">{duration}</p>
        </div>
      </section>

      {/* Image & Highlights Section */}
      <section className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden my-6">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Adventure"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right Side Highlights */}
        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Adventure Highlights</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Included Items:</h3>
            <ul className="list-disc list-inside">
              {includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Eco-Friendly Features:
            </h3>
            <ul className="list-disc list-inside">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-2xl font-bold mb-4">About the Adventure</h2>
        <p className="text-gray-700 mb-4">
          Join us for an exciting adventure through breathtaking landscapes.
          Whether you're a beginner or an experienced adventurer, there's
          something for everyone.
        </p>
        <h3 className="text-lg font-semibold mb-2">Special Instructions:</h3>
        <ul className="list-disc list-inside mb-4">
          {specialInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </section>

      {/* Booking Information Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg my-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Adventure Cost: ${adventureCost}
            </h2>
            <p className="text-gray-700">
              Max Group Size: {maxGroupSize} People
            </p>
          </div>
          <button
            onClick={handleTalkExpert}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-700"
          >
            Talk with Expert
          </button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className=" text-grey-700 p-6 rounded-lg my-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-lg mb-6">
          Don't miss out on the journey of a lifetime. Book your spot today!
        </p>
        <button className="bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      {/* Modal*/}
      <dialog id="my_modal" className="modal">
        <div
          className="Rubik modal-box w-11/12 sm:w-1/3 max-w-5xl flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${ModalBG})`,
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <h3 className="font-bold text-3xl text-color1">
            Consultation Unavailable Right Now
          </h3>
          <p className="py-4">
            Our experts are available for consultation from{" "}
            <span className="font-bold ">10:00 AM to 8:00 PM.</span>
            <br />
            Please try again during these hours for a live conversation.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn bg-green-700 hover:bg-green-600 border-none text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TourDetails;
