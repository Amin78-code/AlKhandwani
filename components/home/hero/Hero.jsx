import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";
import Button from "../../common/button/Button";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex justify-center items-center">
      <div
        className={`top-0 left-0 img-container w-full h-full absolute z-[-2]`}
      >
        <Image src={heroImage} layout="fill" />
      </div>
      <div
        className={`$ {styles.inset_shadow_1} bg-[#441f0d9f] w-full h-full absolute left-0 top-0 z-[-1]`}
      ></div>
      <div className="max-w-[840px] px-[20px] bg-[#44 1f0d9f] md:px-0 text-center text-white mt-[20px]">
        <h1 className="text-[40px] sm:text-[60px] md:text-[70px] leading-[40px] sm:leading-[60px] md:leading-[70px] font-[700]">
          Your Best <span className="text-[#d4a051]">Tour Choice</span>
        </h1>
        <p className="text-[16px] sm:text-[20px] leading-[22px] md:leading-[26px] font-[400] bg-[#000000ab ] p-[20px ] rounded-[10px] mt-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s
        </p>
        <Link href="/services">
          <a>
            <Button btn1 content={"Get Started"} className=" mr-2 mb-2 mt-8" />
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
