import React from "react";
import CvHeader from "./CvHeader";
import { Box } from "@mui/material";
import About from "./About";
import Content from "./Content";

const ViewCv = () => {
  return (
    <Box
      sx={{
        margin: 2,
        border: "0.5px solid #F3F4F6",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CvHeader />
      <About />
      <Content />
    </Box>
  );
};

export default ViewCv;
