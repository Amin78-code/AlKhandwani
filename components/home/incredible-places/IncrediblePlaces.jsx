import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import img1 from "../../../assets/images/incredible-places/1.jpg";
import img2 from "../../../assets/images/incredible-places/2.jpg";
import img3 from "../../../assets/images/incredible-places/3.jpg";
import img4 from "../../../assets/images/incredible-places/4.jpg";
const sliderData = [
  { id: "s1", sliderImage: img1 },
  { id: "s2", sliderImage: img2 },
  { id: "s3", sliderImage: img3 },
  { id: "s4", sliderImage: img4 },
  { id: "s5", sliderImage: img2 },
  { id: "s6", sliderImage: img3 },
  { id: "s7", sliderImage: img1 },
  { id: "s8", sliderImage: img4 },
];

const IncrediblePlaces = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-[40px] md:py-[100px] px-[15px]">
      <div className="">
        <div className=" text-center text-[#d4a051]">
          <h3 className="text-[35px] font-bold uppercase">
            Most<span className="text-[#903636]"> Incredible Places</span>
          </h3>
          <p className="text-[18px] text-[#333]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
        {/* slider */}
        <div className="mt-[20px] md:mt-[50px]">
          <Slider {...settings}>
            {sliderData.map((data) => {
              return (
                <div key={data.id} className="mb-[20px] px-[5px]">
                  <Image src={data.sliderImage} alt="img" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default IncrediblePlaces;
