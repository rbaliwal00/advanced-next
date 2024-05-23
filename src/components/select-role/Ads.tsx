
import Image from "next/image";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addBanner } from "@public/assests";
import styles from './index.module.css'

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

// interface DemoSliderProps {
//   data: Slide[];
// }

const Ads = (data: Slide[]) => {
  return (
    <div className={`grid gap-8 justify-center border-r-[3px] border-r-white border-solid ${styles['side-bar']}`}>
      <div className={`text-center `}>
        <h1 className="text-3xl font-bold py-6">Why join Horecah</h1>
        <ul className="leading-[1.8rem] text-xl">
          <li>2000+ Student cvs to select</li>
          <li>500+ Hotel to Apply</li>
          <li>100+ Suppliers ready for service</li>
        </ul>
      </div>
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="center"
        style={{ textAlign: "center", margin: "auto", width: "400px" }}
      >
        {[1, 2, 3].map((el: number) => (
          <SwiperSlide key={el}>
            <Image src={addBanner} width={800} height={400} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ads;
