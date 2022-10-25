import Link from "next/link";
import Icon from "../icon/Icon";
import styles from "../../../styles/ServicesDetails.module.css";

function Hero({ page, mainPage, slug }) {
  return (
    <div className={`${styles.bgImage} mx-auto`}>
      <div className="flex flex-col justify-center items-center h-[300px] md:h-[370px] text-white">
        <h1 className="text-[32px] md:text-[41px] leading-[40px] md:leading-[46px] font-bold capitalize mt-[20px] md:mt-0">{page}</h1>
        <div className="flex justify-center items-center  text-[15px]">
          <Link href={mainPage ? "/" + mainPage : "/"}>
            <a className="capitalize">{mainPage ? mainPage : "Home"}</a>
          </Link>
          <Icon chevronRight />
          <span className="capitalize">{page}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
