import React from "react";
import Image from "next/image";
import place from "../../../assets/images/mosque-gb86620f9b_1280.jpg";

function ServicesCard() {
  return (
    <div className="min-h-[200px] flex justify-center items-center overflow-hidden relative group">
      <div className="w-full  img-container border-[2px] border-[#d4a05151] overflow-hidden absol ute left-0 top-0">
        <Image src={place} />
      </div>
      <div className="h-[50px] group-hover:h-full group-hover:pb-6 flex justify-end items-center flex-col overflow-hidden bg-white border text-center p-6 pb-2 absolute bottom-0 left-0">
        <p className="text-[14px] text-[#000] leading-[20px]">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form,
        </p>
        <h5 className="text-[20px] text-[#903636] leading-[22px] font-[500] mt-4">
          Hajj
        </h5>
        <p className="text-[12px] text-[#d4a051] leading-[14px]">Rs. 2,00000</p>
      </div>
    </div>
  );
}

export default ServicesCard;
