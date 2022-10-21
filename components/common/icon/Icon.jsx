import React from "react";
import { IoIosClock } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Icon({ clock, burgerMenu, className }) {
  return (
    <>
      {clock && <IoIosClock className={`${className}`} />}
      {burgerMenu && <FiMenu className={`${className}`} />}
    </>
  );
}

export default Icon;
