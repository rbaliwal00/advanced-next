import React from "react";
import { withStateAndActionsForPosts } from "../resolvers";
import { compose } from "@modules/common";

import Component from "../components/ListView";
import { withDeletePost, withPosts } from "../operations";

const Container = (props) => {
  const { deletePost, refetchPosts, router } = props;

  const onLinkClick = (link: string) => {
    router.push(link);
  };

  const handleDelete = (id) => {
    deletePost(id);
    refetchPosts();
  };

  return (
    <Component {...props} onLinkClick={onLinkClick} onDelete={handleDelete} />
  );
};

export default compose(
  withStateAndActionsForPosts,
  withPosts,
  withDeletePost,
)(Container);
