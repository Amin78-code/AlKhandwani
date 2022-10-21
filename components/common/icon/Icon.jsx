import React from "react";
import { IoIosClock } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

function Icon({ clock, burgerMenu, facebook, className }) {
  return (
    <>
      {clock && <IoIosClock className={`${className}`} />}
      {burgerMenu && <FiMenu className={`${className}`} />}
      {facebook && <FaFacebookSquare className={`${className}`} />}
    </>
  );
}

export default Icon;
