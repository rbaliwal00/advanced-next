import { Box, Grid } from "@mui/material";
import React from "react";
import Info from "./Info";
import Experience from "./Experience";

const Content = () => {
  const experiences = [
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
    {
      from: "from",
      to: "to",
      jobType: "jobType",
      brandName: "brandName",
      city: "city",
      department: "Department",
      position: "Position",
    },
  ];

  return (
    <Box sx={{ padding: "16px 14px" }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Info />
        </Grid>
        <Grid item xs={7}>
          <Experience experiences={experiences} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
