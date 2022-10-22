import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

import styles from "../../styles/ServicesDetails.module.css";
import ServicesDescription from "./ServicesDescription";
import ServicesForm from "./ServicesForm";

const ServicesDetails = () => {
  return (
    <section className="mt-[8 0px] pb-[40px]">
      <div className={`${styles.bgImage} mx-auto`}>
        <div className="flex flex-col justify-center items-center h-[500px] text-white">
          <h1 className="text-[41px] font-bold">Package</h1>
          <div className="flex justify-center items-center  text-[15px]">
            <Link href={"/"}>
              <a className="">Home</a>
            </Link>
            <BsChevronRight />

            <span className="">Package Details</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-[50px] gap-x-[10px] gap-y-[40px] px-[20px] ">
        <ServicesDescription />
        <ServicesForm />
      </div>
    </section>
  );
};

export default ServicesDetails;
