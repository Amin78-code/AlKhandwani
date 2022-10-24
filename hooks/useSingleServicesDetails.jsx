import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import packageImage from "../assets/images/services/package2015.jpg";
import Masjid_al_Haram from "../assets/images/Masjid-ul-Haram-1.jpg";
import Madina from "../assets/images/madina.jpg";
import mosque from "../assets/images/mosque-gb86620f9b_1280.jpg";
import islamabad from "../assets/images/islamabad.jpg";
import naran from "../assets/images/naran.jpg";
import lahore from "../assets/images/lahore.jpg";
import Profile1 from "../assets/images/profile/profile1.png";
import data from "../data"


function useSingleServicesDetails() {
  const router = useRouter();
  const slug = router.query.details;
  const [serviceDetails, setServiceDetails] = useState("");
  const [services, setServices] = useState(data.data);

  useEffect(() => {
    services.map((value) => {
      // console.log("slug", slug);
      // console.log("value.slug", value.slug);
      if (value.slug == slug) {
        // console.log("yes match");
        setServiceDetails(value);
      }
    });
  }, [slug]);

  return serviceDetails;
}

export default useSingleServicesDetails;
