import React from "react";
import Hero from "../components/common/hero/Hero";
import Testimonial from "../components/home/testimonial/Testimonial";
import About from "../components/about/About";
import Layout from "../components/Layout/Layout";

const about = () => {
  return (
    <Layout>
      <Hero page={"about"} />
      <About />
      <Testimonial />
    </Layout>
  );
};

export default about;
