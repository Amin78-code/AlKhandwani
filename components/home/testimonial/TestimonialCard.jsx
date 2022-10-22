import React from "react";
import Image from "next/image";
import profile1 from "../../../assets/images/profile/profile1.png";

function TestimonialCard() {
  return (
    <div className="max-w-[560px] mx-auto flex justify-end items-center pr-[3%] cursor-pointer group mb-[30px]">
      <div className="w-full sm:w-[80%] bg-white border rounded-[20px] text-center relative pl-4 sm:pl-[50px] p-4">
        <div className="hidden sm:block max-w-[80px] max-h-[80px] sm:max-w-[115px] sm:max-h-[115px] trans3 group-hover:scale-[1.1] rounded-full img-container border-[2px] border-[#d4a05151] overflow-hidden absolute left-[-40px] sm:left-[-80px] top-[50%] translate-y-[-50%]">
          <Image src={profile1} />
        </div>
        <p className="text-[12px] sm:text-[14px] text-[#333] leading-[16px] sm:leading-[20px]">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from  de
          Finibus Bonorum et Malorum  by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <h5 className="text-[20px] text-[#903636] leading-[22px] font-[500] mt-4">
          Mr. Kamran
        </h5>
        <p className="text-[12px] text-[#d4a051] leading-[14px] mt-1">
          Business Man
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
