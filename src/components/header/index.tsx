import React from "react";
import { platform } from "@modules/common/util";
import { Logo } from "@components";
import { DesktopNavbar } from "@components/desktop-navbar";
import Topbar from "@components/topbar";
import { SecondaryLogo } from "@public/assets/icons";
import { Box, useMediaQuery } from "@mui/material";

export const Header: React.FC = () => {
  const isDeviceMobile = useMediaQuery("600px");

  const desktopNavbarProps = {
    logo: SecondaryLogo,
    // rightNavItems: [
    //   {
    //     id: 1,
    //     type: "link",
    //     title: "Hire",
    //     path: "/hire",
    //   },
    //   {
    //     id: 2,
    //     type: "link",
    //     title: "Become Supplier",
    //     path: "/supplier",
    //   },
    //   {
    //     id: 3,
    //     type: "link",
    //     title: "Job / Internship",
    //     path: "/job",
    //   },
    // ],
    // leftNavItems: [
    //   {
    //     id: 1,
    //     type: "dropdown",
    //     title: "Jobs",
    //     path: "jobs",
    //     links: [
    //       {
    //         id: 1,
    //         type: "link",
    //         title: "Search Jobs",
    //         path: "/search-jobs",
    //       },
    //       {
    //         id: 2,
    //         type: "link",
    //         title: "Manage Jobs",
    //         path: "/manage-jobs",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     type: "link",
    //     title: "Learning",
    //     path: "/learning",
    //   },
    // ],
  };

  return (
    <div className="text-center bg-gray-800">
      <Box
        display={{
          xs: "block",
          sm: "none",
        }}
      >
        <Topbar />
      </Box>
      <Box
        display={{
          xs: "none",
          sm: "block",
        }}
      >
        <DesktopNavbar {...desktopNavbarProps} />
      </Box>
    </div>
  );
};
