import React from "react";
import Image from "next/image"
import destination1 from "../../../assets/images/top-destinations/dest1.jpg"

const TopDestinations = () => {
  return (
    <section className="w-full py-[100px] bg-gray-5 0">
      <div className="max-w-[1170px] mx-auto">
        <div className=" text-center text-[#d4a051]  ">
          <h3 className="text-[35px] font-bold uppercase">
            Top<span className="text-[#903636]"> Destinations</span>
          </h3>
          <p className="text-[18px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        <div className="flex">
          <div>
            <Image src={destination1} alt="img"/>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
