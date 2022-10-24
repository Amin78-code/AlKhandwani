import React from "react";
import Hero from "../components/common/hero/Hero";
import Service from "../components/home/services/Services";
import Layout from "../components/Layout/Layout";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";
import Islamabad from "../assets/images/islamabad.jpg";
import naran from "../assets/images/naran.jpg";
import lahore from "../assets/images/lahore.jpg";
import Affiliates from "../components/common/affilitates/Affiliates";
import ChooseUs from "../components/home/choose-us/ChooseUs";
import useCompanyServices from "../hooks/useCompanyServices";

// const services2 = [
//   {
//     title: "Hajj",
//     price: "7,00000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: Masjid_al_Haram,
//     slug: "hajj",
//   },
//   {
//     title: "Umrah",
//     price: "2,00000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: Madina,
//     slug: "umrah",
//   },
//   {
//     title: "Turkey",
//     price: "1,00000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: mosque,
//     slug: "turkey",
//   },

//   {
//     title: "Islamabad",
//     price: "20,000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: Islamabad,
//     slug: "islamabad",
//   },
//   {
//     title: "Naran",
//     price: "40,000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: naran,
//     slug: "naran",
//   },
//   {
//     title: "Lahore",
//     price: "20,000",
//     days: "20",
//     short_description:
//       'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
//     img: lahore,
//     slug: "lahore",
//   },
// ];

function Services() {
  const services = useCompanyServices();
  return (
    <Layout>
      <Hero page="service" />
      <Service
        services={services}
        headingPart1="Packages"
        headingPart2="We provide"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm"
        all
      />
      <ChooseUs py="py-[20px] md:pt-[40px] md:pb-[140px]" />
    </Layout>
  );
}

export default Services;
