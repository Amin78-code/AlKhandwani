import Image from "next/image";
import Logo from "../../../assets/images/logo/logo.png";
import islamabad from "../../../assets/images/latest-tour/islamabad.jpg";
import kashmir from "../../../assets/images/latest-tour/kashmir.jpg";
import muree from "../../../assets/images/latest-tour/muree.jpg";
import LatestTourCard from "./latest-tour-card/LatestTourCard";
import Icon from "../../common/icon/Icon";

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

  lg:before:w-[37%] before:w-[100%]   before:left-0 before:top-0  before:h-[32%] lg:before:h-full 

  after:absolute  after:bg-[#903636] 

  lg:after:w-[63%] after:w-[100%]  after:right-[unset]  after:bottom-0 after:h-[68%] lg:after:right-0 lg:after:top-0 lg:after:h-full 

  "
  >
    <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0  relative ">
      <div className="container relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
        <div className="lg:w-1/4 pb-12 lg:pb-0 bg -[#e7b262] text-[#903636]">
          <Image src={Logo} width={340} height={80} />
          <p className="text-[18px] leading-[20px] mt-[20px] mb-4">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className="mb-4">Email: abc@email.com</p>
          <p className="mb-4">
            Telephone: <a href="tel:000-000-000">000-000-000</a>
          </p>
          <div className="flex lg:justify-left items-left mt-12 lg:mt-5">
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5">
                <Icon facebook className={"text-[20px] text-[#1877F2]"} />
              </div>
            </a>
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5">
                <Icon twitter className={"text-[20px] text-[#1D9BF0]"} />
              </div>
            </a>
            <a href="#">
              <div className="bg-[#fff] p-2 rounded-[5px] mr-2.5">
                <Icon youtube className={"text-[20px] text-[#FF0000]"} />
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col items-end bg- [#903636] text-[#e7b262] pt-[50px] md:pt-0">
          <div className="w-full sm:flex justify-between  ">
            <div className="lg:pr-10 pb-12 lg:pb-0">
              <h3 className="mb-6 text-lg   font-bold">Links</h3>
              <ul className=" ">
                <li className="mb-3">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">About</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Services</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Hajj</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Umrah</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Air Tickting</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
            <div className="lg:pr-10 pb-12 lg:pb-0">
              <h3 className="mb-6 text-lg   font-bold">Services</h3>
              <ul className=" ">
                <li className="mb-3">
                  <a href="javascript:void(0)">Products</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Claims</a>
                </li>
                <li className="mb-3">
                  <a href="javascript:void(0)">Renewals</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Support</a>
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
