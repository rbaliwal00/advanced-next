import Image from "next/image";
import "swiper/swiper-bundle.css";
import Register from "./Register";
import styles from "./index.module.css";

import { addBanner } from "@public/assests";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Ads from "./Ads";
import Cities from "@components/cities/cities";
import { Box, Grid } from "@mui/material";
import AdsSwiper from "@components/ads-swiper";
import { SuperTokensWrapper } from "@modules/look";

const RoleSelection = () => {
  return (
    <SuperTokensWrapper redirectIfLoggedIn={true} auth={true}>
      <Grid container spacing={2}>
        <Grid
          item
          sm={6}
          display={{ xs: "none", sm: "block" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Ads />
        </Grid>
        <Grid item sm={1} display={{ xs: "none", sm: "block" }}>
          <div className="border-l-2 h-[60vh] mt-8"></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingX: { xs: "20px" }, marginLeft: "10px" }}
        >
          <Register />
          <Box
            className="mb-4 mt-4"
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <AdsSwiper width={200} />
          </Box>
        </Grid>
      </Grid>
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
    </SuperTokensWrapper>
  );
};

export default RoleSelection;
