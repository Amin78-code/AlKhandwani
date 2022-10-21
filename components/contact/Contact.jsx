import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import styles from "../../styles/ServicesDetails.module.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="mt-[8 0px] text-[#434e59] py-[8 0px]">
      <div className={`${styles.bgImage} mx-auto`}>
        <div className="flex flex-col justify-center items-center h-[300px] text-white">
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

      <div className="flex justify-center gap-x-[100px] py-[70px]">
        <ContactForm />

        <div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
