import styles from "../../../styles/Header.module.css";
import Image from "next/image";
import Head from "next/head";
import Logo from "../../../assets/images/logo/logo.png";
import Icon from "../../common/icon/Icon";
import { Fragment, useState } from "react";

function Header() {
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
              <a href="#home">
                <Image src={Logo} width={200} height={44} />
              </a>
            </div>
            <ul className="hidden lg:flex justify-between items-center gap-x-[26px]">
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a href="#home" id="menu_home" className="menu-item active">
                  HOME
                </a>
              </li>
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a href="#about" id="menu_about" className="menu-item">
                  ABOUT
                </a>
              </li>
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a
                  href="#appointment"
                  id="menu_appointment"
                  className="menu-item"
                >
                  SERVICES
                </a>
              </li>
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a
                  href="#departments"
                  id="menu_departments"
                  className="menu-item"
                >
                  HAJJ
                </a>
              </li>
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a href="#doctors" id="menu_doctors" className="menu-item">
                  UMRAH
                </a>
              </li>
              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a href="#services" id="menu_services" className="menu-item">
                  AIR TICKTING
                </a>
              </li>

              <li className="text-[12px] xl:text-[16px] font-[600]">
                <a href="#contact" id="menu_contact" className="menu-item">
                  CONTACT
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-purple-800 rounded-lg text-sm px-7 py-2.5 text-center"
                >
                  Call Now
                </button>
              </li>
            </ul>
            <span onClick={() => setShowMobMenu(!showMobMenu)}>
              <Icon
                burgerMenu
                className={
                  "block lg:hidden text-[30px] px-1.5 py-1 border broder-white w-[50px] h-[40px] rounded-[5px] cursor-pointer relative z-[3]"
                }
              />
            </span>
          </nav>
        </header>
      </div>
      {showMobMenu == true ? (
        <div className="fixed w-full h-[100vh] bg-[#D4A051] z-[2]">
          <div className="logo p-5">
            <a href="#home">
              <Image src={Logo} width={200} height={44} />
            </a>
          </div>
          <ul className=" h-full hidde n lg: flex justify-start items-center flex-col gap-y-[25px ] pt-[10%]">
            <li className="w-full text-center">
              <a
                href="#home"
                id="menu_home"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3 active"
              >
                HOME
              </a>
            </li>
            <li className="w-full text-center">
              <a
                href="#about"
                id="menu_about"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                ABOUT
              </a>
            </li>
            <li className="w-full text-center">
              <a
                href="#appointment"
                id="menu_appointment"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                SERVICES
              </a>
            </li>
            <li className="w-full text-center">
              <a
                href="#departments"
                id="menu_departments"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                HAJJ
              </a>
            </li>
            <li className="w-full text-center">
              <a
                href="#doctors"
                id="menu_doctors"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                UMRAH
              </a>
            </li>
            <li className="w-full text-center">
              <a
                href="#services"
                id="menu_services"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                AIR TICKTING
              </a>
            </li>

            <li className="w-full text-center">
              <a
                href="#contact"
                id="menu_contact"
                className=" text-[#903636] hover:text-[#D4A051] hover:bg-[#903636] block w-full text-[20px] font-[600] py-3"
              >
                CONTACT
              </a>
            </li>
            <li>
             
              {/* <button
                type="button"
                className="text-[#fff] bg-[#903636] hover:bg-[#d4a051] hover:border-[#903636] hover:text-[#903636] border-[1px] border-[transparent] group-hover:text-black rounded-lg text-sm px-14 py-3 text-center mt-4"
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
