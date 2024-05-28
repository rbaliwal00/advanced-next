import React from "react";

import { compose } from "@common";
import ExperiencedForm from "@components/form/ExperiencedFlow";
import { withCreatePost } from "../operations";

const Container = (props) => {
  const {
    createUserProfile,
    // router: { push },
  } = props;

  const onSubmit = async (object) => {
    await createUserProfile( object);
    // push("/posts");
  };
  return <ExperiencedForm {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
