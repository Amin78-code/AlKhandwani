import React from "react";
import img1 from "../../assets/images/instagram/1.webp";
import img2 from "../../assets/images/instagram/2.webp";
import img3 from "../../assets/images/instagram/3.webp";
import img4 from "../../assets/images/instagram/4.webp";
import SectionHeader from "../common/section-header/SectionHeader";
import InstragramCard from "./InstragramCard";

const gallery = [
  { id: "g1", image: img1 },
  { id: "g2", image: img2 },
  { id: "g3", image: img3 },
  { id: "g4", image: img4 },
];

export default function Instagram() {
  return (
    <section className="w-full pt-[10px] sm:pt-[30px] pb-[20px] sm:pb-[50px]">
      <div className="w-full  mx-auto px-[20px]">
        <SectionHeader
          headingPart1="FOLLOW US "
          headingPart2="ON INSTAGRAM"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
        />
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-[20px] md:mt-10">
          {gallery.map((gallery) => {
            return <InstragramCard key={gallery.id} gallery = {gallery}  /> 
          })}
        </div>
      </div>
    </section>
  );
}
