import { Box, useMediaQuery, Grid } from "@mui/material";
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
          <OtpRegistrationFlow {...props} />
        </div>
      ) : (
        <div>
          <Grid
            container
            spacing={2}
            className="text-[#4B5563]"
            justifyContent={"center"}
          >
            <Grid item xs={5}>
              <Ads />
            </Grid>
            <Grid item xs={1}>
              <div className="border-l-2 h-[60vh] mt-8"></div>
            </Grid>
            <Grid item xs={5} sx={{ marginTop: "20px" }}>
              <OtpRegistrationFlow {...props} />
            </Grid>
          </Grid>
          {!matches && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default MobileVerification;
