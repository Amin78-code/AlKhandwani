import React from "react";
import ChooseUs from "../components/home/choose-us/ChooseUs";
import Hero from "../components/home/hero/Hero";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ChooseUs />
    </Layout>
  );
};

export default Home;
