import React from "react";
import styles from "../../styles/Choose.module.css";
import styles2 from "../../styles/Hero.module.css";

const SubscribeUs = () => {
  return (
    <section className="w-full py-[30px ] pb-[12 0px] md:py-[70px ]">
      <div className={`${styles.parallax} h-[350px] pt-[45px] relative  `}>
        <div
          className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
        ></div>
        <div className="w-full max-w-[1170px] mx-auto px-[20px]  text-center  relative z-[3]">
          <div className="text-white flex flex-col gap-y-[40px]">
            <h3 className="text-[35px] font-bold ">
              SUBSCRIBE <span className="text-[#d4a051]">ALKHANDWANI </span>
            </h3>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonumm
            </p>
            <div className="flex justify-center items-center relative ">
              <input
                type="email"
                placeholder="Email"
                className="p-[30px] text-black w-[630px] h-[50px] border rounded-[30px] outline-none "
              />
              <button
                type="button"
                className="absolute right-[260px] text-white bg-[#903636] trans3 hover:bg-[#d4a051] hover:border-[#903636] rounded-[2.5rem] text-[18px] md:text-[15px] lg:text-[18px] px-10 py-2.5 text-center  "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeUs;
