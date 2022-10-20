import React from "react";
import Image from "next/image";

function ServicesCard({ service }) {
  return (
    <a href="#">
      <div className="max-w-[370px] min-h-[200px] flex justify-center items-center overflow-hidden relative group">
        <div className="w-[130px] h-[20px] text-[11px] text-center text-white leading-[20px] img-container bg-[#903636] rotate-[-45deg] overflow-hidden absolute left-[-30px] top-[20px] z-[4]">
          20 days tour
        </div>
        <div className="w-full h-[250px] img-container overflow-hidden absol ute left-0 top-0">
          <Image src={service.img} />
        </div>
        <div className="h-[50px] group-hover:h-full group-hover:pb-6 flex justify-end items-center flex-col overflow-hidden bg-[#ffedda] border text-center p-6 pb-[5px] absolute bottom-0 left-0">
          <p className="text-[14px] text-[#000] leading-[20px]">
            {service?.desc}
          </p>
          <h5 className="text-[20px] text-[#903636] leading-[22px] font-[500] mt-4">
            {service?.place}
          </h5>
          <p className="text-[13px] text-[#d4a051] leading-[14px] mt-[2px]">
            {service?.price}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ServicesCard;
