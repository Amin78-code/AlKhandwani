import React, { useState } from "react";

const ContactForm = () => {
  const [messageToSend, setMessageToSend] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandle = (e) => {
    setMessageToSend((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const contactMessage = (e) => {
    e.preventDefault();
    console.log("messageToSend", messageToSend);
  };
  return (
    <div className="flex flex-col text-[#434e59] dark:text-[#fff] w-full lg:w-[755px]">
      <div>
        <form onSubmit={contactMessage} className="text-[14px] md:text-[16px]">
          <div className="flex flex-col gap-y-[20px]">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="p-[15px] border  outline-none"
              onChange={(e) => changeHandle(e)}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="p-[15px] border  outline-none"
              onChange={(e) => changeHandle(e)}
            />
            <input
              type="number"
              id="phone"
              placeholder="Phone Number"
              className="p-[15px] border  outline-none"
              onChange={(e) => changeHandle(e)}
            />
            <textarea
              cols="30"
              rows="10"
              id="message"
              placeholder="Requirements"
              className="p-[15px] border outline-none"
              onChange={(e) => changeHandle(e)}
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
