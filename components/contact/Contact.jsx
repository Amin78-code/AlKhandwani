import Hero from "../common/hero/Hero";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="text-[#434e59] dark:text-[#fff]">
      <Hero page="Contact" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[20px] gap-y-[50px] py-[30px] md:py-[50px] lg:py-[70px] px-[20px]">
        <ContactForm />
        <div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
