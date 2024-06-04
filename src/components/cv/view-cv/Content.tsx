import { Box, Grid } from "@mui/material";
import React from "react";
import Info from "./Info";
import Experience from "./Experience";

const Content = ({profile_data}) => {
  const experience = profile_data.experience;

  return (
    <Box sx={{ padding: "16px 14px" }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={6}>
          <Info profile_data={profile_data} />
        </Grid>
        <Grid item xs={7} sm={6}>
          <Experience experience={experience} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
