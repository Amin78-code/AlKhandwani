import Link from "next/link";
import React from "react";

const ChooseUsCard = ({ data }) => {
  return (
    <Link href={"/about"}>
        <a>
      <div className="w-full sm:w-[300px] md:w-[360px] lg:w-[300px] xl:w-[360px] h-[379px] mx-auto flex justify-center flex-col gap-y-[20px] mb-[20px] items-center border hover:border-transparent trans3 hover:bg-[#d4a051] hover:text-white  bg-white p-10 group cursor-pointer  ">
        <i
          className={`fa ${data.icon} text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] trans3 group-hover:text-white group-hover:border-[#FFF] rounded-full p-5`}
        ></i>
        <h3 className="text-[21px] sm:text-[16px] lg:text-[21px] font-semibold">
          {data.title}
        </h3>
        <p>{data.content}</p>
        <button
          type="button"
          className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-[#333] rounded-lg text-sm px-7 py-2.5 text-center  "
        >
          Read More
        </button>
      </div>
      </a>
    </Link>
  );
};

export default ChooseUsCard;
