"use client"; // <===== REQUIRED

import React, { useRef, useState } from "react";

// Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./carousel.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import VisibilityIcon from "@mui/icons-material/Visibility";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import JobVisitingCard from "../visitingCard/JobVisitingCard";
import HireVisitingCard from "../visitingCard/HireVisitingCard";
import SupplierVisitingCard from "../visitingCard/SupplierVisitingCard";
import { useMediaQuery } from "@mui/material";

interface DemoSliderProps {
  data: any[];
  // setTheme: any;
  color: string;
}

const Carousel: React.FC<DemoSliderProps> = ({ data, color }) => {
  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <section className="w-full grid justify-center">
      <div className=" ">
        <ul className={`h-full ${isMobile && "w-[100vw]"}`}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            // onActiveIndexChange={newIndex=> console.log('the index',newIndex)}

            coverflowEffect={{
              slideShadows: false,
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={`${styles.mySwiper} ${styles.swiper} `}
          >
            <style jsx>{`
              .mySwiper .swiper-pagination-bullet-active {
                background-color: orange;
              }
            `}</style>
            {data.map((userData: any) => (
              <SwiperSlide
                key={userData.id}
                className={`${styles.swiper_slide} tranding-slide `}
                style={{ width: isMobile ? "100%" : "30%" }}
              >
                {({ isActive }) => (
                  <div
                    className={``}
                    onMouseMove={() =>
                      data.map((d) => {
                        console.log("hey carousel data=>", userData.theme);
                        if (d.id === userData.id && isActive) {
                          // setTheme(userData.theme);
                        }
                      })
                    }
                  >
                    {userData.type === "job" ? (
                      <JobVisitingCard {...userData} />
                    ) : userData.type === "hire" ? (
                      <HireVisitingCard {...userData} />
                    ) : userData.type === "supplier" ? (
                      <SupplierVisitingCard {...userData} />
                    ) : null}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
