import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/images/feature-bg.jpg";
import styles from "../../../styles/Choose.module.css";
import styles2 from "../../../styles/Hero.module.css";
import Slider from "react-slick";

const ChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <section className=" relative mb-[300px] mt-[40px]">
        <div className={`${styles.parallax} h-[350px] pt-[45px] relative  `}>
          <div
            className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
          ></div>
          <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0 text-center text-white relative z-[3]">
            <h3 className="text-[35px] font-bold ">
              WHY CHOOSE <span className="text-[#d4a051]">TOURIST</span>
            </h3>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonumm
            </p>
          </div>
          {/* slider */}

          <div className="relative z-[3] pt-[50px] ml-[96px]">
            <Slider {...settings}>
<<<<<<< Updated upstream
            <div>
                <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[20px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#d4a051] hover:text-white  bg-white p-10 group  ">
                  <i className="fa fa-car text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] group-hover:text-white group-hover:border-[#FFF] rounded-full p-5"></i>
=======
              <div>
                <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[20px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#d4a051]  bg-white p-10  ">
                  <i className="fa fa-car text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] rounded-full p-5"></i>
>>>>>>> Stashed changes
                  <h3 className="text-[21px]">Travel Arrangements</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration.
                  </p>
<<<<<<< Updated upstream
                    <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black rounded-lg text-sm px-7 py-2.5 text-center  "
            >
             Read More
            </button>
=======
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                  >
                    Read More
                  </button>
>>>>>>> Stashed changes
                </div>
              </div>
              <div>
                <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[20px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#d4a051] hover:text-white  bg-white p-10 group ">
                  <i className="fa fa-car text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] group-hover:text-white group-hover:border-[#FFF] rounded-full p-5"></i>

                  <h3 className="text-[21px]">Cheap Flights</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration.
                  </p>
<<<<<<< Updated upstream
                    <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black rounded-lg text-sm px-7 py-2.5 text-center  "
            >
             Read More
            </button>
=======
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                  >
                    Read More
                  </button>
>>>>>>> Stashed changes
                </div>
              </div>
              <div>
                <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[20px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#d4a051] hover:text-white  bg-white p-10 group ">
                  <i className="fa fa-plane text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] group-hover:text-white group-hover:border-[#FFF] rounded-full p-5"></i>

                  <h3 className="text-[21px]">Best Price Guaarantee</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration.
                  </p>
<<<<<<< Updated upstream
                    <button
              type="button"
              className="text-white bg-[#d4a051] group-hover:bg-white group-hover:text-black rounded-lg text-sm px-7 py-2.5 text-center  "
            >
             Read More
            </button>
=======
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                  >
                    Read More
                  </button>
>>>>>>> Stashed changes
                </div>
              </div>
              <div>
                <div className="w-[360px] h-[379px] flex justify-center flex-col gap-y-[20px] items-center  shadow-[0px_0px_10px_0px_rgb(255,99,99,35%)] hover:bg-[#d4a051] hover:text-white  bg-white p-10 group ">
                  <i className="fa fa-plane text-[35px] text-[#d4a051] border-[2px] border-[#d4a051] group-hover:text-white group-hover:border-[#FFF] rounded-full p-5"></i>

                  <h3 className="text-[21px]">Cheap Flights</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration.
                  </p>
<<<<<<< Updated upstream
                    <button
              type="button"
              className="text-white bg-[#d4a051]  rounded-lg text-sm px-7 py-2.5 text-center  "
            >
             Read More
            </button>
=======
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                  >
                    Read More
                  </button>
>>>>>>> Stashed changes
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
