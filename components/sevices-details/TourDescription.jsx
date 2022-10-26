import React from "react";
import { TbVaccine } from "react-icons/tb";
import Icon from "../common/icon/Icon";

const TourDescription = ({ serviceDetails }) => {
  return (
    <div className="flex flex-col gap-y-[10px] pt-[10px] text-[#434e59] dark:text-[#fff]">
      <h2 className="text-[21px] font-semibold mt-[20px] border-b border-[#e2cbcb] pb-[10px]">
        Tour Description
      </h2>
      <div className="flex items-center gap-x-[5px] font-semibold">
        <h3 className="text-[18px] pt-[5px]">P.S. Vaccination</h3>
        <Icon vaccine className="text-[25px] text-[#fb4c4c]" />
      </div>
      <span className="text-[14px] md:text-[16px]">
        Complete doses of <span className="font-semibold">WHO</span> approved
        vaccines
      </span>
      <p className="text-[14px] md:text-[16px]">{serviceDetails?.description?.content1}</p>
      <span className="text-[14px] md:text-[16px]">{serviceDetails?.description?.content2}</span>
    </div>
  );
};

export default TourDescription;
