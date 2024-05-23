import React from "react";

import { compose } from "@common";

import Component from "../components/CreateView";
import { withPost, withUpdatePost } from "../operations";

const Container = (props) => {
  const {
    updatePost,
    router: { push },
  } = props;

  const onSubmit = async (values) => {
    await updatePost(values);
    push("/posts");
  };
  return <Component {...props} onSubmit={onSubmit} />;
};

export default compose(withPost, withUpdatePost)(Container);
