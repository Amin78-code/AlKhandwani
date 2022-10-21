import React from "react";

function Button({ btn1, content, className }) {
  return (
    <>
      {btn1 && (
        <button
          type="button"
          className={`${className} w-full max-w-[200px] sm:max-w-full sm:w-[190px] lg:w-[auto] text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-[#903636] rounded-lg text-sm sm:text-md px-5 py-2.5 sm:px-10 sm:py-4 text-center`}
        >
          {content}
        </button>
      )}
    </>
  );
}

export default Button;
