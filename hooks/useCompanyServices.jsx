import { useEffect, useState } from "react";
import packageImage from "../assets/images/services/package2015.jpg";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";
import islamabad from "../assets/images/islamabad.jpg";
import naran from "../assets/images/naran.jpg";
import lahore from "../assets/images/lahore.jpg";

function useCompanyServices() {
  const [services, setServices] = useState([
    {
      title: "HAJJ",
      days: "30",
      price: "7,00000",
      short_description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
      img: packageImage,
      slug: "hajj",
      duration: "30 Days, 30 Nights",
      stars: 5,
      review: "3",
      code: "LMPROU",
      thumbnail: Masjid_al_Haram,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      slug: "umrah",
      title: "HAJJ",
      days: "20",
      duration: "20 Days, 20 Nights",
      stars: 5,
      review: "3",
      code: "LMPROU",
      price: "1,20,000",
      thumbnail: Madina,
      img: packageImage,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      title: "Turkey",
      price: "1,00000",
      days: "11",
      short_description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
      img: packageImage,
      slug: "turkey",
      duration: "11 Days, 11 Nights",
      stars: 5,
      review: "34",
      code: "LMPROU",
      thumbnail: mosque,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      title: "islamabad",
      price: "20,000",
      days: "25",
      short_description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
      img: packageImage,
      slug: "islamabad",
      duration: "25 Days, 25 Nights",
      stars: 5,
      review: "64",
      code: "LMPROU",
      thumbnail: islamabad,
      detail_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      title: "naran",
      price: "40,000",
      days: "22",
      short_description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
      img: packageImage,
      slug: "naran",
      duration: "22 Days, 22 Nights",
      stars: 5,
      review: "13",
      code: "LMPROU",
      thumbnail: naran,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      title: "lahore",
      price: "20,000",
      days: "19",
      short_description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.',
      img: packageImage,
      slug: "lahore",
      duration: "19 Days, 19 Nights",
      stars: 5,
      review: "3",
      code: "LMPROU",
      thumbnail: lahore,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
  ]);
  return services;
}
export default useCompanyServices;
