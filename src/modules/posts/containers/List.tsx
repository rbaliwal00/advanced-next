import React from "react";
import { withStateAndActionsForPosts } from "../resolvers";
import { compose } from "@modules/common";

import Component from "../components/ListView";
import { withDeletePost, withPosts } from "../operations";

const Container = (props) => {
  const { deletePost, refetchPosts } = props;

  const handleDelete = (id) => {
    deletePost(id);
    refetchPosts();
  };

  return <Component {...props} onDelete={handleDelete} />;
};

export default compose(
  withStateAndActionsForPosts,
  withPosts,
  withDeletePost,
)(Container);
