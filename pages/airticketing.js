import React from "react"; 
import Layout from "../components/Layout/Layout";  
import Hero from "../components/common/hero/Hero"; 
import SubscribeUs from "../components/about/SubscribeUs";
import Instagram from "../components/about/Instagram";
import Content from "../components/air-ticketing/content/Content";

const AirTicketing = () => {
  return (
    <Layout> 
      <Hero page="Air Ticketing" />
      <Content /> 
      <SubscribeUs />
      <Instagram />
    </Layout>
  );
};

export default AirTicketing;
