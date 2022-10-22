import React, { useState } from "react";
import Image from "next/image";
import packageImage from "../../assets/images/services/package2015.jpg";
import { AiFillStar } from "react-icons/ai";
import TourDescription from "./TourDescription";
import TourRegistration from "./TourRegistration";
import TourReviews from "./TourReviews";

const ServicesDescription = () => {
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
    <div className="flex flex-col gap-y-[15px] md:gap-y-[20px] border px-[15px]  mx-auto lg:mx-[unset] py-[30px] ">
      <h1 className="text-[32px] text-[#434e59]">HAJJ</h1>
      <div className="flex flex-col md:flex-row gap-y-[10px] gap-x-[10px]">
        <span>4 Days, 5 Nights</span>
        <span className="flex items-center">
          <AiFillStar className="text-[#903636]" />
          <AiFillStar className="text-[#903636]" />
          <AiFillStar className="text-[#903636]" />
          <AiFillStar className="text-[#903636]" />
          <AiFillStar className="text-[#903636]" />
        </span>
        <span> (3 Reviews) Code: LMPROU $500 </span>
      </div>
      <div className=" xl:w-[718px]">
        <Image src={packageImage} alt="packageImage" />
        <p className="text-[14px] text-[#626b72] mt-[30px] leading-2">
          The Hajj is a demonstration of the solidarity of the Muslim people and
          their submission to Allah. Muslims from all over the world gather once
          in a year in the holy city of Makkh and perform Hajj progression which
          is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage
          to holy city of Makkah in order to full fill the order of Allah ta’la
          in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat
          Hajra and son Hazrat Ismail (A.S). It is currently the largest annual
          pilgrimage in the world, and is the fifth pillar of Islam, an
          obligation that must be carried out at least once in their lifetime by
          every able-bodied Muslim who can afford to do so. Serving pilgrims is
          not only a job rather it is divine duty and those who are sincerely
          involved in this field are blessed by Allah Subhanho wa Ta’ala. Team
          of Alkhandwani International Pvt limited have been offering
          appropriate Hajj packages with economical price carrying all
          reasonable facilities. Chief Executive of Alkhandwani International
          Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising,
          managing and leading the Hajj groups as group leader since 1998. He
          has been performing his sacred duties with passion and zeal. He has
          executed 16 successful Hajj Operations as a group leader. His personal
          attention to every Pilgrim is the most significant feature of hajj
          Package of Alkhandwani International. Training sessions are conducted
          under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama
          Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are
          also accompanied with him for the religious guidance.
        </p>
        <div className="mt-[30px]">
          <div className="flex justify-between border border-[#e2cbcb] bg-[white]">
            <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black  text-xs lg:text-md px-[12px] sm:px-[60px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] active:bg-[#903636] focus:bg-[#903636]"
              onClick={() => handleTourDetails("description")}
            >
              Description
            </button>
            <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black  text-xs lg:text-md px-[12px] sm:px-[60px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] active:bg-[#903636] focus:bg-[#903636]"
              onClick={() => handleTourDetails("registration")}
            >
              Registration
            </button>
            <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black  text-xs lg:text-md px-[12px] sm:px-[60px] lg:px-[75px] py-[15px] text-center hover:bg-[#903636] active:bg-[#903636] focus:bg-[#903636]"
              onClick={() => handleTourDetails("reviews")}
            >
              Reviews
            </button>
          </div>
          {tourDetails.isDescription && <TourDescription />}
          {tourDetails.isRegistration && <TourRegistration />}
          {tourDetails.isReviews && <TourReviews />}
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
