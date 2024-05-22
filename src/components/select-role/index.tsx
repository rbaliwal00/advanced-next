import React from "react";
import Cities from "./cities";
import Register from "./Register";
import { DesktopNavbar } from "@components/desktop-navbar";
import { horeca } from "@public/assests";
import styles from "./index.module.css";
import Image from "next/image";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addBanner } from "@public/assests";
import Ads from "./Ads";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

//   interface DemoSliderProps {
//     data: Slide[];
//   }

const RoleSelection = (data: Slide[]) => {
  return (
    <div>
      <div className={styles.navbar}>
        <DesktopNavbar />
      </div>
      <div className={styles.bgPrimary}>
        <div className={` ${styles.register}`}>
          <Image src={horeca} alt="no img" width={200} height={100} />
          <h1 className={styles.heading}>Register to</h1>
        </div>
        <div className=" grid grid-rows-[3fr_3fr] justify-items-center h-[100vh]">
          <div
            className={`grid grid-cols-[1fr_1fr] gap-2 self-center w-full ${styles["reg-main"]} `}
          >
            <Ads />
            <div className=" pl-4 justify-self-center self-center">
              <Register />
              <div className={styles["mobile-banner"]}>
                <Swiper
                  pagination={{ type: "bullets", clickable: true }}
                  autoplay={{ delay: 2000 }}
                  loop
                  modules={[Navigation, Pagination, Autoplay]}
                  className="center"
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    width: "400px",
                  }}
                >
                  {[1, 2, 3].map((el: number) => (
                    <SwiperSlide key={el}>
                      <Image
                        src={addBanner}
                        width={800}
                        height={200}
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <Cities />
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
