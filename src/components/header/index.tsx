import React from "react";
import { platform } from "@modules/common/util";
import { Logo } from "@components";
import { DesktopNavbar } from "@components/desktop-navbar";
import Topbar from "@components/topbar";
import { Back, PrimaryLogo, SecondaryLogo } from "@public/assets/icons";
import { Box, useMediaQuery } from "@mui/material";
import { back } from "nock";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const isDeviceMobile = useMediaQuery("600px");

  const desktopNavbarProps = {
    logo: PrimaryLogo,
    button: Back,
    primary: true,
  };

  const router = useRouter();

  return (
    <div className="text-center bg-gray-800">
      <DesktopNavbar {...desktopNavbarProps} onBack={() => router.back()} />
    </div>
  );
};
