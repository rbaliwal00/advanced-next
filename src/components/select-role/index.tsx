import Image from "next/image";
import "swiper/swiper-bundle.css";
import Register from "./Register";
import styles from "./index.module.css";

import { addBanner } from "@public/assests";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Ads from "./Ads";
import Cities from "@components/cities/cities";
import { Box } from "@mui/material";
import AdsSwiper from "@components/ads-swiper";
import { SuperTokensWrapper } from "@modules/look";

const RoleSelection = () => {
  return (
    <SuperTokensWrapper redirectIfLoggedIn={true} auth={true}>
      <div className={`text-[#4B5563] min-h-[calc(100vh-64px)]`}>
        <div className="grid pt-10 mb-6">
          <div
            className={`grid grid-cols-[1fr_1fr] gap-2 self-center w-full ${styles["reg-main"]} `}
          >
            <Ads />
            <div className=" pl-4 justify-self-center self-center">
              <div className="mb-6 sm:mb-0">
                <Register />
              </div>
              <div
                className={styles["mobile-banner"]}
                style={{ margin: "auto" }}
              >
                <AdsSwiper width={280} />
              </div>
            </div>
          </div>
        </div>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "75%",
            },
            margin: "auto",
            marginTop: {
              xs: "30px",
              sm: "60px",
            },
          }}
        >
          <Cities />
        </Box>
      </div>
    </SuperTokensWrapper>
  );
};

export default RoleSelection;
