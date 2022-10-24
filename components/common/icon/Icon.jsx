import React from "react";
import { IoIosClock } from "react-icons/io";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import { BsYoutube, BsChevronRight } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

function Icon({
  clock,
  burgerMenu,
  facebook,
  twitter,
  youtube,
  chevronRight,
  cancel,
  call,
  className,
}) {
  return (
    <>
      {clock && <IoIosClock className={`${className}`} />}
      {burgerMenu && <FiMenu className={`${className}`} />}
      {cancel && <MdOutlineCancel className={`${className}`} />}
      {facebook && <FaFacebookSquare className={`${className}`} />}
      {twitter && <FaTwitterSquare className={`${className}`} />}
      {youtube && <BsYoutube className={`${className}`} />}
      {chevronRight && <BsChevronRight className={`${className}`} />}
      {call && <FiPhoneCall className={`${className}`} />}
    </>
  );
}

export default Icon;
