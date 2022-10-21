import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesCard({ service }) {
  return (
    <Link href="/services/details">
      <a className="w-[auto]">
        <div className="max-w-full sm:max-w-[430px] min-h-[220px] flex justify-center items-center overflow-hidden relative group">
          <div className="w-[130px] h-[20px] text-[11px] text-center text-white leading-[20px] img-container bg-[#903636] rotate-[-45deg] overflow-hidden absolute left-[-30px] top-[20px] z-[4]">
            20 days tour
          </div>
          <div className="w-full h-[270 px] img-container overflow-hidden absol ute left-0 top-0">
            <Image src={service.img} />
          </div>
          <div className="h-[50px] trans3 group-hover:h-full group-hover:pb-6 flex justify-end items-center flex-col overflow-hidden bg-[#ffedda] border text-center p-6 pb-[5px] absolute bottom-0 left-0">
            <p className="text-[14px] text-[#000] leading-[20px] pb-[20px]">
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
    </Link>
  );
}

export default ServicesCard;
