import React from "react";
import Affiliates from "../components/common/affilitates/Affiliates";
import CTA from "../components/common/cta/CTA";
import ChooseUs from "../components/home/choose-us/ChooseUs";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import TopDestinations from "../components/home/top-destinations/TopDestinations";
import Testimonial from "../components/home/testimonial/Testimonial";
import Layout from "../components/Layout/Layout";
import IncrediblePlaces from "../components/home/incredible-places/IncrediblePlaces";
import UseServices from "../hooks/UseServices";

const Home = () => {
  const services = UseServices();
  return (
    <Layout>
      <Hero />
      <Services
        services={services}
        headingPart1="Popular"
        headingPart2="Packages"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
      />
      <TopDestinations />
      <ChooseUs />
      <CTA />
      <Testimonial />
      <Affiliates />
      <IncrediblePlaces />
    </Layout>
  );
};

export default Home;
