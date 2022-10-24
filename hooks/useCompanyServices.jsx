import { useEffect, useState } from "react";
import packageImage from "../assets/images/services/package2015.jpg";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";
import islamabad from "../assets/images/islamabad.jpg";
import naran from "../assets/images/naran.jpg";
import lahore from "../assets/images/lahore.jpg";
import data from "../data"

function useCompanyServices() {

  const [services, setServices] = useState(data.data);
  return services;
}
export default useCompanyServices;
