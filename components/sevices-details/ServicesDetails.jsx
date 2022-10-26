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
        <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0 flex flex-col lg:flex-row justify-center mt-[20px] md:mt-[50px] gap-x-[10px] gap-y-[40px] pb-[40px]">
          <ServicesDescription serviceDetails={serviceDetails} />
          <ServicesForm />
        </div>
      )}
    </section>
  );
};

export default ServicesDetails;
