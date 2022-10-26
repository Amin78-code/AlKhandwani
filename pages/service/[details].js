import Layout from "../../components/Layout/Layout";
import useSingleServicesDetails from "../../hooks/useSingleServicesDetails";
import ServicesDetails from "../../components/sevices-details/ServicesDetails";

const Details = () => {
  const serviceDetails = useSingleServicesDetails();
  return (
    <Layout>
      <ServicesDetails serviceDetails={serviceDetails} />
    </Layout>
  );
};

export default Details;
