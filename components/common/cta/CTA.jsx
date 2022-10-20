import styles from "../../../styles/CTA.module.css";

function CTA() {
  return (
    <section className="py-[150px] flex justify-center items-center relative before:absolute before:w-full before:h-[50%] before:bg-white before:top-0 before:left-0 after:absolute after:w-full after:h-[50%] after:bg-gray-50 after:left-0 after:bottom-0">
      <div
        className={`${styles.inset_shadow_2} max-w-[1100px] bg-white p-[50px] flex justify-between gap-x-10 rounded-[10px] relative z-[3]`}
      >
        <div className="flex justify-start items-center gap-x-5 w-[60%]">
          <div className="min-w-[80px] min-h-[80px] bg-[#903636] rounded-full"></div>
          <div>
            <h3 className="text-[20px]">Open for Appointments</h3>
            <p className="text-[16px]">
              Lorem Ipsum has been the industry&#39;s standard dummy text ever
              since the 1500s
            </p>
          </div>
        </div>
        <div className={`flex justify-end items-center gap-x-5 w-[40%]`}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-[#903636] rounded-lg text-md px-10 py-4 text-center"
          >
            Contact Us
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#903636] to-[#d4a051] hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-[#903636] dark:focus:ring-[#903636] rounded-lg text-md px-10 py-4 text-center"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
