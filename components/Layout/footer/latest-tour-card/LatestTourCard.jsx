import Image from "next/image";
import React from "react";
import Icon from "../../../common/icon/Icon";

function LatestTourCard({ tour, index }) {
  return (
    <div
      className={`flex justify-start gap-x-2 ${
        index !== 2 && "border-b-[1px] border-[#e7b262] mb-3"
      }`}
    >
      <div className="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] img-container overflow-hidden rounded-tl-[10px] rounded-bl-[10px]">
        <Image src={tour?.img} />
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <h5 className="text-[16px] leading-[20px] capitalize">
            {tour?.title}
          </h5>
          <p className="text-[12px] text-[#dadada] leading-[13px] capitalize">
            {tour?.place}
          </p>
        </div>
        <p className="text-[14px] leading-[14px]">
          <Icon clock className="w-[18px] h-[18px] inline mr-[5px]" />
          {tour?.duration}
        </p>
      </div>
    </div>
  );
}

export default LatestTourCard;
