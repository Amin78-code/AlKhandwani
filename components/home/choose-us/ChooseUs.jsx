import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/images/feature-bg.jpg";
import styles from "../../../styles/Choose.module.css";
import styles2 from "../../../styles/Hero.module.css";

const ChooseUs = () => {
  return (
    <section className="max-w-[] relative  ">
      <div className={`${styles.parallax} h-[350px] pt-[45px] relative  `}>
        <div
          className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
        ></div>
        <div className="  text-center text-white relative z-[3] max-w-[1170px] mx-auto ">
          <h3 className="text-[35px] font-bold ">
            WHY CHOOSE <span className="text-[#FF5657]">TOURIST</span>
          </h3>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-[30px] relative z-[3]">
          <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[40px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#FF5657] group bg-white p-10 ">
            <i className="fa fa-car text-[35px] text-[#FF5657] border-[2px] border-[#FF6363] rounded-full p-5"></i>
            <h3 className="text-[21px]">Travel Arrangements</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration.
            </p>
            <button className=" py-[5px] px-[24px] border-[2px] border-[#FF5657] rounded-[30px] text-[#FF6363] group:hover:border-white group:hover:text-white">
              Read More
            </button>
          </div>
          <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[40px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#FF5657]  bg-white p-10 ">
            <i className="fa fa-car text-[35px] text-[#FF5657] border-[2px] border-[#FF6363] rounded-full p-5"></i>

            <h3 className="text-[21px]">Travel Arrangements</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration.
            </p>
            <button className=" py-[5px] px-[24px] border-[2px] border-[#FF5657] rounded-[30px] text-[#FF6363] group:hover:border-white group:hover:text-white">
              Read More
            </button>
          </div>
          <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[40px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#FF5657]  bg-white p-10 ">
            <i className="fa fa-plane text-[35px] text-[#FF5657] border-[2px] border-[#FF6363] rounded-full p-5"></i>

            <h3 className="text-[21px]">Travel Arrangements</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration.
            </p>
            <button className=" py-[5px] px-[24px] border-[2px] border-[#FF5657] rounded-[30px] text-[#FF6363] group:hover:border-white group:hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
