import React from "react";
import styles from "../../../styles/ServicesDetails.module.css";
import Link from "next/link";
import Icon from "../icon/Icon";
import About from "../../about/About";
import CustomerReviews from "../../about/CustomerReviews";

function Hero({ page, slug }) {
  return (
    <>
      <div className={`${styles.bgImage} mx-auto`}>
        <div className="flex flex-col justify-center items-center h-[370px] text-white">
          <h1 className="text-[41px] font-bold capitalize">{page}</h1>
          <div className="flex justify-center items-center  text-[15px]">
            <Link href={"/"}>
              <a className="">Home</a>
            </Link>
            <Icon chevronRight />
            <span className="capitalize">{page}</span>
          </div>
        </div>
      </div>
      <About />
      {/* <CustomerReviews /> */}
      
    </>
  );
}

export default Hero;
