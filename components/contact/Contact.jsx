import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import styles from "../../styles/ServicesDetails.module.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="text-[#434e59] ">
      <div className={`${styles.bgImage} mx-auto w-full`}>
        <div className="flex flex-col justify-center items-center h-[500px]  text-white">
          <h1 className="text-[41px] font-bold">Contact</h1>
          <div className="flex justify-center items-center  text-[15px]">
            <Link href={"/"}>
              <a className="">Home</a>
            </Link>
            <BsChevronRight />
            <span className="">Contact</span>
          </div>
        </div>
      </div>
      {/* <h1 className="text-[31px] p-[10px] font-semibold   text-center">CONTACT NOW</h1> */}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[20px] gap-y-[50px] py-[50px] lg:py-[70px] px-[20px]">
        <ContactForm />

        <div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
