import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopDestinationCard = ({ destination }) => {
  return ( 
      <div className="flex flex-col md:flex-row gap-x-[30px] border md:border-none mx-[2px] md:shadow-[0px_0px_25px_7px_rgb(209,209,209,0.35)] mt-[20px] md:mt-[50px] rounded-[10px] overflow-hidden md:mx-[30px] mb-[30px] cursor-pointer">
        <div className="w-full md:max-w-[500px] lg:max-h-[520px] img-container">
          <Image src={destination.image} alt="img" />
        </div>
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[50px] w-full md:w-[570px ] py-[20px] md:py-[30px] lg:py-[77px] px-[20px] md:px-[30px] mx-auto">
          <h4 className="text-[26px] md:text-[35px] lg:text-[50px] leading-[20px] md:leading-[35px] lg:leading-[50px] uppercase">
            {destination.cityName},{" "}
            <span className="text-[#903636] ">{destination.countryName}</span>
          </h4>

          <p className="mt-[-10px]">{destination.content}</p>
          <div className="flex gap-x-[10px]">
            <Link href={"airticketing"}>
              <a>
                <button
                  type="button"
                  className="text-white border border-transparent bg-[#d4a051] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[18px] md:text-[13px] lg:text-[18px] px-7 py-2.5 text-center  "
                >
                  More Details
                </button>
              </a>
            </Link>
            <Link href={"/contact"}>
              <a>
                <button
                  type="button"
                  className="hidden md:block text-white border border-transparent bg-[#903636] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#903636] rounded-[2.5rem] text-[18px] md:text-[13px] lg:text-[18px] px-7 py-2.5 text-center  "
                >
                  Book Now
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div> 
  );
};

export default TopDestinationCard;
