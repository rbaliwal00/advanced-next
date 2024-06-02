import React from "react";

import { compose } from "@common";
import ExperiencedForm from "@components/form/ExperiencedFlow";
import { withCreatePost } from "../operations";
import { useRouter } from "next/router";

const Container = (props) => {
  const {
    createUserProfile,
    // router: { push },
  } = props;

  const router = useRouter();

  const onSubmit = async (object) => {
    const result = await createUserProfile( object);
    localStorage.setItem("currId", result.id);
    router.push("/users/get-one");
  };
  return <ExperiencedForm {...props} onSubmit={onSubmit} />;
};

export default compose(withCreatePost)(Container);
