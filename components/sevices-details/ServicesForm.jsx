import React from "react";

const ServicesForm = () => {
  return (
    <div className="w-full lg:w-[280px] xl:w-[340px] flex flex-col text-[#434e59]">
      <h1 className="text-[20px] xl:text-[26px] p-[7px] xl:p-[10px] border text-center bg-gray-50">ENQUIRE NOW</h1>
      <div className="p-[10px] border ">
        <form className="text-[14px] md:text-[16px]">
          <div className="flex flex-col gap-y-[10px] ">
            <input
              type="text"
              placeholder="Name"
              className="dark:text-[#fff] p-[10px] border outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="dark:text-[#fff] p-[10px] border outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="dark:text-[#fff] p-[10px] border outline-none"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Requirements"
              className="dark:text-[#fff] p-[10px] border outline-none"
            ></textarea>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicesForm;
