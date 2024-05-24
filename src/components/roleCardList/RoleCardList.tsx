import React from "react";
// import { RoleProps } from '@constants';
import RoleCard from './RoleCard';
import { RoleProps } from '@modules/users/components/RoleCardList';
// import RoleCard from '@components/role-card';
import { useMediaQuery } from '@mui/material';

interface RoleCardListProps {
  roles: RoleProps[],
  backgroundColor:string,
  hoverColor:string
}

const RoleCardList = ({ ...props }: RoleCardListProps) => {
  const isMobile = useMediaQuery("(max-width:690px)");

const RoleCardList = ({...props}:RoleCardListProps) => {
  const isMobile = useMediaQuery('(max-width:690px)');


  return (
    <div
      className={`grid gap-4 ${isMobile ? '':'grid-cols-[1fr_min-content_1fr] w-min'}`}
      >
       {props.roles.map((role, index) => (
      <React.Fragment key={role.id}>
        <RoleCard {...role} backgroundColor={props.backgroundColor} hoverColor={props.hoverColor}/>
        {index !== props.roles.length - 1 && <div className="w-0.5 bg-[white] relative top-[-12%] h-[128%] mx-8 " />}
      </React.Fragment>
    ))}
    </div>
  );
};

export default RoleCardList;
