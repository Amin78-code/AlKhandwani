import React from "react";

function SectionHeader({
  headingPart1,
  headingPart2,
  subtitle,
  className,
  whiteTheme,
}) {
  console.log("whiteTheme", whiteTheme);
  return (
    <div className={`text-center text-[#d4a051] ${className}`}>
      <h3 className="text-[30px] md:text-[35px] leading-[36px] md:leading-[40px] font-bold uppercase">
        {headingPart1}
        <span className="text-[#903636]"> {headingPart2}</span>
      </h3>
      {subtitle && (
        <p
          className={`text-[16px] md:text-[18px] leading-[20px] md:leading-[22px] pt-[5px] sm:pt0 ${
            whiteTheme ? "dark:text-[#333]" : "dark:text-[#fff]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
