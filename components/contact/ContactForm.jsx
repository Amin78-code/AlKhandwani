import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col text-[#434e59]">
      <div className="p-[10px]  ">
        <form>
          <div className="flex flex-col gap-y-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="p-[15px] border w-[500px] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-[15px] border w-[500px] outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="p-[15px] border w-[500px] outline-none"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Requirements"
              className="p-[15px] border outline-none"
            ></textarea>
            <button
              type="button"
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
