import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <section className="w-full py-[100px] bg-gray-50">
      <div className="max-w-[1170px] mx-auto">
        <div className=" text-center text-[#d4a051]  ">
          <h3 className="text-[35px] font-bold uppercase">
            what customers <span className="text-[#903636]">says</span>
          </h3>
          <p className="text-[18px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        <div className="w-full flex justify-between items-center mt-[50px]">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
