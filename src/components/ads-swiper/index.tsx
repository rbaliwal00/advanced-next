import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { addBanner } from "@public/assests";

const AdsSwiper = ({ width }: any) => {
  return (
    <Swiper
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{ delay: 2000 }}
      loop
      modules={[Navigation, Pagination, Autoplay]}
      className="center xs:w-200"
      style={{
        textAlign: "center",
        margin: "auto",
        width: "100%",
        maxWidth: width,
      }}
    >
      {[1, 2, 3].map((el: number) => (
        <SwiperSlide key={el}>
          <Image src={addBanner} width={800} height={400} alt="image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdsSwiper;
