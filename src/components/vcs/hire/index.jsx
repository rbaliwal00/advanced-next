import { Box, Typography } from "@mui/material";
import React from "react";
import { Person } from "@public/assets/icons";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const HireVisitingCard1 = () => {
  return (
    <Box
      sx={{
        background: "#374151",
        width: "328px",
        height: "250px",
        overflow: "hidden",
        position: "relative",
      }}
      ml={10}
    >
      <Box
        sx={{
          borderRadius: "300px",
          width: "300px",
          height: "250px",
          borderRadius: "20%",
          background: "#26787E",
        }}
        className="vcs__hire-right"
      >
        <Box className="vcs__right-content">
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
              fontSize: "10px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginTop: "10px",
            }}
          >
            <span className="vcs__hire-icon">
              <LocationOnIcon sx={{ fontSize: "16px", color: "#2BC6D2" }} />
            </span>
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              width: "129px",
              marginLeft: "27px",
              color: "white",
            }}
          >
            2nd Floor, JK Plaza, 788, 12th Main Rd, HAL 2nd Stage, Indiranagar,
            Bengaluru, Karnataka 560038,
          </Typography>
        </Box>
      </Box>
      <Box className="vcs__hire-left">
        <Typography sx={{ color: "white", fontSize: "12px" }}>
          Nature1 Nature 2
        </Typography>
        <Box className="vcs__hire-info1" sx={{ color: "white" }}>
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Contact No.
            <span className="vcs__supplier-icon">
              <CallIcon sx={{ fontSize: "16px", color: "#2BC6D2" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "30px",
              fontWeight: 500,
            }}
          >
            Contact No.
          </Typography>
        </Box>
        <Box className="vcs__hire-info1" sx={{ color: "white" }}>
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Contact Name
            <span className="vcs__supplier-icon">
              <CallIcon sx={{ fontSize: "16px", color: "#2BC6D2" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "30px",
              fontWeight: 500,
            }}
          >
            Contact Name
          </Typography>
        </Box>
        <Box className="vcs__hire-info1" sx={{ color: "white" }}>
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Email
            <span className="vcs__supplier-icon">
              <EmailIcon sx={{ fontSize: "16px", color: "#2BC6D2" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "30px",
              fontWeight: 500,
            }}
          >
            Email
          </Typography>
        </Box>
        <Box className="vcs__hire-info1" sx={{ color: "white" }}>
          <Typography sx={{ fontSize: "10px", fontWeight: 400 }}>
            Website
            <span className="vcs__supplier-icon">
              <LanguageIcon sx={{ fontSize: "16px", color: "#2BC6D2" }} />
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginRight: "30px",
              fontWeight: 500,
            }}
          >
            Current Location
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HireVisitingCard1;
