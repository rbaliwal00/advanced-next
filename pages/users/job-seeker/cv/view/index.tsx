import ViewCv from "@components/cv/view-cv/ViewCv";
import { SuperTokensWrapper } from "@modules/look";
import React from "react";

const index = (props) => {
  return (
    <SuperTokensWrapper>
      <ViewCv {...props} />
    </SuperTokensWrapper>
  );
};

export default index;
