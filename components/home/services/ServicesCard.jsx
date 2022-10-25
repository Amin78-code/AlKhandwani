import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesCard({ service }) {
  return (
    <Link href={`/service/${service.slug}`}>
      <a className="w-[auto]">
        <div className="max-w-full sm:max-w-[430px] min-h-[220px] flex justify-center items-center overflow-hidden relative group">
          <div className="w-[130px] h-[20px] text-[11px] text-center text-white leading-[20px] img-container bg-[#d4a051] rotate-[-45deg] overflow-hidden shadow-[0_0_7px_2px_rgba(0,0,0,0.3)] absolute left-[-30px] top-[20px] z-[4]">
          {service.days} days tour
          </div>
          <div className="w-full min-h-[300px] img-container overflow-hidden absol ute left-0 top-0">
            <Image src={service.thumbnail} />
          </div>
          <div className="w-full h-[60px] trans3 group-hover:h-full group-hover:pb-6 flex justify-end items-center flex-col overflow-hidden bg-[#ffedda ] bg-[#903636]  border border-white dark:border-black text-center p-6 pb-[10px] absolute bottom-0 left-0">
            <p className="text-[14px] text-[#fff] leading-[20px] pt-[20px] my-auto">
              {service?.short_description}
            </p>
            <h5 className="text-[22px] text-[#fff] leading-[22px] font-[500] capitalize mt-4">
              {service?.title}
            </h5>
            <p className="text-[16px] text-[#dda24a] leading-[14px] font-bold mt-[4px]">
              Rs. {service?.price}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ServicesCard;
