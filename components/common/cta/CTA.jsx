import styles from "../../../styles/CTA.module.css";
import Button from "../button/Button";

function CTA() {
  return (
    <section className="py-[70px] md:py-[150px] relative before:absolute before:w-full before:h-[50%] before:bg-white before:top-0 before:left-0 after:absolute after:w-full after:h-[50%] after:bg-gray-50 after:left-0 after:bottom-0">
      <div className="flex justify-center items-center relative w-full max-w-[1400px] mx-auto px-[20px] sm:px-[40px] sc1440:px-0 ">
        <div
          className={`${styles.inset_shadow_2} max-w-[1100px] w-full bg-white p-[20px] sm:p-[50px] flex justify-between flex-col md:flex-row gap-x-10 gap-y-[20px] sm:gap-y-[40px] md:gap-y-0 rounded-[10px] relative z-[3]`}
        >
          <div className="flex justify-start items-center gap-x-5 w-full md:w-[55%]">
            <div className="min-w-[50px] min-h-[50px] sm:min-w-[80px] sm:min-h-[80px] bg-[#903636] rounded-full"></div>
            <div>
              <h3 className="text-[20px] sm:text-[22px]">Open for Appointments</h3>
              <p className="text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px]">
                Lorem Ipsum has been the industry&#39;s standard dummy text ever
                since the 1500s
              </p>
            </div>
          </div>
          <div
            className={`flex flex-row md:flex-col lg:flex-row gap-y-[10px] lg:gap-y-0 justify-start md:justify-end items-center gap-x-2 md:gap-x-6 w-full md:w-[45%]`}
          >
            <Button btn1 content="Contact Us" />
            <Button btn1 content="Our Services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
