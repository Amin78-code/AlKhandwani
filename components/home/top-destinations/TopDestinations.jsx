import React from "react";
import Image from "next/image";
import destination1 from "../../../assets/images/top-destinations/dest1.jpg";
import destination2 from "../../../assets/images/top-destinations/dest2.jpg";
import Slider from "react-slick";
import SectionHeader from "../../common/section-header/SectionHeader";

const TopDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full py-[30px] md:py-[70px] bg-gray-5 0">
      <div className="w-full lg:max-w-[1170px]  mx-auto px-[20px]">
        <SectionHeader
          headingPart1="Top"
          headingPart2="Destinations"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
        />
        {/* slider */}
        <div>
          <Slider {...settings}>
            <div>
              <div className="flex flex-col md:flex-row gap-x-[30px] border md:border-none mx-[2px] md:shadow-[0px_0px_25px_7px_rgb(209,209,209,0.35)] mt-[50px] rounded-[10px] overflow-hidden md:mx-[30px] mb-[30px] cursor-pointer">
                <div className="w-full md:max-w-[500px] lg:max-h-[520px] img-container">
                  <Image src={destination1} alt="img" />
                </div>
                <div className="flex flex-col gap-y-[30px] lg:gap-y-[50px] w-full md:w-[570px ] py-[20px] md:py-[30px] lg:py-[77px] px-[30px] mx-auto lg:px-[30px] ">
                  <h4 className="text-[26px] md:text-[35px] lg:text-[50px] leading-[20px] md:leading-[35px] lg:leading-[50px]">
                    PARIS, <span className="text-[#903636] ">FRANCE</span>
                  </h4>

                  <p className="mt-[-10px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim on veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip extra one Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod commodo consequat awesome dolore porem.
                  </p>
                  <div className="flex gap-x-[10px]">
                    <button
                      type="button"
                      className="text-white border border-transparent bg-[#d4a051] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[18px] md:text-[15px] lg:text-[18px] px-7 py-2.5 text-center  "
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      className="hidden md:block text-white border border-transparent bg-[#903636] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#903636] rounded-[2.5rem] text-[18px] md:text-[15px] lg:text-[18px] px-7 py-2.5 text-center  "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex flex-col md:flex-row gap-x-[30px] border md:border-none mx-[2px] md:shadow-[0px_0px_25px_7px_rgb(209,209,209,0.35)] mt-[50px] rounded-[10px] overflow-hidden md:mx-[30px] mb-[30px] cursor-pointer">
                  <div className="w-full md:max-w-[500px] lg:max-h-[520px] img-container">
                    <Image src={destination2} alt="img" />
                  </div>
                  <div className="flex flex-col gap-y-[30px] lg:gap-y-[50px] w-full md:w-[570px] pt-[10px] lg:pt-[77px] px-[10px] mx-auto lg:px-[30px] pb-10">
                    <div>
                      <span className="text-[22px] md:text-[35px] lg:text-[50px]">
                        {" "}
                        VENICE
                      </span>
                      ,
                      <span className="text-[#903636] text-[22px] md:text-[35px] lg:text-[50px]">
                        {" "}
                        ITALY
                      </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim on veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip extra one
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod commodo consequat awesome dolore porem.
                    </p>
                    <div className="flex gap-x-[30px]">
                      <button
                        type="button"
                        className="text-white border border-transparent bg-[#d4a051] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[18px] md:text-[15px] lg:text-[18px] px-7 py-2.5 text-center  "
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        className="hidden md:block text-white border border-transparent bg-[#903636] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#903636] rounded-[2.5rem] text-[18px] md:text-[15px] lg:text-[18px] px-7 py-2.5 text-center  "
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
