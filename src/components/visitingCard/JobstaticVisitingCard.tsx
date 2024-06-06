import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface JobVisitingCardProps {
  name: string;
  experience: string;
  position: string;
  department: string;
  imageURL: string;
  themeColor: "red" | "blue" | "green" | "yellow";
  mobileNumber: string;
  email: string;
  currentLocation: string;
  preferredLocationOne: string;
  preferredLocationTwo: string;
  experienceType: "fresher" | "experienced";
}

const JobStaticVisitingCard = ({ ...props }: JobVisitingCardProps) => {
  const fontSizeValue = {
    color: "#4b5563",
    fontSize: { xs: "11px", sm: "16px" },
    fontWeight: 500,
  };

  return (
    <Box
      my={0}
      display="grid"
      gridAutoFlow={"column"}
      alignItems="center"
      gap={12}
      p={2}
      sx={{
        color: "#8899A8",
        border: "2px solid grey",
        fontSize: { xs: "8px", sm: "12px" },
        fontWeight: 400,
        width: { xs: "328px", sm: "407px" },
      }}
      boxShadow={"0px 4px 15px 0px #0000000D"}
      border={"1px solid #0000"}
      borderColor={"white"}
    >
      <Box>
        <p>Department</p>
        <Typography sx={fontSizeValue}>{props.department}</Typography>
        <p>Position</p>
        <Typography sx={fontSizeValue}>{props.position}</Typography>
        <p>Current Location</p>
        <Typography sx={fontSizeValue}>{props.currentLocation}</Typography>
        <p>Preferred Location</p>
        <Typography sx={fontSizeValue}>
          <p>{props.preferredLocationOne}</p>
          <p>{props.preferredLocationTwo}</p>
        </Typography>
      </Box>
      <Box textAlign={"right"} justifyItems={"end"} display={"grid"}>
        <img
          width={100}
          height={100}
          src={props.imageURL}
          alt="image"
          className="w-16 h-16 rounded-[50%]"
        />
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px" },
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          <p>{props.name}</p>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "11px", sm: "16px" },
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          <p>{props.experienceType}</p>
        </Typography>
        <p>Contact No.</p>
        <Typography
          sx={{
            fontSize: { xs: "11px", sm: "16px" },
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          <p>{props.mobileNumber}</p>
        </Typography>
        <p>Email</p>
        <Typography
          sx={{
            fontSize: { xs: "11px", sm: "16px" },
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          <p>{props.email}</p>
        </Typography>
      </Box>
    </Box>
  );
};

export default JobStaticVisitingCard;
