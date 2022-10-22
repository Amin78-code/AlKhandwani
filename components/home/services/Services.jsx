import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import ServicesCard from "./ServicesCard";
import SectionHeader from "../../common/section-header/SectionHeader";

function Services({ services, headingPart1, headingPart2, subtitle }) {
  return (
    <section className="w-full py-[40px] md:py-[70px] bg-gray-5 0">
      <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0">
        <SectionHeader
          headingPart1={headingPart1}
          headingPart2={headingPart2}
          subtitle={subtitle}
        />
        {/* <div className=" text-center text-[#d4a051]  ">
          <h3 className="text-[35px] font-bold uppercase">
            Popular<span className="text-[#903636]"> Packages</span>
          </h3>
          <p className="text-[18px] text-[#333]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div> */}
        <div className="w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-6 mt-[50px]">
          {services?.map((value, index) => {
            return <ServicesCard key={value.place + index} service={value} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
