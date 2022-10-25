import Hero from "../common/hero/Hero";
import ServicesForm from "./ServicesForm";
import PreLoader from "../common/pre-loader/PreLoader";
import ServicesDescription from "./ServicesDescription";

const ServicesDetails = ({ serviceDetails }) => {
  return (
    <section>
      <Hero mainPage="services" page={serviceDetails.title} />
      {serviceDetails == "" ? (
        <PreLoader />
      ) : (
        <div className="flex flex-col lg:flex-row justify-center mt-[20px] md:mt-[50px] gap-x-[10px] gap-y-[40px] px-[20px] pb-[40px]">
          <ServicesDescription serviceDetails={serviceDetails} />
          <ServicesForm />
        </div>
      )}
    </section>
  );
};

export default ServicesDetails;
