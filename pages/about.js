import React from "react";
import Hero from "../components/common/hero/Hero";
import Testimonial from "../components/home/testimonial/Testimonial";
import About from "../components/about/About";
import Layout from "../components/Layout/Layout";
import SubscribeUs from "../components/about/SubscribeUs";
import Instagram from "../components/about/Instagram";

const about = () => {
  return (
    <Layout>
      <Hero page={"about"} />
      <About />
      {/* <Testimonial /> */}
      <SubscribeUs /> 
      <Instagram /> 
    </Layout>
  );
};

export default about;
