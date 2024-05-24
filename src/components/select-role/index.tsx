import React from "react";
import Cities from "./cities";
import Register from "./Register";
import { DesktopNavbar } from "@components/desktop-navbar";
import styles from "./index.module.css";
import Image from "next/image";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { LogoutIcon, PrimaryLogo, addBanner } from "@public/assests";
import Ads from "./Ads";
import Topbar from "@components/top-bar";

const desktopNavbarProps = {
  logo: PrimaryLogo,
  primary: true,
  rightNavItems: [
    {
      id: 1,
      type: "link",
      title: "Hire",
      path: "/hire",
    },
    {
      id: 2,
      type: "link",
      title: "Become Supplier",
      path: "/supplier",
    },
    {
      id: 3,
      type: "link",
      title: "Job / Internship",
      path: "/job",
    },
  ],
  leftNavItems: [
    {
      id: 1,
      type: "dropdown",
      title: "Jobs",
      path: "jobs",
      links: [
        {
          id: 1,
          type: "link",
          title: "Search Jobs",
          path: "/search-jobs",
        },
        {
          id: 2,
          type: "link",
          title: "Manage Jobs",
          path: "/manage-jobs",
        },
      ],
    },
    {
      id: 2,
      type: "link",
      title: "Learning",
      path: "/learning",
    },
  ],
};
const topBar = {
  label: "Label",
  backgroundColor: "#113B73",
  color: "white",
  button: LogoutIcon,
  logo: PrimaryLogo,
  progress: "30%",
};
const RoleSelection = () => {
  return (
    <div>
      <div className={styles.bgPrimary}>
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
                        width={700}
                        height={300}
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
