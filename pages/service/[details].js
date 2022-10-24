import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ServicesDetails from "../../components/sevices-details/ServicesDetails";
import packageImage from "../../assets/images/services/package2015.jpg";
import { Router, useRouter } from "next/router";
import UseServices from "../../hooks/useServices";

const Details = () => {
  const serviceDetails = UseServices();
  const router = useRouter();
  const slug = router.query.details;
  return (
    <Layout>
      <ServicesDetails serviceDetails={serviceDetails} />
    </Layout>
  );
};

export default Details;
