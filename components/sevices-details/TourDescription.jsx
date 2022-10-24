import React from "react";
import { TbVaccine } from "react-icons/tb";

const TourDescription = ({ serviceDetails }) => {
  return (
    <div className="flex flex-col gap-y-[10px] pt-[10px] text-[#434e59]">
      <h2 className="text-[21px] font-semibold mt-[20px] border-b border-[#e2cbcb] pb-[10px]">
        Tour Description
      </h2>
      <div className="flex items-center gap-x-[5px] font-semibold">
        <h3 className="text-[25px] pt-[5px]">P.S. Vaccination </h3>
        <TbVaccine className="text-[25px] text-[#ff0000]" />
      </div>
      <span>
        Complete doses of <span className="font-semibold">WHO</span> approved
        vaccines
      </span>
      <p>{serviceDetails?.description?.content1}</p>
      <span> {serviceDetails?.description?.content2}</span>
    </div>
  );
};

export default TourDescription;
