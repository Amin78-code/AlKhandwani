import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img from "../../assets/images/profile/profile1.png";

const reviews = [
  {
    id: "r1",
    title: "What customers says",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one LoremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one Lorem",
    image: img,
    name: "Mark Anthony",
    position: "CEO Of Alkhandwani",
  },
  //   {
  //     id: "r2",
  //     title: "What customers says",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one LoremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one Lorem",
  //     image: img,
  //     name: "Mark Anthony",
  //     position: "CEO Of Alkhandwani",
  //   },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className=" py-[30px] md:py-[50px] bg-[#903636] text-[#d4a051] my-[100px]">
      <div className=" w-full lg:max-w-[1170px]  mx-auto px-[20px]">
        {/* slider */}
        <div>
          <Slider {...settings}>
            {reviews.map((review) => {
              return (
                <>
                  <div key={review.id}>
                    <div className="flex flex-col gap-y-[40px] justify-center items-center ">
                      <h3 className="text-[35px] font-bold uppercase">
                        What Customer Says
                      </h3>
                      <div className="text-[18px]">{review.content}</div>
                      <div className="flex gap-x-[30px] items-center">
                        <div className="w-[100px] h-[100px] ">
                          <Image
                            src={review.image}
                            alt="img"
                            className="img-container border rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span>{review.name}</span>
                          <span>{review.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
