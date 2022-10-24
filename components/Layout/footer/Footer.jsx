import Image from "next/image";
import Logo from "../../../assets/images/logo/logo.png";
import islamabad from "../../../assets/images/latest-tour/islamabad.jpg";
import kashmir from "../../../assets/images/latest-tour/kashmir.jpg";
import muree from "../../../assets/images/latest-tour/muree.jpg";
import LatestTourCard from "./latest-tour-card/LatestTourCard";
import Icon from "../../common/icon/Icon";
import Link from "next/link";

const latestTours = [
  {
    title: "15 days tour",
    place: "islamabad",
    duration: "3 days",
    img: islamabad,
  },
  {
    title: "20 days tour",
    place: "kashmir",
    duration: "3 days",
    img: kashmir,
  },
  {
    title: "25 days tour",
    place: "muree",
    duration: "3 days",
    img: muree,
  },
];

const Footer = () => (
  <footer
    className="relative before:absolute  before:bg-[#e7b262]

  lg:before:w-[37%] before:w-[100%]   before:left-0 before:top-0  before:h-[47%] lg:before:h-full 

  after:absolute  after:bg-[#903636] 

  lg:after:w-[63%] after:w-[100%]  after:right-[unset]  after:bottom-0 after:h-[53%] lg:after:right-0 lg:after:top-0 lg:after:h-full 

  "
  >
    <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0  relative ">
      <div className="container relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-[80px] pb-6 lg:pb-[80px]">
        <div className="lg:w-1/4 pb-12 lg:pb-0 bg -[#e7b262] text-[#903636]">
          <Image src={Logo} width={340} height={80} />
          <p className="mb-4 mt-10">
            <strong>Email:</strong>
            <a href="mailto:abc@email.com"> abc@email.com</a>
          </p>
          <p className="mb-4">
            <strong>Telephone:</strong>
            <a href="tel:000-000-000"> 000-000-000</a>
          </p>
          <p className="text-[18px] leading-[26px] mt-[20px] mb-4">
            <strong>Address:</strong> 4140 Parker Rd. Allentown, New Mexico
            31134
          </p>
          <div className="flex lg:justify-left items-left mt-12 lg:mt-10">
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5 flex flex-wrap gap-x-2 items-center capitalize text-[12px] group">
                <Icon
                  facebook
                  className={
                    "text-[20px] text-[#1877F2] trans3 group-hover:scale-[1.6]"
                  }
                />
                facebook
              </div>
            </a>
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5 flex flex-wrap gap-x-2 items-center capitalize text-[12px] group">
                <Icon
                  twitter
                  className={
                    "text-[20px] text-[#1D9BF0] trans3 group-hover:scale-[1.6]"
                  }
                />
                twitter
              </div>
            </a>
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5 flex flex-wrap gap-x-2 items-center capitalize text-[12px] group">
                <Icon
                  youtube
                  className={
                    "text-[20px] text-[#FF0000] trans3 group-hover:scale-[1.6]"
                  }
                />
                youtube
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col items-end bg- [#903636] text-[#e7b262] pt-[100px] md:pt-0">
          <div className="w-full sm:flex justify-between  ">
            <div className="lg:pr-10 pb-12 lg:pb-0">
              <h3 className="mb-6 text-lg   font-bold">Links</h3>
              <ul className=" ">
                <li className="mb-3">
                  <Link href="home">
                    <a className="trans3 hover:text-white">Home</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">About</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Services</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Hajj</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Umrah</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Air Tickting</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="trans3 hover:text-white">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:pr-10 pb-12 lg:pb-0">
              <h3 className="mb-6 text-lg font-bold">Services</h3>
              <ul className=" ">
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Products</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Claims</a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="">
                    <a className="trans3 hover:text-white">Renewals</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="trans3 hover:text-white">Support</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg   font-bold">Latest Tour Packages</h3>
              <div className="flex flex-col justify-start items-center gap-y-3">
                {latestTours?.map((value, index) => {
                  return (
                    <LatestTourCard
                      key={value.title + index}
                      tour={value}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
