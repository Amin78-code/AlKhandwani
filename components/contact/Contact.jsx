import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="mt-[80px] pb-[40px]">
      <div className="flex justify-center gap-x-[100px]">
        <ContactForm />

        <div>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
