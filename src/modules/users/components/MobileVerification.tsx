import { Box, useMediaQuery } from "@mui/material";
import {
  bangalore,
  delhi,
  hydrabad,
  kolkata,
  mumbai,
} from "@public/assets/icons";

import OtpRegistrationFlow from "@components/form/MobileOtpFlow";
import { addBanner } from "@public/assests";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
import Cities from "@components/cities/cities";

const MobileVerification = (props) => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      {matches ? (
        <div className="bg-[rgb(17,59,115)] text-white p-4">
          <OtpRegistrationFlow />
        </div>
      ) : (
        <div>
          <div className="bg-[#002351] text-white">
            <div className="flex gap-4 px-4 pt-4">
              <div className="w-1/2 flex justify-center">
                <div className="mb-2 pt-4">
                  <div className={`text-start pl-7`}>
                    <h1 className="text-xl md:text-3xl font-bold pt-2">
                      Why join Horecah
                    </h1>
                    <ul className="leading-[1.8rem] text-sm md:text-xl">
                      <li>2000+ Student cvs to select</li>
                      <li>500+ Hotel to Apply</li>
                      <li>100+ Suppliers ready for service</li>
                    </ul>
                  </div>
                  <div className="">
                    <Image
                      src={addBanner}
                      width={350}
                      height={300}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="border-l-2 h-[60vh] mt-8"></div>
              <div className="mx-auto p-6">
                <OtpRegistrationFlow />
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
      )}
    </div>
  );
};

export default MobileVerification;