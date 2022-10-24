import React from "react";
import Image from "next/image";
import InstagramIcon from "../common/icon/InstagramIcon";

const InstragramCard = ({ gallery }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="img-container h-full">
        <Image src={gallery.image} alt="img" />
      </div>
      <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 trans3 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
      <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
        <InstagramIcon />
      </div>
    </div>
  );
};

export default InstragramCard;
