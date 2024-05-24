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

  // Define handleRoute inside useEffect to ensure it's only available on the client side
  useEffect(() => {
    const handleRoute = (exp: string) => () => {
      router.push(`/users/job-seeker/theme?exp=${exp}`);
    };

    // ROLES array needs to be defined inside useEffect if it uses handleRoute
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

    // Now you can set up roleCardProps
    setRoleCardProps({
      roles: ROLES,
      backgroundColor: "#002351",
      hoverColor: "#FE8B4C",
    });
  }, [router]);

  const [roleCardProps, setRoleCardProps] = useState<RoleCardListProps>(null);

  if (!roleCardProps) {
    // You can show a loading state here if necessary
    return null;
  }

  return (
    <div className="bg-[#113B73]">
      <div className="pt-20 px-4 grid justify-center mb-0 sm:mb-10">
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
        }}
      >
        <Cities />
      </Box>
    </div>
  );
};

export default ExperienceSelection;
