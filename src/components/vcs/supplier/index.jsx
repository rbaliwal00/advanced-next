import { Box, Typography } from "@mui/material";
import { Person } from "@public/assets/icons";
import Image from "next/image";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const SupplierVisitingCard1 = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #DBD431, #84802C)",
        width: "328px",
        height: "250px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          borderRadius: "300px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#1F2A37",
        }}
        className="vcs__left"
      >
        <Box className="vcs__left-content">
          <Box sx={{ marginLeft: "30px" }}>
            <Image src={Person} width={"74px"} className="vcs__img" />
          </Box>
          <Typography
            sx={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF" }}
          >
            Brand Name
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Nature 1 Nature 2
          </Typography>
        </Box>
      </Box>
      <Box mt={1} className="vcs__supplier-info1">
        <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "white" }}>
          <span className="vcs__supplier-icon">
            <CallIcon sx={{ fontSize: "16px", color: "#BBB631" }} />
          </span>
          Contact Name
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            marginLeft: "34px",
            marginTop: "-5px",
            fontWeight: 500,
            color: "white",
            width: "200px",
          }}
        >
          Person Name
        </Typography>
      </Box>
      <Box mt={1} className="vcs__supplier-info2">
        <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "white" }}>
          <span className="vcs__supplier-icon">
            <CallIcon sx={{ fontSize: "16px", color: "#BBB631" }} />
          </span>
          Contact No.
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            marginLeft: "34px",
            marginTop: "-5px",
            fontWeight: 500,
            color: "white",
            width: "200px",
          }}
        >
          Current Location
        </Typography>
      </Box>
      <Box mt={1} className="vcs__supplier-info3">
        <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "white" }}>
          <span className="vcs__supplier-icon">
            <LocationOnIcon sx={{ fontSize: "16px", color: "#BBB631" }} />
          </span>
          Area of Coverage
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            marginLeft: "34px",
            marginTop: "-5px",
            fontWeight: 500,
            color: "white",
            width: "200px",
          }}
        >
          Current Location
        </Typography>
      </Box>
      <Box mt={1} className="vcs__supplier-info4">
        <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "white" }}>
          <span className="vcs__supplier-icon">
            <EmailIcon sx={{ fontSize: "16px", color: "#BBB631" }} />
          </span>
          Email
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            marginLeft: "34px",
            marginTop: "-5px",
            fontWeight: 500,
            color: "white",
            width: "200px",
          }}
        >
          Current Location
        </Typography>
      </Box>
      <Box mt={1} className="vcs__supplier-info5">
        <Typography sx={{ fontSize: "10px", fontWeight: 400, color: "white" }}>
          <span className="vcs__supplier-icon">
            <LanguageIcon sx={{ fontSize: "16px", color: "#BBB631" }} />
          </span>
          Website
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            marginLeft: "34px",
            marginTop: "-5px",
            fontWeight: 500,
            color: "white",
            width: "200px",
          }}
        >
          Current Location
        </Typography>
      </Box>
    </Box>
  );
};

export default SupplierVisitingCard1;
