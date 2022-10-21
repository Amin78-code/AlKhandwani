import React from "react";
import Image from "next/image";
import destination1 from "../../../assets/images/top-destinations/dest1.jpg";
import destination2 from "../../../assets/images/top-destinations/dest2.jpg";
import Slider from "react-slick";

const TopDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <section className="w-full py-[100px] bg-gray-5 0">
      <div className="max-w-[1170px] mx-auto">
        <div className=" text-center text-[#d4a051]">
          <h3 className="text-[35px] font-bold uppercase">
            Top<span className="text-[#903636]"> Destinations</span>
          </h3>
          <p className="text-[18px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        {/* slider */}
        <div>
          <Slider {...settings}>
            <div>
              <div className="flex gap-x-[30px] shadow-[0px_0px_10px_0px_rgb(209,209,209,0.35)] mt-[50px]">
                <div className="w-[570px] h-[572px]">
                  <Image src={destination1} alt="img" />
                </div>
                <div className="flex flex-col gap-y-[50px] w-[570px] pt-[77px] px-[30px]">
                  <div>
                    <span className="text-[50px]"> PARIS</span>,
                    <span className="text-[#903636] text-[50px]"> FRANCE</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim on veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip extra one Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod commodo consequat awesome dolore porem.
                  </p>
                  <div className="flex gap-x-[30px]">
                    <button
                      type="button"
                      className="text-white border border-transparent bg-[#d4a051] hover:bg-white hover:text-black hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[18px] px-7 py-2.5 text-center  "
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      className="text-white border border-transparent bg-[#903636] hover:bg-white hover:text-black hover:border hover:border-[#903636] rounded-[2.5rem] text-[18px] px-7 py-2.5 text-center  "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-x-[30px] shadow-[0px_0px_10px_0px_rgb(209,209,209,0.35)] mt-[50px]">
                <div className="w-[570px] h-[572px]">
                  <Image src={destination2} alt="img" />
                </div>
                <div className="flex flex-col gap-y-[50px] w-[570px] pt-[77px] px-[30px]">
                  <div>
                    <span className="text-[50px]"> VENICE</span>,
                    <span className="text-[#903636] text-[50px]"> ITALY</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim on veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip extra one Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod commodo consequat awesome dolore porem.
                  </p>
                  <div className="flex gap-x-[30px]">
                    <button
                      type="button"
                      className="text-white border border-transparent bg-[#d4a051] hover:bg-white hover:text-black hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[18px] px-7 py-2.5 text-center  "
                    >
                      More Details
                    </button>
                    <button
                      type="button"
                      className="text-white border border-transparent bg-[#903636] hover:bg-white hover:text-black hover:border hover:border-[#903636] rounded-[2.5rem] text-[18px] px-7 py-2.5 text-center  "
                    >
                      Book Now
                    </button>
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
