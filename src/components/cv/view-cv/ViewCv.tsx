import React from "react";
import { compose } from "@common";

import CvHeader from "./CvHeader";
import { Box } from "@mui/material";
import About from "./About";
import Content from "./Content";
import {withGetCvInfo} from "@components/cvForm/cvOperations";

const ViewCv = ({...props}) => {
  console.log("props---", props);

  if (props.loading) {
    return <div>Loading...</div>;
  }

  const profile_data = props.profile_data;
  return (
    <Box
      sx={{
        margin: 2,
        border: "0.5px solid #F3F4F6",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CvHeader profile_data={profile_data} />
      <About />
      <Content />
    </Box>
  );
};

export default compose(withGetCvInfo)( ViewCv);
