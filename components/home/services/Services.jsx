import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <section className="w-full py-[100px] bg-gray-300">
      <div className="max-w-[1170px] mx-auto">
        <div className=" text-center text-[#d4a051]  ">
          <h3 className="text-[35px] font-bold uppercase">
            our<span className="text-[#903636]"> services</span>
          </h3>
          <p className="text-[18px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        <div className="w-full flex justify-between items-center gap-x-6 mt-[50px]">
          <a href="#">
          <ServicesCard />
          </a>
          <a href="#">
          <ServicesCard />
          </a>
          <a href="#">
          <ServicesCard />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
