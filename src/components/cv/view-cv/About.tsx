import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ padding: "16px 14px", borderBottom: "1px solid #CED4DA" }}>
      <Box
        sx={{
          color: "#374151",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 400,
        }}
      >
        <Typography sx={{ fontSize: "8px" }}>
          Portfolio Link : www.somelink.com
        </Typography>
        <Typography sx={{ fontSize: "8px" }}>
          Newsletter Link : www.somelink.com
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "13.33px", fontWeight: 400, marginTop: "10px" }}
        >
          About
        </Typography>
        <Typography sx={{ fontSize: "8px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, 
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "13.33px", fontWeight: 400, marginTop: "10px" }}
        >
          Education
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", gap: "60px" }}>
              <Typography sx={{ fontSize: "8px" }}>From</Typography>
              <Typography sx={{ fontSize: "8px" }}>To</Typography>
            </Box>
            <Typography sx={{ fontSize: "8px" }}>name of insitution</Typography>
            <Typography sx={{ fontSize: "8px" }}>
              Level of insitution
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>CGPA</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", gap: "60px" }}>
              <Typography sx={{ fontSize: "8px" }}>From</Typography>
              <Typography sx={{ fontSize: "8px" }}>To</Typography>
            </Box>
            <Typography sx={{ fontSize: "8px" }}>name of insitution</Typography>
            <Typography sx={{ fontSize: "8px" }}>
              Level of insitution
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>CGPA</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
