import React from "react";
import Affiliates from "../components/common/affilitates/Affiliates";
import CTA from "../components/common/cta/CTA";
import ChooseUs from "../components/home/choose-us/ChooseUs";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import Testimonial from "../components/home/testimonial/Testimonial";
import Layout from "../components/Layout/Layout";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";

const services = [
  {
    place: "Hajj",
    price: "7,00000",
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
    img: Masjid_al_Haram,
  },
  {
    place: "Umrah",
    price: "2,00000",
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
    img: Madina,
  },
  {
    place: "Turkey",
    price: "1,00000",
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
    img: mosque,
  },
];

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ChooseUs />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Affiliates />
      <CTA />
      <Testimonial />
      <Services services={services} />
    </Layout>
  );
};

export default Home;
