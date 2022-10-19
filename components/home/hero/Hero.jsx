import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";

function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex justify-center items-center">
      <div className={`w-full h-full absolute z-[-1]`}>
        <Image src={heroImage} layout="fill" />
      </div>
      {/* overlay */}
      <div
        className={`${styles.inset_shadow_1} w-full h-full absolute left-0 top-0`}
      ></div>
      <div className="max-w-[600px] text-center text-white mt-[20px]">
        <h1 className="text-[70px] leading-[70px] bold">Your Best Tour Choice</h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </section>
  );
}

export default Hero;
