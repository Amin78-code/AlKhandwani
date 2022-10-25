import React, { useState } from "react";
import Image from "next/image";
import packageImage from "../../assets/images/services/package2015.jpg";
import { AiFillStar } from "react-icons/ai";
import TourDescription from "./TourDescription";
import TourRegistration from "./TourRegistration";
import TourReviews from "./TourReviews";

const ServicesDescription = ({ serviceDetails }) => {
  const [tourDetails, setTourDetails] = useState({
    isDescription: true,
    isRegistration: false,
    isReviews: false,
  });
  const handleTourDetails = (detail) => {
    if (detail === "description") {
      setTourDetails((prev) => ({
        ...prev,
        isDescription: true,
        isReviews: false,
        isRegistration: false,
      }));
    }
    if (detail === "registration") {
      setTourDetails((prev) => ({
        ...prev,
        isRegistration: true,
        isDescription: false,
        isReviews: false,
      }));
    }
    if (detail === "reviews") {
      setTourDetails((prev) => ({
        ...prev,
        isReviews: true,
        isDescription: false,
        isRegistration: false,
      }));
    }
  };
  return (
    <div className="flex flex-col gap-y-[15px] md:gap-y-[20px] border dark:border-gray-200 px-[15px] mx-auto lg:mx-[unset] py-[30px] ">
      <h1 className="text-[32px] text-[#434e59] leading-[36px] capitalize">
        {serviceDetails.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-y-[10px] gap-x-[20px]">
        <span>{serviceDetails.duration}</span>
        <span className="flex gap-x-[5px]">
          <span className="flex items-center">
            <App stars={serviceDetails.stars} />
          </span>
          <span>({serviceDetails.review} Reviews)</span>
        </span>
        <span>Code: {serviceDetails.code}</span>
        <span>Rs. {serviceDetails.price}</span>
      </div>
      <div className=" xl:w-[718px]">
        <Image src={serviceDetails.img} alt="packageImage" />
        <p className="text-[14px] text-[#626b72] mt-[30px] leading-2">
          {serviceDetails?.detail_text}
        </p>
        <div className="mt-[30px]">
          <div className="flex  sm:justify-start sm:gap-x-[10px] lg:justify-between">
            <button
              type="button"
              className={`text-white trans3  w-full text-xs lg:text-[0.85rem] px-[13px] sm:px-[50px] md:px-[83px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] rounded-tl-[5px] rounded-tr-[5px]  hover:text-[#fff]
               ${
                 tourDetails.isDescription == true
                   ? "bg-[#903636]"
                   : "bg-[#fff] text-[#333] border-0 border-b"
               }`}
              onClick={() => handleTourDetails("description")}
            >
              Description
            </button>
            <button
              type="button"
              className={`text-white trans3 bg-[#d4a051 ] w-full text-xs lg:text-[0.85rem] px-[13px] sm:px-[50px] md:px-[83px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] rounded-tl-[5px] rounded-tr-[5px] hover:text-[#fff]
               ${
                 tourDetails.isRegistration == true
                   ? "bg-[#903636]"
                   : "bg-[#fff] text-[#333] border-0 border-b"
               }`}
              onClick={() => handleTourDetails("registration")}
            >
              Registration
            </button>
            <button
              type="button"
              className={`text-white trans3 bg-[#d4a051 ] w-full text-xs lg:text-[0.85rem] px-[13px] sm:px-[50px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] rounded-tl-[5px] rounded-tr-[5px] hover:text-[#fff]
               ${
                 tourDetails.isReviews == true
                   ? "bg-[#903636]"
                   : "bg-[#fff] text-[#333] border-0 border-b"
               }`}
              onClick={() => handleTourDetails("reviews")}
            >
              Reviews
            </button>
          </div>
          {tourDetails.isDescription && (
            <TourDescription serviceDetails={serviceDetails} />
          )}
          {tourDetails.isRegistration && (
            <TourRegistration serviceDetails={serviceDetails} />
          )}
          {tourDetails.isReviews && (
            <TourReviews serviceDetails={serviceDetails} />
          )}
        </div>
      </div>
    </div>
  );
};
let App = ({ stars }) => {
  return (
    <>
      {Array.from(Array(stars), (e, i) => {
        return <AiFillStar key={i} className="text-[#903636]" />;
      })}
    </>
  );
};

export default ServicesDescription;
