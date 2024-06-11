import { Box, Grid, Typography } from "@mui/material";
import Person from "./Person.svg";
import Arrow from "./Arrow.svg";
import Image from "next/image";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobVisitingCard1 = () => {
  return (
    <Box
      sx={{
        width: {
          // xs: "100%",
          xs: "328px",
        },
        background:
          "linear-gradient(90deg,#1F2A37 0%, #1F2A37 65%, #3FA668 65%)",
        height: "250px",
      }}
      className="vc"
    >
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            textAlign: "right",
            paddingRight: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
            }}
            pt={1}
          >
            Yanis Petros
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>Fresher</Typography>
        </Grid>
        <Grid item xs={4} alignContent={"end"} p={1}>
          <Typography sx={{ fontSize: "10px" }}>
            HR & Admin Hotel & Restaurant
          </Typography>
          <Typography sx={{ fontSize: "10px", marginTop: "3px" }}>
            Director of Publice Relation and Advertising
          </Typography>
        </Grid>
      </Grid>

      <div className="vc__shape">
        <Image
          src={Person}
          className="vc__image"
          height={"100px"}
          width={"150px"}
        />
      </div>

      <div className="vc__text">
        <Box className="vc__first_info">
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Current Location{" "}
            <span className="vc__icon">
              <Image src={Arrow} width={"19px"} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "175px",
              marginTop: "-5px",
              fontWeight: 500,
            }}
          >
            Current Location
          </Typography>
        </Box>

        <Box mt={1} className="vc__second">
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Contact No.
            <span className="vc__icon">
              <CallIcon sx={{ fontSize: "16px" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "200px",
              marginTop: "-5px",
              fontWeight: 500,
            }}
          >
            Current Location
          </Typography>
        </Box>

        <Box mt={2} className="vc__secondLast_info">
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Email
            <span className="vc__icon">
              <EmailIcon sx={{ fontSize: "16px" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "210px",
              marginTop: "-5px",
              fontWeight: 500,
            }}
          >
            Current Location
          </Typography>
        </Box>

        <Box mt={1} className="vc__last_info">
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Preferred Location
            <span className="vc__icon">
              <LocationOnIcon sx={{ fontSize: "16px" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "-2px",
              lineHeight: "12px",
              marginRight: "205px",
              fontWeight: 500,
            }}
          >
            Current Location afsdasfsd afsdfsd
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default JobVisitingCard1;
