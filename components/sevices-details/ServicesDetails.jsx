import React from "react";
import Link from "next/link";
import styles from "../../styles/ServicesDetails.module.css";
import ServicesDescription from "./ServicesDescription";
import ServicesForm from "./ServicesForm";

const ServicesDetails = () => {
  return (
    <section className="mt-[80px] pb-[40px]">
      <div className={`${styles.bgImage} h-[350px] mx-auto`}>
        <div className="flex flex-col justify-center items-center h-[350px] text-white">
          <h1 className="text-[41px] font-bold">Package</h1>
          <div className="text-[15px]">
            <Link href={"/"}>
              <a className="">Home</a>
            </Link>
            <span className="">Package Details</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px] gap-x-[40px] ">
        <ServicesDescription />
        <ServicesForm />
      </div>
    </section>
  );
};

export default ServicesDetails;
