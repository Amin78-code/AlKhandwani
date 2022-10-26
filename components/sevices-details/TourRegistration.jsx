import React from "react";

const TourRegistration = ({ serviceDetails }) => {
  return (
    <div className="flex flex-col pt-[10px] text-[#434e59] dark:text-[#fff] text-[14px] md:text-[16px]">
      <h2 className="text-[21px] font-semibold mt-[20px] border-b border-[#e2cbcb] pb-[10px]">
        Registration
      </h2>
      <h6 className="font-semibold text-[16px] md:text-[18px] mt-[7px]">
        Pre Regitration Started
      </h6>
      <p>Sindh Government has announced the Provisional Quota for Pakistan.</p>
      <h6 className="font-semibold text-[16px] md:text-[18px] mt-[7px]">
        {serviceDetails?.registration}
      </h6>
      <p>Keep the Following Doucment Handly</p>
      <h6 className="font-semibold text-[16px] md:text-[18px] mt-[7px]">
        Docements Required:
      </h6>
      <ul className="flex flex-col gap-y-[5px] pt-[5px] list-disc pl-[17px]">
        <li>Two CNIC/NICOP Copies & Scanne</li>
        <li>Two Passport Copies (at least valid up to 01st March, 2023 )</li>
        <li>Four Pictures 3*4cm</li>
        <li>Mobile Number/ Landline Number</li>
        <li>Email Address</li>
        <li>Address (Home)</li>
        <li>Address (Office / Number)</li>
        <li>Nominee mobile number</li>
        <li>Nominee CNIC copy</li>
        <li>
          Nominee name (in case of emergency during travelling, must be Adult /
          Relative)
        </li>
      </ul>
    </div>
  );
};

export default TourRegistration;
