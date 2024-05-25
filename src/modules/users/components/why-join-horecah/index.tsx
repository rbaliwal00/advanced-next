import { addBanner } from "@public/assests";
import Image from "next/image";
import React from "react";

const WhyJoinHorecah = () => {
  return (
    <div className="w-1/2 flex justify-center">
      <div className=" pt-4">
        <div className={`text-start pl-7`}>
          <h1 className="text-[23.04px] md:text-3xl font-[600] pt-2">
            Why join Horecah
          </h1>
          <ul className="leading-[1.8rem] text-[13.33px] text-[#8899A8] ">
            <li>2000+ Student cvs to select</li>
            <li>500+ Hotel to Apply</li>
            <li>100+ Suppliers ready for service</li>
          </ul>
        </div>
        <div className="">
          <Image src={addBanner} width={350} height={300} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinHorecah;
