import React from "react";
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
    // router: { push },
  } = props;

  console.log("check user data on getONe---", user);

  if (loadingUserData) return <CircularProgress />;
  return (
    <SuperTokensWrapper>
      <FilledCard type={"job"} formDetails={user} />
    </SuperTokensWrapper>
  );
};

export default compose(withGetOne)(Container);
