import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import facebook from "@public/assets/icons/facebook.svg";
import {
  Facebook,
  WhatsApp,
  Linkedin,
  Insta,
  Person,
} from "@public/assets/icons";
import Image from "next/image";

const CvHeader = ({profile_data}:any) => {
  return (
    <Box sx={{ borderBottom: "1px solid #CED4DA", padding: "16px 14px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            sx={{ fontWeight: 400, color: "#374151", fontSize: "19.2px" }}
          >
           {`${profile_data.first_name ?? ""} ${profile_data.last_name ?? ""}`}
          </Typography>
          <Typography
            sx={{ color: "#374151", fontWeight: 400, fontSize: "11.11px" }}
          >
            Work Experience
          </Typography>
        </Box>
        <Box>
          <Image src={Person} />
        </Box>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Box sx={{ display: "flex" }}>
              <Image src={WhatsApp} />
              <Typography
                sx={{
                  color: "#374151",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "12px",
                  marginLeft: "6px",
                }}
              >
                1234567890
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ display: "flex" }}>
              <Image src={Facebook} />
              <Typography
                sx={{
                  color: "#374151",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "12px",
                  marginLeft: "6px",
                }}
              >
                www.facebook.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ display: "flex", marginTop: "16px" }}>
              <Image src={Insta} />
              <Typography
                sx={{
                  color: "#374151",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "12px",
                  marginLeft: "6px",
                }}
              >
                ig username
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ display: "flex", marginTop: "16px" }}>
              <Image src={Linkedin} />
              <Typography
                sx={{
                  color: "#374151",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "12px",
                  marginLeft: "6px",
                }}
              >
                linkdln username
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CvHeader;
