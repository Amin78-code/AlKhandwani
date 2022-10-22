import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Profile1 from "../../assets/images/profile/profile1.png";

const reviwes = [
  {
    id: "r1",
    name: "Jessica Farnandes",
    image: Profile1,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical on Latin literature from",
  },
  {
    id: "r2",
    name: "Adam Jhone",
    image: Profile1,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical on Latin literature from",
  },
];

const TourReviews = () => {
  return (
    <div className="w-full flex flex-col gap-y-[10px] pt-[10px] text-[15px] text-[#434e59]">
      <h2 className="text-[21px] font-semibold mt-[20px] border-b border-[#e2cbcb] pb-[10px]">
        Reviews
      </h2>
      {reviwes.map((review) => {
        return (
          <div key={review.id} className="flex gap-x-[20px] border-b border-[#e2cbcb] py-[10px]">
            <div className="w-[150px]">
              <Image src={review.image} alt="img" />
            </div>
            <div className="w-full md:w-[575px] flex flex-col gap-y-[10px]">
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
      })}
    </div>
  );
};

export default TourReviews;
