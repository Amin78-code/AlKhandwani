import React from "react";
import Image from "next/image";

import { AiFillStar } from "react-icons/ai";

const TourReviewsCard = ({ review }) => {
  return (
    <div className="flex gap-x-[20px] border-b border-[#e2cbcb] py-[10px]">
      <div className="w-[150px]">
        <Image src={review.image} alt="img" />
      </div>
      <div className="w-full md:w-[575p x] flex flex-col gap-y-[10px]">
        <h1 className="text-[21px] font-emibold">{review.name}</h1>
        <div className="flex flex-col md:flex-row gap-y-[10px] justify-between">
          <span>Sr. Teacher</span>
          <span className="flex items-center">
            <AiFillStar className="text-[#903636]" />
            <AiFillStar className="text-[#903636]" />
            <AiFillStar className="text-[#903636]" />
            <AiFillStar className="text-[#903636]" />
            <AiFillStar className="text-[#903636]" />
          </span>
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default TourReviewsCard;
