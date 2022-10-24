import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ServicesDetails from "../../components/sevices-details/ServicesDetails";
import UseServiceDetails from "../../hooks/UseServiceDetails";

const Details = () => {
  const serviceDetails = UseServiceDetails();
  return (
    <Layout>
      <ServicesDetails serviceDetails={serviceDetails} />
    </Layout>
  );
};

export default Details;
