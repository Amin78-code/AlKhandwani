import React from "react";
import styles from "../../styles/ServicesDetails.module.css";
import ServicesDescription from "./ServicesDescription";
import ServicesForm from "./ServicesForm";

const ServicesDetails = () => {
  return (
    <section className="mt-[80px] pb-[40px]">
      <div className={`${styles.bgImage} h-[235px] mx-auto`} />
      <div className="flex justify-center mt-[50px] gap-x-[40px] ">
       <ServicesDescription />
        <ServicesForm />
      </div>
    </section>
  );
};

export default ServicesDetails;
