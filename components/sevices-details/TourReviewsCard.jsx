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
        <div className="flex justify-between">
          <div>
            <h1 className="text-[21px] font-semibold leading-[25px]">{review.name}</h1>
            <span className="text-[14px] text-gray-400">{review.designition}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-y-[10px] justify-between">
            <span className="flex items-center">
              <AiFillStar className="text-[#903636]" />
              <AiFillStar className="text-[#903636]" />
              <AiFillStar className="text-[#903636]" />
              <AiFillStar className="text-[#903636]" />
              <AiFillStar className="text-[#903636]" />
            </span>
          </div>
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default TourReviewsCard;
