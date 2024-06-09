import React from "react";

import { compose } from "@common";
import SupplierForm from "@components/form/SupplierFlow";
import { withCreatePost } from "../operations";
import { SuperTokensWrapper } from "@modules/look";
import { useRouter } from "next/router";

const Container = (props) => {
  const {
    createUserProfile,
    // router: { push },
  } = props;

  const router = useRouter();

  const onSubmit = async (object) => {
    const result = await createUserProfile(object);
    if (result?.id) {
      localStorage.setItem("currId", result.id);
      router.push("/users/getOther");
    }
    // push("/posts");
  };
  return (
    <SuperTokensWrapper
      isProfileCreation={true}
      redirectIfLoggedIn={true}
      auth={true}
    >
      <SupplierForm {...props} onSubmit={onSubmit} />;
    </SuperTokensWrapper>
  );
};

export default compose(withCreatePost)(Container);
