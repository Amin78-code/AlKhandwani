import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import styles from "../../styles/ServicesDetails.module.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import Hero from "../common/hero/Hero";

const Contact = () => {
  return (
    <div className="text-[#434e59] ">
      <Hero page="Contact" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[20px] gap-y-[50px] py-[30px] md:py-[50px] lg:py-[70px] px-[20px]">
        <ContactForm />
        <div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
