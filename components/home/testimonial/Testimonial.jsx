import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import SectionHeader from "../../common/section-header/SectionHeader";

const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function Testimonial() {
  return (
    <section className="w-full pt-[30px] pb-[70px] md:pb-[150px] bg-gray-50">
      <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0">
        <SectionHeader
          headingPart1="what customers"
          headingPart2="says"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
          whiteTheme
        />

        <div className="w-full mt-[50px]">
          <Slider {...settings}>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
            <div>
              <TestimonialCard />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
