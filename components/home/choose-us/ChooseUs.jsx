import React from "react";
import Image from "next/image";
import styles from "../../../styles/Choose.module.css";
import styles2 from "../../../styles/Hero.module.css";
import Slider from "react-slick";

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

const ChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
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
      <section className="w-full py-[30px] pb-[120px] md:py-[100px] mb-[230px] sm:mb-[180px]">
        <div className={`${styles.parallax} h-[350px] pt-[45px] relative  `}>
          <div
            className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
          ></div>
          <div className="w-full max-w-[1170px] mx-auto px-[20px]  text-center  relative z-[3]">
            <div className="text-white">
              <h3 className="text-[35px] font-bold ">
                WHY CHOOSE <span className="text-[#d4a051]">TOURIST</span>
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
                  return (
                    <>
                      <div>
                        <div className="w-full sm:w-[300px] md:w-[360px] lg:w-[300px] xl:w-[360px] h-[379px] mx-auto flex justify-center flex-col gap-y-[20px] mb-[20px] items-center  border hover:border-transparent hover:bg-[#d4a051] hover:text-white  bg-white p-10 group  ">
                          <i
                            className={`fa ${data.icon} text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] group-hover:text-white group-hover:border-[#FFF] rounded-full p-5`}
                          ></i>
                          <h3 className="text-[21px] sm:text-[16px] lg:text-[21px] font-semibold">
                            {data.title}
                          </h3>
                          <p>{data.content}</p>
                          <button
                            type="button"
                            className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black rounded-lg text-sm px-7 py-2.5 text-center  "
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </>
                  );
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
