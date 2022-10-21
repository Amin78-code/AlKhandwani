import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className=" text-[#434e59] w-[575px]">
      <h2 className="text-[25px] font-semibold text-left">Contact Details</h2>
      <div className="flex flex-col gap-y-[35px] pt-[18px]">
        <div className="flex gap-x-[15px] items-center">
          <div className="p-3 border bg-[#d4a051] text-white rounded-md mb-[30px]">
            <ImLocation className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">ADDRESS</h3>
            <p> Muhammad Ali Society Center,</p>
            <p>Near Standard Chartered Bank,</p>
            <p>Muhammad Ali Cooperative Housing Society, Karachi,Pakistan.</p>
          </div>
        </div>
        <div className="flex gap-x-[15px] items-center">
          <div className="p-3 border bg-[#d4a051] text-white rounded-md">
            <IoIosContact className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">CALL US</h3>
            <span>+92 300-8248285</span>
          </div>
        </div>
        <div className="flex gap-x-[15px] items-center">
          <div className="p-3 border bg-[#d4a051] text-white rounded-md">
            <BsFillTelephoneFill className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">TELEPHONE</h3>
            <span>+9221-34168186 +9221-35449238</span>
          </div>
        </div>
        <div className="flex gap-x-[15px] items-center">
          <div className="p-3 border bg-[#d4a051] text-white rounded-md">
            <FaFax className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">FAX</h3>
            <span>+9221-34168186</span>
          </div>
        </div>
        <div className="flex gap-x-[15px] items-center">
          <div className="p-3 border bg-[#d4a051] text-white rounded-md">
            <MdEmail className="text-[35px]" />
          </div>
          <div>
            <h3 className="text-[21px] font-semibold">EMAIL</h3>
            <span className="hover:underline"><a href="">alkhandwani90@hotmail.com</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
