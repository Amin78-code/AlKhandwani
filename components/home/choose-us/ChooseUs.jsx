import React from "react";
import Image from "next/image";
import styles from "../../../styles/Choose.module.css";
import styles2 from "../../../styles/Hero.module.css";
import Slider from "react-slick";
import ChooseUsCard from "./ChooseUsCard";

const data = [
  {
    id: "c1",
    icon: "fa-plane",
    title: "Travel Arrangements",
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  },
  {
    id: "c2",
    icon: "fa-car",
    title: "Cheap Flights",
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  },
  {
    id: "c3",
    icon: "fa-plane",
    title: "Travel Arrangements ",
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  },
  {
    id: "c4",
    icon: "fa-car",
    title: "Cheap Flights",
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  },
];

const ChooseUs = ({ py }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className={`w-full  pb-[150px] sm:pb-[120px] mb-[230px] sm:mb-[180px] ${
          py ? py : "py-[30px] md:py-[70px] "
        }`}
      >
        <div className={`${styles.parallax} h-[350px] pt-[45px] relative  `}>
          <div
            className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
          ></div>
          <div className="w-full max-w-[1170px] mx-auto px-[20px]  text-center  relative z-[3]">
            <div className="text-white">
              <h3 className="text-[30px] md:text-[35px] leading-[36px] md:leading-[40px] font-bold ">
                WHY CHOOSE <span className="text-[#d4a051]">ALKHANDWANI </span>
              </h3>
              <p className="text-[20px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonumm
              </p>
            </div>
            {/* slider */}

            <div className="relative z-[3] pt-[50px]  ">
              <Slider {...settings}>
                {data.map((data) => {
                  return <ChooseUsCard data={data} key={data.id} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
