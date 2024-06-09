import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { compose } from "@common";
import ThemeCard from "@components/form/Themecard";
import { withGetOne } from "../operations";
import FilledCard from "@components/form/FilledCard";
import { SuperTokensWrapper } from "@modules/look";

const Container = (props) => {
  const {
    user,
    loadingUserData,
    isPublic,
    // router: { push },
  } = props;

  useEffect(() => {
    props.refetchUserData();
  }, []);

  console.log("check user data on getONe---", user);

  if (loadingUserData) return <CircularProgress />;
  if (isPublic)
    return <FilledCard type={"job"} formDetails={user} isPublic={isPublic} />;

  return (
    <SuperTokensWrapper>
      <FilledCard type={"job"} formDetails={user} isPublic={isPublic} />
    </SuperTokensWrapper>
  );
};

export default compose(withGetOne)(Container);
