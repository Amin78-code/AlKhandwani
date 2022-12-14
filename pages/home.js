import React from "react";
import Affiliates from "../components/common/affilitates/Affiliates";
import CTA from "../components/common/cta/CTA";
import ChooseUs from "../components/home/choose-us/ChooseUs";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import TopDestinations from "../components/home/top-destinations/TopDestinations";
import Testimonial from "../components/home/testimonial/Testimonial";
import Layout from "../components/Layout/Layout";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";
import IncrediblePlaces from "../components/home/incredible-places/IncrediblePlaces";
import useCompanyServices from "../hooks/useCompanyServices";

// const services = [
//   {
//     title: "Hajj",
//     price: "7,00000",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     thumbnail: Masjid_al_Haram,
//     days: "20 days",
//   },
//   {
//     title: "Umrah",
//     price: "2,00000",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     thumbnail: Madina,
//     days: "10 days",
//   },
//   {
//     title: "Turkey",
//     price: "1,00000",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     thumbnail: mosque,
//     days: "24 days",
//   },
// ];

const Home = () => { 
  const services = useCompanyServices()
  return (
    <Layout>
      <Hero />
      <Services
        services={services}
        headingPart1="Popular"
        headingPart2="Packages"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
      />
      <TopDestinations services={services}  />
      <ChooseUs />
      <CTA />
      <Testimonial />
      <Affiliates />
      <IncrediblePlaces />
    </Layout>
  );
};

export default Home;
