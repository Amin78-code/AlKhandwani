import React from "react";
import styles from "../../styles/Choose.module.css";
import styles2 from "../../styles/Hero.module.css";

const SubscribeUs = () => {
  return (
    <section className="w-full py-[30px]  md:py-[70px]">
      <div
        className={`${styles.parallax} py-[50px] md:py-0 md:h-[400px] relative flex justify-center items-center`}
      >
        <div
          className={`${styles2.inset_shadow_1} bg-[#00000080] w-full h-full absolute left-0 top-0 z-[1]`}
        ></div>
        <div className="w-full max-w-[1170px] mx-auto px-[20px] text-center relative z-[3] mt-[-10p x]">
          <div className="text-white flex flex-col gap-y-[15px] md:gap-y-[30px]">
            <div>
              <h3 className="text-[30px] md:text-[35px] leading-[36px] md:leading-[40px] font-bold ">
                SUBSCRIBE <span className="text-[#d4a051]">ALKHANDWANI </span>
              </h3>
              <p className="text-[16px] md:text-[18px] leading-[20px] md:leading-[22px] pt-[5px] sm:pt0 mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonumm
              </p>
            </div>
            <div
              className="flex justify-center items-center w-full sm:w-[80%] md:w-[630px] mx-auto"
            >
              <div className="relative left-0 top-0 h-[60px] w-full mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="p-[25px] md:p-[30px] text-[#333] dark:text-[#fff] h-[15px] w-full mx-auto md:h-[50px] border rounded-[30px] outline-none absolute left-0 top-0"
              />
              <button
                type="button"
                className=" absolute top-[7px] right-[10px] z-1 text-white bg-[#903636] trans3 hover:bg-[#d4a051] hover:border-[#903636] rounded-[2.5rem] text-[14px] md:text-[15px] lg:text-[18px] px-7 md:px-10 py-2 md:py-2.5 text-center  "
              >
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeUs;
