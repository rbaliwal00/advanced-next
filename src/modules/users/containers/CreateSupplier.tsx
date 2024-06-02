import React from "react";

import { compose } from "@common";
import SupplierForm from "@components/form/SupplierFlow";
import { withCreatePost } from "../operations";
import { SuperTokensWrapper } from "@modules/look";

const Container = (props) => {
  const {
    createUserProfile,
    // router: { push },
  } = props;

  const onSubmit = async (object) => {
    const result = await createUserProfile(object);
    localStorage.setItem("currId", result.id);
    // push("/posts");
  };
  return (
    <SuperTokensWrapper>
      <SupplierForm {...props} onSubmit={onSubmit} />;
    </SuperTokensWrapper>
  );
};

export default compose(withCreatePost)(Container);
