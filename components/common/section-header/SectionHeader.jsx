import React from "react";

function SectionHeader({ headingPart1, headingPart2, subtitle, className }) {
  return (
    <div className={`text-center text-[#d4a051] ${className}`}>
      <h3 className="text-[35px] font-bold uppercase">
        {headingPart1}
        <span className="text-[#903636]"> {headingPart2}</span>
      </h3>
      {subtitle && <p className="text-[18px] text-[#333]">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
