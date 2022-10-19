import heroImage from "../../../assets/images/Masjid-ul-Haram-3.jpg";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";

function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex justify-center items-center">
      <div className={`w-full h-full absolute z-[-2]`}>
        <Image src={heroImage} layout="fill" />
      </div>
      {/* overlay */}
      <div
        className={`${styles.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[-1]`}
      ></div>
      <div className="max-w-[700px] text-center text-white mt-[20px]">
        <h1 className="text-[70px] leading-[70px] font-[700]">Your Best Tour Choice</h1>
        <p className="text-[18px] leading-[24px] font-[400] bg-[#000000ab] p-[20px] rounded-[10px] mt-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-md px-10 py-4 text-center mr-2 mb-2 mt-4">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
