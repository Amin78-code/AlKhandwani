import React from "react";
import Image from "next/image";
import aboutImg from "../../../assets/images/pexels-abdulaziz-asiri-12052403.jpg";

function Content() {
  return (
    <section className="w-full py-[30px] md:py-[70px] ">
      <div className="flex justify-center items-canter gap-x-[50px] w-full lg:max-w-[1440px]  mx-auto px-[20px]">
        {/* <div className="w-full h-[480px] img-container">
          <Image src={aboutImg} alt="img" />
        </div> */}
        <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px] w-full md:w-[570px ] py-[20px] md:py-[30px] lg:py-[40px] px-[30px] mx-auto lg:px-[30px] text-[#d4a051] ">
          <h4 className="text-[26px] md:text-[35px ] lg:text-[50px] leading-[20px] md:leading-[35px] lg:leading-[50px]">
            Air <span className="text-[#903636] ">Ticketing</span>
          </h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim on veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip extra one Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod commodo consequat awesome dolore
            porem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim on veniam, quis nostrud exercitation ullamco laboris
            nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim on veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip extra one Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod commodo consequat awesome dolore
            porem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim on veniam, quis nostrud exercitation ullamco laboris
            nisi, sed do eiusmod commodo consequat awesome dolore porem.Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            on veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim on veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip extra one Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod commodo consequat awesome dolore
            porem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim on veniam, quis nostrud exercitation ullamco laboris
            nisi, sed do eiusmod commodo consequat awesome dolore porem.Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            on veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;
