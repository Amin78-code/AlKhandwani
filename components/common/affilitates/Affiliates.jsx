import Image from "next/image";
import Slider from "react-slick";
import Company1 from "../../../assets/images/companies/1(1).jpg";
import Company2 from "../../../assets/images/companies/1(2).jpg";
import Company3 from "../../../assets/images/companies/1(3).jpg";
import Company4 from "../../../assets/images/companies/1(4).jpg";
import Company5 from "../../../assets/images/companies/1(5).jpg";
import Company6 from "../../../assets/images/companies/1(6).jpg";
import SectionHeader from "../section-header/SectionHeader";

function Affiliates() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="bg-[#903636 ] bg-gray-100 py-[50px] border border-l-0 border-r-0">
      <div className="w-full lg:max-w-[1170px]  mx-auto px-[20px]">
        <SectionHeader
          headingPart1="Affiliation"
          headingPart2="With"
          className="pb-[20px]"
        />
        <div className="mx-auto">
          <Slider {...settings}>
            <div>
              <Image src={Company1} alt="img" />
            </div>
            <div>
              <Image src={Company2} alt="img" />
            </div>
            <div>
              <Image src={Company3} alt="img" />
            </div>
            <div>
              <Image src={Company4} alt="img" />
            </div>
            <div>
              <Image src={Company5} alt="img" />
            </div>
            <div>
              <Image src={Company6} alt="img" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Affiliates;
