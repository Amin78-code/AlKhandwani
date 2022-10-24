import React from "react";

function PreLoader() {
  return (
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
      <div className="flex flex-col justify-center items-center">
        <div class="flex space-x-2 animate-pulse duration-[1.1s]">
          <div class="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
          <div class="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
          <div class="w-[14px] h-[14px] bg-[#903636] rounded-full"></div>
        </div>
        <h6 className="text-[22px] text-[#D4A051] pt-2">Loading</h6>
      </div>
    </div>
  );
}

export default PreLoader;
