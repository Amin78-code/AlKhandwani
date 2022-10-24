import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

import styles from "../../styles/ServicesDetails.module.css";
import ServicesDescription from "./ServicesDescription";
import ServicesForm from "./ServicesForm";
import Hero from "../common/hero/Hero";

const ServicesDetails = ({ serviceDetails }) => {
  return (
    <section className="mt-[8 0px] pb-[40px]">
      <Hero page="Package Details" />
      <div className="flex flex-col lg:flex-row justify-center mt-[50px] gap-x-[10px] gap-y-[40px] px-[20px] ">
        <ServicesDescription serviceDetails={serviceDetails} />
        <ServicesForm />
      </div>
    </section>
  );
};

export default ServicesDetails;
