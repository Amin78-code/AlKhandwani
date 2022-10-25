import React from "react";
import Profile1 from "../../assets/images/profile/profile1.png";
import TourReviewsCard from "./TourReviewsCard";

const TourReviews = ({ serviceDetails }) => {
  return (
    <div className="w-full flex flex-col gap-y-[10px] pt-[10px] text-[15px] text-[#434e59] dark:text-[#fff]">
      <h2 className="text-[21px] font-semibold mt-[20px] border-b border-[#e2cbcb] pb-[10px]">
        Reviews
      </h2>
      {serviceDetails.reviews.length === 0 && (
        <p className="text-[20px] text-[#434e59] dark:text-[#fff]">
          There are no Reviews In this service!
        </p>
      )}
      {serviceDetails.reviews.length > 0 &&
        serviceDetails?.reviews.map((review) => {
          return <TourReviewsCard review={review} key={review.id} />;
        })}
    </div>
  );
};

export default TourReviews;
