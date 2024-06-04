import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const About = ({ profile_data }) => {
  const bio = profile_data.bio && profile_data.bio[0];
  const education = profile_data.education;
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
          Portfolio Link : {bio?.portfolio}
        </Typography>
        <Typography sx={{ fontSize: "8px" }}>
          Newsletter Link : {bio?.newsletter}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "13.33px", fontWeight: 400, marginTop: "10px" }}
        >
          About
        </Typography>
        <Typography sx={{ fontSize: "8px" }}>{bio?.about}</Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "13.33px", fontWeight: 400, marginTop: "10px" }}
        >
          Education
        </Typography>
        <Grid container spacing={2}>
          {education?.map((edu: any, index: number) => {
            return (
              <Grid item xs={6}>
                <Box sx={{ display: "flex", gap: "60px" }}>
                  <Typography sx={{ fontSize: "8px" }}>{edu.from_date}</Typography>
                  <Typography sx={{ fontSize: "8px" }}>{
                    edu.to_date
                  }</Typography>
                </Box>
                <Typography sx={{ fontSize: "8px" }}>
                  {edu.institution_name}
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>
                  {edu.study_field}
                </Typography>
                <Typography sx={{ fontSize: "8px" }}>{
                  edu.cgpa
                }</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
