import React from "react";
import Link from "next/link";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <div className=" text-[#434e59] dark:text-[#fff] w-full lg:w-[500px] px-[20px] pt-[10px]">
      <h2 className="text-[25px] font-semibold text-center lg:text-left">
        Contact Details
      </h2>
      <div className="flex flex-col gap-y-[35px] pt-[18px]">
        <div className="flex flex-col text-center sm:text-left items-center sm:flex-row sm:items-start gap-y-[10px] sm:gap-y-0 gap-x-[15px]">
          <div className="p-3 border-0 sm:border bg-[#d4a051] text-white rounded-md ">
            <ImLocation className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">ADDRESS</h3>
            <p className="hover:underline"> Muhammad Ali Society Center,</p>
            <p className="hover:underline">Near Standard Chartered Bank,</p>
            <p className="hover:underline">
              Muhammad Ali Cooperative Housing Society, Karachi,Pakistan.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center sm:text-left items-center sm:flex-row sm:items-center gap-y-[10px] sm:gap-y-0 gap-x-[15px]">
          <div className="p-3 border-0 sm:border bg-[#d4a051] text-white rounded-md">
            <IoIosContact className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">CALL US</h3>
            <span className="hover:underline">
              <Link href="tel:+923008248285">
                <a>+92 300-8248285</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-center sm:text-left items-center sm:flex-row sm:items-center gap-y-[10px] sm:gap-y-0 gap-x-[15px]">
          <div className="p-3 border-0 sm:border bg-[#d4a051] text-white rounded-md">
            <BsFillTelephoneFill className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">TELEPHONE</h3>
            <span className="hover:underline">
              <Link href="tel:+922134168186">
                <a>+9221-34168186</a>
              </Link>
            </span>
            <span className="hover:underline">
              <Link href="tel:+9221-35449238">
                <a>+9221-35449238</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-center sm:text-left items-center sm:flex-row sm:items-center gap-y-[10px] sm:gap-y-0 gap-x-[15px]">
          <div className="p-3 border-0 sm:border bg-[#d4a051] text-white rounded-md">
            <FaFax className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">FAX</h3>
            <span className="hover:underline">
              <Link href="tel:+922134168186">
                <a>+9221-34168186</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-center sm:text-left items-center sm:flex-row sm:items-center gap-y-[10px] sm:gap-y-0 gap-x-[15px]">
          <div className="p-3 border-0 sm:border bg-[#d4a051] text-white rounded-md">
            <MdEmail className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">EMAIL</h3>
            <span className="hover:underline">
              <Link href="mailto:alkhandwani90@hotmail.com">
                <a>alkhandwani90@hotmail.com</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
