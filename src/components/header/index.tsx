import React from "react";
import { platform } from "@modules/common/util";
import { Logo } from "@components";
import { DesktopNavbar } from "@components/desktop-navbar";
import Topbar from "@components/topbar";
import { Back, PrimaryLogo, SecondaryLogo } from "@public/assets/icons";
import { Box, useMediaQuery } from "@mui/material";
import { back } from "nock";

export const Header: React.FC = () => {
  const isDeviceMobile = useMediaQuery("600px");

  const desktopNavbarProps = {
    logo: PrimaryLogo,
    button: Back,
    primary: true,
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

  const mobileTopbarProps = {
    label: "Last Step",
    type: "primary",
    color: "white",
    button: Back,
    logo: PrimaryLogo,
    progress: "30%",
    platform: "mobile",
    borderRadius: 0,
  };

  return (
    <div className="text-center bg-gray-800">
      <DesktopNavbar {...desktopNavbarProps} />
    </div>
  );
};
