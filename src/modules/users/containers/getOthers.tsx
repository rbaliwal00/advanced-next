import React, { useEffect } from "react";

import { compose } from "@common";
import { withGetOne } from "../operations";
import FilledCard from "@components/form/FilledCard";
import { CircularProgress } from "@mui/material";
import { SuperTokensWrapper } from "@modules/look";

const Container = (props) => {
  const {
    user,
    loadingUserData,
    // router: { push },
  } = props;

  useEffect(() => {
    console.log("props---+", props);
    props.refetchUserData();
  }, []);

  console.log("check userData here---", user);

  if (loadingUserData) return <CircularProgress />;
  return (
    <SuperTokensWrapper>
      <FilledCard type={"recruiter"} formDetails={user} />
    </SuperTokensWrapper>
  );
};

export default compose(withGetOne)(Container);
