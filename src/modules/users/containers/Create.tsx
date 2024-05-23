import React from "react";

import { compose } from "@common";

import Component from "../components/CreateView";
import { withCreatePost } from "../operations";

const Container = (props) => {
  const {
    createPost,
    router: { push },
  } = props;

  const onSubmit = async (values) => {
    await createPost(values);
    push("/posts");
  };
  return <Component {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
