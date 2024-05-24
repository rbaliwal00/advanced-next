import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import Topbar from "@components/topbar";
import UploadCard from "@components/upload-card";
import {
  SecondaryLogo,
  Back,
  PrimaryLogo,
  Gst,
  Pancard,
} from "@public/assets/icons";
import React from "react";

import styles from "./index.module.css";
import { Box } from "@mui/material";

const GstPancard = ({ platform }: any) => {
  const desktopNavbarProps = {
    logo: SecondaryLogo,
    rightNavItems: [
      {
        id: 1,
        type: "link",
        title: "Hire",
        path: "/hire",
      },
      {
        id: 2,
        type: "link",
        title: "Become Supplier",
        path: "/supplier",
      },
      {
        id: 3,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
    ],
    leftNavItems: [
      {
        id: 1,
        type: "dropdown",
        title: "Jobs",
        path: "jobs",
        links: [
          {
            id: 1,
            type: "link",
            title: "Search Jobs",
            path: "/search-jobs",
          },
          {
            id: 2,
            type: "link",
            title: "Manage Jobs",
            path: "/manage-jobs",
          },
        ],
      },
      {
        id: 2,
        type: "link",
        title: "Learning",
        path: "/learning",
      },
    ],
  };

  const webTopbarProps = {
    label: "GST / PAN",
    backgroundColor: "white",
    color: "#374151",
    progress: "30%",
    borderRadius: 12,
  };
  const mobileTopbarProps = {
    label: "GST / PAN",
    type: "primary",
    color: "white",
    button: Back,
    logo: PrimaryLogo,
    progress: "30%",
    borderRadius: 0,
  };

  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%", // If viewport width is below 600px, maxWidth is 100%
          sm: "608px", // If viewport width is above 600px, maxWidth is 608px
        },
        m: "auto",
        mt: "32px",
        px: {
          xs: "16px",
          sm: "35px",
        },
        py: {
          xs: "16px",
          sm: "30px",
        },
        boxShadow: {
          xs: "none",
          sm: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
        },
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <div className="mt-10">
        <UploadCard
          description="Description"
          logo={Gst}
          buttonText="Upload GST"
        />
      </div>
      <div className="mt-10">
        <UploadCard
          description="Description"
          logo={Pancard}
          buttonText="Upload PAN"
        />
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[73%]">
          <Button text="Next" />
        </div>
        <div className="w-[25%]">
          <Button text="Back" kind="secondary" />
        </div>
      </div>
    </Box>
  );
};

export default GstPancard;
