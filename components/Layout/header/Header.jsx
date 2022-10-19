import Head from "next/head";

function Header() {
  return (
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
        className="text-white w-full h-[80px] absolute top-0 left-0 flex items-center"
      >
        <nav
          id="nav"
          class="w-full max-w-[1170px] mx-auto flex justify-between items-center"
        >
          <div class="logo">
            <a href="#home">logo</a>
          </div>
          <ul className="flex justify-between items-center gap-x-[20px]">
            <li class="font-[600]">
              <a href="#home" id="menu_home" class="menu-item active">
                HOME
              </a>
            </li>
            <li class="font-[600]">
              <a href="#about" id="menu_about" class="menu-item">
                ABOUT
              </a>
            </li>
            <li class="font-[600]">
              <a href="#appointment" id="menu_appointment" class="menu-item">
                SERVICES
              </a>
            </li>
            <li class="font-[600]">
              <a href="#departments" id="menu_departments" class="menu-item">
                HAJJ
              </a>
            </li>
            <li class="font-[600]">
              <a href="#doctors" id="menu_doctors" class="menu-item">
                UMRAH
              </a>
            </li>
            <li class="font-[600]">
              <a href="#services" id="menu_services" class="menu-item">
                AIR TICKTING
              </a>
            </li>

            <li class="font-[600]">
              <a href="#contact" id="menu_contact" class="menu-item">
                CONTACTS
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
