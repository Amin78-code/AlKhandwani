import packageImage from "../assets/images/services/package2015.jpg";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

function UseServices() {
  const router = useRouter();
  const slug = router.query.details;
  const [serviceDetails, setServiceDetails] = useState('');
  const [services, setServices] = useState([
    {
      slug: "hajj",
      title: "HAJJ",
      duration: "4 Days, 5 Nights",
      stars: 5,
      review: "3",
      code: "LMPROU",
      price: "$500",
      img: packageImage,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
    {
      slug: "umrah",
      title: "HAJJ",
      duration: "4 Days, 5 Nights",
      stars: 5,
      review: "3",
      code: "LMPROU",
      price: "$500",
      img: packageImage,
      detail_text:
        "The Hajj is a demonstration of the solidarity of the Muslim people and their submission to Allah. Muslims from all over the world gather once in a year in the holy city of Makkh and perform Hajj progression which is a symbol of being One Nation (Ummat e wahida). Hajj is a pilgrimage to holy city of Makkah in order to full fill the order of Allah ta’la in commemoration of sacrifice of Hazrat Ibrahim (A.S), his wife Hazrat Hajra and son Hazrat Ismail (A.S). It is currently the largest annual pilgrimage in the world, and is the fifth pillar of Islam, an obligation that must be carried out at least once in their lifetime by every able-bodied Muslim who can afford to do so. Serving pilgrims is not only a job rather it is divine duty and those who are sincerely involved in this field are blessed by Allah Subhanho wa Ta’ala. Team of Alkhandwani International Pvt limited have been offering appropriate Hajj packages with economical price carrying all reasonable facilities. Chief Executive of Alkhandwani International Pvt limited-Hafiz Muhammad Siddiq Khandwani has been supervising, managing and leading the Hajj groups as group leader since 1998. He has been performing his sacred duties with passion and zeal. He has executed 16 successful Hajj Operations as a group leader. His personal attention to every Pilgrim is the most significant feature of hajj Package of Alkhandwani International. Training sessions are conducted under the kind supervision of Qari Ziaur Rehman sahib- Khateeb o Imama Jama Masjid Bilal MACHS. The religious scholars and Mufti Hazraat are also accompanied with him for the religious guidance.",
      description: "",
      registration: "",
      reviews: "",
    },
  ]);

  useEffect(() => {
    services.map((value) => {
      if (value.slug == slug) {
        console.log("yes match");
        setServiceDetails(value);
      }
    });
  }, [slug]);

  return serviceDetails;
}

export default UseServices;
