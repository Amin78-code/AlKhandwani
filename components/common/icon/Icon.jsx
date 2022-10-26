import { TbVaccine } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import { IoIosClock, IoMdClose } from "react-icons/io";
import { BsYoutube, BsChevronRight } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

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
  close,
  vaccine,
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
      {close && <IoMdClose className={`${className}`} />}
      {vaccine && <TbVaccine className={`${className}`} />}
    </>
  );
}

export default Icon;
