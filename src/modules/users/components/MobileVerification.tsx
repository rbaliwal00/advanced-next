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
import WhyJoinHorecah from "./why-join-horecah";
import Ads from "@components/select-role/Ads";

const MobileVerification = (props) => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      {matches ? (
        <div className=" text-[#4B5563] p-4">
          <OtpRegistrationFlow />
        </div>
      ) : (
        <div>
          <div className="text-[#4B5563] min-h-[calc(100vh-64px)] grid justify-items-center">
            <div className="grid grid-cols-[1fr_0rem_1fr] pt-10">
              <Ads />
              <div className="border-l-2 h-[60vh] mt-8"></div>
              <div className="mx-auto p-6">
                <OtpRegistrationFlow />
              </div>
            </div>
           {!matches && <Box
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
            </Box>}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVerification;
