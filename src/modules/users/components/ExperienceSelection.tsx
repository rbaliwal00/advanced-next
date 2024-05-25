"use client";

import { useEffect, useState } from "react";
import Cities from "@components/cities/cities";
import RoleCardList, {
  RoleCardListProps,
} from "@components/roleCardList/RoleCardList";
import { Box } from "@mui/material";
import Experienced from "@public/assets/experienced.png";
import Fresher from "@public/assets/fresher.png";
import { useRouter } from "next/router";

const ExperienceSelection = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRoute = (exp: string) => () => {
      router.push(`/users/job-seeker/theme?exp=${exp}`);
    };

    const ROLES = [
      {
        id: 1,
        banner: Fresher,
        title: "Fresher",
        onClick: handleRoute("fresher"),
      },
      {
        id: 2,
        banner: Experienced,
        title: "Experienced",
        onClick: handleRoute("experienced"),
      },
    ];

    setRoleCardProps({
      roles: ROLES,
      backgroundColor: "#002351",
      hoverColor: "#FE8B4C",
    });
  }, [router]);

  const [roleCardProps, setRoleCardProps] = useState<RoleCardListProps>(null);

  if (!roleCardProps) {
    return null;
  }

  return (
    <div className="text-[#4B5563] min-h-[calc(100vh-64px)]">
      <div className="p-10 px-4 grid justify-center mb-0 sm:mb-10">
        <h2 className="text-center mb-12 text-[30px] sm:text-[33.18px] font-[600]">
          Select Experience
        </h2>
        <RoleCardList {...roleCardProps} />
      </div>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "75%",
          },
          color: "white",
          margin: "auto",
          paddingBottom: "50px",
          marginTop: {
            xs: "30px",
            sm: "60px",
          },
        }}
      >
        <Cities />
      </Box>
    </div>
  );
};

export default ExperienceSelection;
