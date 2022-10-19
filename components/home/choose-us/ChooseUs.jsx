import React from "react";
import Image from "next/image";
import bgImage from "../../../assets/images/feature-bg.jpg";

const ChooseUs = () => {
  return (
    <section>
      <Image src={bgImage} alt="bg-image" />
    </section>
  );  
};

export default ChooseUs;
