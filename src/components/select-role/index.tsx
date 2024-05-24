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

const RoleSelection = () => {
  return (
    <div>
      <div className={`${styles.bgPrimary}`}>
        <div className="grid mb-6">
          <div
            className={`grid grid-cols-[1fr_1fr] gap-2 self-center w-full ${styles["reg-main"]} `}
          >
            <Ads />
            <div className=" pl-4 justify-self-center self-center">
              <Register />
              <div
                className={styles["mobile-banner"]}
                style={{ marginTop: "40px", marginBottom: "20px" }}
              >
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
        </div>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "75%",
            },
            margin: "auto",
          }}
        >
          <Cities />
        </Box>
      </div>
    </div>
  );
};

export default RoleSelection;
