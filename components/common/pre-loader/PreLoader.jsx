import React from "react";

function PreLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] p-5 bg-gray-50 min-w-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-2 animate-pulse duration-[1.1s]">
          <div className="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
        </div>
        <h6 className="text-[22px] text-[#D4A051] pt-2">Loading</h6>
      </div>
    </div>
  );
}

export default PreLoader;
