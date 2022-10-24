import Image from "next/image";
import React from "react";
import img1 from "../../assets/images/instagram/1.webp";
import img2 from "../../assets/images/instagram/2.webp";
import img3 from "../../assets/images/instagram/3.webp";
import img4 from "../../assets/images/instagram/4.webp";
import SectionHeader from "../common/section-header/SectionHeader";

export default function Instagram() {
  return (
    <section className="w-full pt-[30px] pb-[20px] md:pt-[70px] md:pb-[20px] ">
      <div className="w-full  mx-auto px-[20px]">
        <SectionHeader
          headingPart1="FOLLOW US "
          headingPart2="ON INSTAGRAM"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
        />
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
          <div className="relative group cursor-pointer">
            <div className="img-container h-full">
              <Image src={img1} alt="img" />
            </div>
            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 trans3 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 20V20.001"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="img-container h-full">
              <Image src={img2} alt="img" />
            </div>
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 trans3 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 20V20.001"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="img-container h-full">
              <Image src={img3} alt="img" />
            </div>
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 trans3 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 20V20.001"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="img-container h-full">
              <Image src={img4} alt="img" />
            </div>
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 trans3 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <svg
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 20V20.001"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
