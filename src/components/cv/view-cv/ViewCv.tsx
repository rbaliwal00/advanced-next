import React, { useEffect } from "react";
import { compose } from "@common";
import { Button, Grid, IconButton } from "@mui/material";

import CvHeader from "./CvHeader";
import { Box } from "@mui/material";
import About from "./About";
import Content from "./Content";
import { withGetCvInfo } from "@components/cvForm/cvOperations";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShareIcon from "@mui/icons-material/Share";

import Link from "next/link";

const ButtonStack = ({ updateType, handleDownloadImage,  userId }) => {
  const currentDomain =  typeof window !== 'undefined' ? window?.location?.hostname ?? "" : ""; 
  const nextRoute = "https://" + currentDomain +
    "/users/job-seeker/cv/view" + "/" + userId ;
  const fullMsg = `Check my CV here ${nextRoute}`;
  const shareOnWatsapp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      fullMsg,
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box
    // display="grid"
    //       alignItems="center"
    // flexDirection={"row"}
    // sx={{
    //     flexDirection: 'row',
    //     alignItems: "center",
    //     // alignItems: "center",
    //     // position: "absolute",
    //     // left: "372px",
    //     // top: "50%",
    //     // transform: "translateY(-50%)"
    // }}
    >
      <IconButton
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)",
          // marginBottom: '16px',
          // '&:hover': {
          //     backgroundColor: 'white',
          // },
          borderWidth: "1px",
          borderColor: "#EFEFEF",
        }}
        style={{
          margin: "auto",
        }}
        onClick={handleDownloadImage}
      >
        <FileDownloadOutlinedIcon sx={{ color: "black" }} />
      </IconButton>

      <Link
        href={nextRoute}
        style={{
          margin: "auto",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)",
            // marginBottom: '16px',
            // '&:hover': {
            //     backgroundColor: 'white',
            // },
            borderWidth: "1px",
            borderColor: "#EFEFEF",
          }}
          style={{
            margin: "auto",
          }}
        >
          <EditOutlinedIcon sx={{ color: "black" }} />
        </IconButton>
      </Link>

      <IconButton
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)",
          // marginBottom: '16px',
          // '&:hover': {
          //     backgroundColor: 'white',
          // },
          borderWidth: "1px",
          borderColor: "#EFEFEF",
        }}
        style={{
          margin: "auto",
        }}
        onClick={shareOnWatsapp}
      >
        <ShareIcon sx={{ color: "#FF7E41" }} />
      </IconButton>
    </Box>
  );
};

const ViewCv = ({ ...props }) => {
  console.log("props---", props);
  const { isPublic } = props;

  useEffect(() => {
    props.refetchProfileData();
  }, []);

  if (props.loading) {
    return <div>Loading...</div>;
  }

  const handleDownloadImage = () => {
    console.log("Download Image");
  };

  const profile_data = props.profile_data;
  console.log("profile_data", profile_data)
  return (
    <Box sx={{ maxWidth: "496px", margin: "20px auto" }}>
      {!isPublic && (
        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          style={{
            margin: "20px 0px",
            border: "0.5px solid #F3F4F6",
            maxWidth: "496px",
            padding: "10px 0px",
          }}
        >
          <Button>
            <a href="/users/cv">Edit</a>
          </Button>
          <ButtonStack
            updateType="profile"
            handleDownloadImage={handleDownloadImage}
            userId={
              profile_data && profile_data.auth_id
            }
          />
        </Grid>
      )}
      <Box
        sx={{
          border: "0.5px solid #F3F4F6",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        }}
      >
        <CvHeader profile_data={profile_data} />
        <About profile_data={profile_data} />
        <Content profile_data={profile_data} />
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
