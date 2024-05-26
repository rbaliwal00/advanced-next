import React from "react";
// import { RoleProps } from '@constants';
import RoleCard from "./RoleCard";
import { RoleProps } from "@modules/users/components/RoleCardList";
// import RoleCard from '@components/role-card';
import { useMediaQuery } from "@mui/material";

export interface RoleCardListProps {
  roles: RoleProps[];
  backgroundColor: string;
  hoverColor: string;
}

const RoleCardList = ({ ...props }: RoleCardListProps) => {
  const isMobile = useMediaQuery("(max-width:690px)");

  return (
    <div
      className={`grid gap-10 ${
        isMobile ? "" : "grid-cols-[1fr_min-content_1fr] w-min"
      }`}
    >
      {props.roles.map((role, index) => (
        <React.Fragment key={role.id}>
          <RoleCard
            {...role}
            backgroundColor={props.backgroundColor}
            hoverColor={props.hoverColor}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RoleCardList;
