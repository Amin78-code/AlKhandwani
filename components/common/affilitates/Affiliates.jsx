import Image from "next/image";
import Company1 from "../../../assets/images/companies/1(1).jpg";
import Company2 from "../../../assets/images/companies/1(2).jpg";
import Company3 from "../../../assets/images/companies/1(3).jpg";
import Company4 from "../../../assets/images/companies/1(4).jpg";
import Company5 from "../../../assets/images/companies/1(5).jpg";
import Company6 from "../../../assets/images/companies/1(6).jpg";

function Affiliates() {
  return (
    <section className="bg-[#903636 ] bg-gray-100 py-[40px] border border-l-0 border-r-0">
      <div className=" text-center text-[#d4a051] py-[40px]">
          <h3 className="text-[35px] font-bold uppercase">
            Top<span className="text-[#903636]"> Destinations</span>
          </h3>
          <p className="text-[18px] text-[#000]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm
          </p>
        </div>
      <div className="w-full max-w-[1400px] mx-auto px-[20px] sc1440:px-0 flex flex-wrap justify-center gap-x-[3%] gap-y-[10px]">
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company1}  alt="img" />
        </div>
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company2} alt="img" />
        </div>
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company3} alt="img" />
        </div>
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company4} alt="img" />
        </div>
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company5} alt="img" />
        </div>
        <div className="w-[110px] h-[110px] rounded-[10px] img-container overflow-hidden border">
          <Image src={Company6} alt="img" />
        </div>
      </div>
      {/* 903636 */}
      {/* d4a051 */}
    </section>
  );
}

export default Affiliates;
