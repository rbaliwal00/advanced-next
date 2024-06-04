import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = ({ experience }: any) => {
  return (
    <Box sx={{ borderLeft: "1px solid #4B5563" }}>
      <Typography
        sx={{
          fontSize: "13.33px",
          fontWeight: 400,
          color: "#374151",
          paddingLeft: "16px",
          position: "relative",
        }}
      >
        <span
          style={{
            height: "9px",
            width: "9px",
            backgroundColor: "#4B5563",
            borderRadius: "50%",
            display: "inline-block",
            position: "absolute",
            left: "-5px",
          }}
        ></span>
        Work Experience
      </Typography>
      {experience?.map((exp: any) => (
        <Box sx={{ padding: "16px 14px", position: "relative" }}>
          <span
            style={{
              height: "9px",
              width: "9px",
              backgroundColor: "#fff",
              border: "1px solid #4B5563",
              borderRadius: "50%",
              display: "inline-block",
              position: "absolute",
              left: "-5px",
            }}
          ></span>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "8px", fontWeight: 400 }}>
              {exp.from_date}
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>{exp.to_date}</Typography>
            <Typography sx={{ fontSize: "8px" }}>
              {exp.type}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "8px" }}>
              {exp.brand_name}
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>{exp.city}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "8px" }}>
              {exp.department}
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>
              {exp.position}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
