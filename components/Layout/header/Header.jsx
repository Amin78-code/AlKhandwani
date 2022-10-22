import styles from "../../../styles/Header.module.css";
import Image from "next/image";
import Head from "next/head";
import Logo from "../../../assets/images/logo/logo.png";
import Icon from "../../common/icon/Icon";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const slug = router.route;
  const [showMobMenu, setShowMobMenu] = useState(false);
  return (
    <Fragment>
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <header
          id="header"
          className={`text-white w-full h-[80px] absolute top-0 left-0 flex items-center `}
        >
          <nav
            id="nav"
            className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0 flex justify-between items-center"
          >
            <div className="logo">
              <Link href="/">
                <a>
                  <Image src={Logo} width={200} height={44} />
                </a>
              </Link>
            </div>
            <ul className="hidden lg:flex justify-between items-center gap-x-[24px]">
              <Link href="/">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    HOME
                  </li>
                </a>
              </Link>

              <Link href="/about">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/about" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    ABOUT
                  </li>
                </a>
              </Link>

              <Link href="/service">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/service" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    SERVICES
                  </li>
                </a>
              </Link>

              <Link href="/services/hajj">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/services/hajj" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    HAJJ
                  </li>
                </a>
              </Link>

              <Link href="/services/umrah">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/services/umrah" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    UMRAH
                  </li>
                </a>
              </Link>

              <Link href="/air-tickting">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/air-tickting" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    AIR TICKTING
                  </li>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <li
                    className={`text-[12px] xl:text-[15px] font-[600] trans3 hover:text-[#903636] cursor-pointer ${
                      slug == "/contact" &&
                      "text-[#fff] bg-[#D4A051] py-[3px] px-2.5 rounded-[5px]"
                    }`}
                  >
                    CONTACT
                  </li>
                </a>
              </Link>
              <a href="tel:+92 300-8248285">
                <li>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                  >
                    Call Now
                  </button>
                </li>
              </a>
            </ul>
            <span
              className="block lg:hidden"
              onClick={() => setShowMobMenu(!showMobMenu)}
            >
              <Icon
                burgerMenu
                className={
                  " text-[30px] px-1.5 py-1 border broder-white w-[50px] h-[40px] rounded-[5px] cursor-pointer relative z-[3]"
                }
              />
            </span>
          </nav>
        </header>
      </div>
      {showMobMenu == true ? (
        <div className="fixed w-full h-[100vh] bg-[#D4A051] z-[11]">
          <div className="logo p-5">
            <Link href="/">
              <a>
                <Image src={Logo} width={200} height={44} />
              </a>
            </Link>
          </div>
          <ul className=" h-full hidde n lg: flex justify-start items-center flex-col gap-y-[25px ] pt-[10%]">
            <Link href="/">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  HOME
                </li>
              </a>
            </Link>

            <Link href="/about">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/about" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  ABOUT
                </li>
              </a>
            </Link>

            <Link href="/service">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/service" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  SERVICES
                </li>
              </a>
            </Link>

            <Link href="/services/hajj">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/services/hajj" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  HAJJ
                </li>
              </a>
            </Link>

            <Link href="/services/umrah">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/services/umrah" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  UMRAH
                </li>
              </a>
            </Link>

            <Link href="/air-tickting">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/air-tickting" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  AIR TICKTING
                </li>
              </a>
            </Link>

            <Link href="/contact">
              <a className="w-full block text-center">
                <li
                  className={` text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] cursor-pointer py-3 ${
                    slug == "/contact" && "bg-[#903636] text-[#D4A051]"
                  }`}
                >
                  CONTACT
                </li>
              </a>
            </Link>
            <li>
              {/* <button
                type="button"
                className="text-[#fff] bg-[#903636] hover:bg-[#d4a051] hover:border-[#903636] hover:text-[#903636] border-[1px] border-[transparent] group-hover:text-[#333] rounded-lg text-sm px-14 py-3 text-center mt-4"
              >
                Call Now
              </button> */}
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Header;
