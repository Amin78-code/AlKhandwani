import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ServicesDetails from "../../components/sevices-details/ServicesDetails"; 
import useSingleServicesDetails from "../../hooks/useSingleServicesDetails";

const Details = () => { 
  const serviceDetails = useSingleServicesDetails();
  return (
    <Layout>
      <ServicesDetails serviceDetails={serviceDetails} />
    </Layout>
  );
};

export default Details;
