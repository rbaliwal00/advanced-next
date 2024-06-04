import React, { useEffect } from "react";
import { compose } from "@common";

import CvHeader from "./CvHeader";
import { Box } from "@mui/material";
import About from "./About";
import Content from "./Content";
import { withGetCvInfo } from "@components/cvForm/cvOperations";

const ViewCv = ({ ...props }) => {
  console.log("props---", props);

  useEffect(() => {
    props.refetchProfileData();
  }, []);


  if (props.loading) {
    return <div>Loading...</div>;
  }
  

  const profile_data = props.profile_data;
  return (
    <Box sx={{ maxWidth: "496px", margin: "20px auto" }}>
      <Box
        sx={{
          border: "0.5px solid #F3F4F6",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        }}
      >
        <CvHeader profile_data={profile_data} />
        <About   profile_data={profile_data} />
        <Content  profile_data={profile_data} />
      </Box>
      <Box sx={{ margin: "30px" }}>
        <video
          width="374"
          height="155"
          controls
          style={{
            textAlign: "center",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
          }}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          ></source>
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default compose(withGetCvInfo)(ViewCv);
