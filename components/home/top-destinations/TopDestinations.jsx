import React from "react";
import destination1 from "../../../assets/images/top-destinations/dest1.jpg";
import destination2 from "../../../assets/images/top-destinations/dest2.jpg";
import Slider from "react-slick";
import SectionHeader from "../../common/section-header/SectionHeader";
import TopDestinationCard from "./TopDestinationCard";

const TopDestination = [
  {
    id: "t1",
    image: destination1,
    cityName: "paris",
    countryName: "france",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod commodo consequat awesome dolore porem.",
  },
  {
    id: "t2",
    image: destination2,
    cityName: "venice",
    countryName: "italy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim on veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip extra one Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod commodo consequat awesome dolore porem.",
  },
];

const TopDestinations = ({services}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full py-[30px] md:py-[70px] bg-gray-5">
      <div className="w-full lg:max-w-[1170px] mx-auto px-[20px]">
        <SectionHeader
          headingPart1="Top"
          headingPart2="Destinations"
          subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
        />
        {/* slider */}
        <div>
          <Slider {...settings}>
            {TopDestination.map((destination) => {
              return (
                <TopDestinationCard
                  destination={destination}
                  key={destination.id}
                  services={services}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
