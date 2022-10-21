import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="mt-[80px] text-[#434e59] py-[80px]">
            <h1 className="text-[31px] p-[10px] font-semibold   text-center">CONTACT NOW</h1>

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
