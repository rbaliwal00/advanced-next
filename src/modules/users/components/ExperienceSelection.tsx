import React from "react";
// import RoleCardList from "./RoleCardList";
import {
  PrimaryLogo,
  bangalore,
  delhi,
  hydrabad,
  kolkata,
  mumbai,
} from "@public/assets/icons";
import { DesktopNavbar } from "@components/desktop-navbar";
import Experienced from '@public/assets/experienced.png'
import Fresher from '@public/assets/fresher.png'
import Image from "next/image";
// import RoleCardList from "./RoleCardList";
import RoleCardList from "@components/roleCardList/RoleCardList";

const ExperienceSelection = () => {
  const ROLES: any = [
    {
      id: 1,
      banner: Fresher,
      title: "Fresher",
    },
    {
      id: 2,
      banner: Experienced,
      title: "Experienced",
    },
  ];

  const roleCardProps = {
    roles: ROLES,
    platform: "desktop",
    backgroundColor: "#002351",
    hoverColor: "#FE8B4C",
  };

  const desktopNavbarProps = {
    logo: PrimaryLogo,
    primary: true,
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

  return (
    <div className="bg-[#113B73] h-[100vh]">
      <DesktopNavbar {...desktopNavbarProps} />
      <div className="mt-20 grid justify-center">
        <RoleCardList {...roleCardProps} />
      </div>
      <div className="text-center mt-20 text-white">
        <p className="mb-2">Cities we are in</p>
        <div className="flex justify-center gap-4">
          <div>
            <Image src={delhi} alt="no img" />
          </div>
          <div>
            <Image src={mumbai} alt="no img" />
          </div>
          <div>
            <Image src={bangalore} alt="no img" />
          </div>
          <div>
            <Image src={kolkata} alt="no img" />
          </div>
          <div>
            <Image src={hydrabad} alt="no img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSelection;
