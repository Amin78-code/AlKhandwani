import Image from "next/image";
import Logo from "../../../assets/images/logo/logo.png";

const Footer = () => (
  <footer
    className="relative before:absolute  before:bg-[#e7b262]

  lg:before:w-[37%] before:w-[100%]   before:left-0 before:top-0  before:h-[32%] lg:before:h-full 

  after:absolute  after:bg-[#903636] 

  lg:after:w-[63%] after:w-[100%]  after:right-[unset]  after:bottom-0 after:h-[68%] lg:after:right-0 lg:after:top-0 lg:after:h-full 

  "
  >
    <div className="max-w-[1170px] mx-auto  relative ">
      <div className="container relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
        <div className="lg:w-1/4 pb-12 lg:pb-0 bg -[#e7b262] text-[#903636]">
          <Image src={Logo} width={300} height={70} />
          <p className="text-[18px] leading-[20px] mt-[20px]">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col items-end bg- [#903636] text-[#e7b262]">
          <div className="sm:flex justify-between lg:justify-end ">
            <div className="lg:pr-24 pb-12 lg:pb-0">
              <h3 className="mb-6 text-lg   font-bold">Links</h3>
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
            <div className="lg:pr-24 pb-12 lg:pb-0">
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
              <h3 className="mb-6 text-lg   font-bold">About</h3>
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
          </div>
          <div className="lg:w-1/6 flex lg:justify-end items-end mt-12 lg:mt-5">
            <div className="bg-white p-2 rounded-full mr-2.5">
              <img src="https://cdn.tuk.dev/assets/templates/weCare/fb.png" />
            </div>
            <div className="bg-white p-2 rounded-full mr-2.5">
              <img src="https://cdn.tuk.dev/assets/templates/weCare/twitter.png" />
            </div>
            <div className="bg-white p-2 rounded-full mr-2.5">
              <img src="https://cdn.tuk.dev/assets/templates/weCare/yt.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
