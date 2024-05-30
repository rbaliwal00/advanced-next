import Image from "next/image";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addBanner } from "@public/assests";
import styles from "./index.module.css";
import AdsSwiper from "@components/ads-swiper";

const Ads = () => {
  return (
    <div
      className={`grid gap-8 justify-center border-r-[3px] border-r-white border-solid h-max p-4 ${styles["side-bar"]}`}
    >
      <div className={`text-start pl-7`}>
        <h1 className="text-3xl font-bold py-6">Why join Horecah</h1>
        <ul className="leading-[1.8rem] text-xl ">
          <li>2000+ Student cvs to select</li>
          <li>500+ Hotel to Apply</li>
          <li>100+ Suppliers ready for service</li>
        </ul>
      </div>
      <AdsSwiper width={400} />
    </div>
  );
};

export default Ads;
