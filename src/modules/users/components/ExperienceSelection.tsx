import Cities from "@components/cities/cities";
import RoleCardList from "@components/roleCardList/RoleCardList";
import { Box, Typography } from "@mui/material";
import Experienced from "@public/assets/experienced.png";
import Fresher from "@public/assets/fresher.png";

const ExperienceSelection = () => {
  const ROLES: any = [
    {
      id: 1,
      banner: Fresher,
      title: "Fresher",
      onClick: () => console.log("fresher"),
    },
    {
      id: 2,
      banner: Experienced,
      title: "Experienced",
      onClick: () => console.log("exprienced"),
    },
  ];

  const roleCardProps = {
    roles: ROLES,
    platform: "desktop",
    backgroundColor: "#002351",
    hoverColor: "#FE8B4C",
  };

  const selectedExperience = () => {};

  return (
    <div className="bg-[#113B73] h-[100vh]">
      <div className="pt-20 px-4 grid justify-center">
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
