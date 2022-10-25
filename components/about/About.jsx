import React from "react";
import Image from "next/image";
import aboutImg from "../../assets/images/abdulaziz-asiri.jpg";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full py-[30px] md:py-[70px] ">
      <div className="flex flex-col lg:flex-row justify-center items-canter gap-x-[50px] w-full lg:max-w-[1440px]  mx-auto px-[20px]">
        <div className="w-full h-[480px] img-container">
          <Image src={aboutImg} alt="img" />
        </div>
        <div className="flex flex-col gap-y-[30px] lg:gap-y-[70px] w-full md:w-[570px ] py-[20px] md:py-[30px] lg:py-[40px] px-0 sm:px-[10px] md:px-[30px] mx-auto lg:px-[30px] text-[#d4a051] dark:text-[#fff]">
          <h4 className="text-[26px] md:text-[35px ] lg:text-[50px] leading-[20px] md:leading-[35px] lg:leading-[50px]">
            ABOUT <span className="text-[#903636] ">US</span>
          </h4>
          <p className="mt-[-10px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim on veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip extra one Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod commodo consequat awesome dolore
            porem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim on veniam, quis nostrud exercitation ullamco laboris
            nisi
          </p>
          <div className="flex gap-x-[30px]">
            <Link href={"/contact"}>
              <a>
                <button
                  type="button"
                  className="text-white border border-transparent bg-[#d4a051] trans3 hover:bg-white hover:text-[#333] hover:border hover:border-[#d4a051] rounded-[2.5rem] text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] px-3 sm:px-7 py-2.5 text-center  "
                >
                  Book Your Destination
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
