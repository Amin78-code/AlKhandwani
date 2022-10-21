import React from "react";
import { IoIosClock } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function Icon({ clock, burgerMenu, facebook, twitter, youtube, className }) {
  return (
    <>
      {clock && <IoIosClock className={`${className}`} />}
      {burgerMenu && <FiMenu className={`${className}`} />}
      {facebook && <FaFacebookSquare className={`${className}`} />}
      {twitter && <FaTwitterSquare className={`${className}`} />}
      {youtube && <BsYoutube className={`${className}`} />}
    </>
  );
}

export default Icon;
