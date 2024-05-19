import React from "react";

import { compose } from "@common";

import Component from "../components/CreateView";
import { withCreatePost } from "../operations";

const Container = (props) => {
  const { createPost } = props;

  const onSubmit = async (values) => createPost(values);
  return <Component {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
