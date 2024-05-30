import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import PostForm from "./PostForm";
import { Box } from "@mui/material";

const Component = (props) => {
  const { loadingPost = false, post, onSubmit } = props;
  return (
    <Box alignSelf={"center"}>
      <div xs={12} lg={18} md={24}>
        {loadingPost && <CircularProgress />}
        {!loadingPost && (
          <PostForm
            post={post}
            onSubmit={onSubmit}
            // onFinishFailed={onFinishFailed}
          />
        )}
      </div>
    </Box>
  );
};

export default Component;
