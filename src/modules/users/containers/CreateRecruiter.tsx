import React from "react";

import { compose } from "@common";
import RecruiterForm from "@components/form/HirerFlow";
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
    if (result.id) {
      localStorage.setItem("currId", result.id);
      router.push("/users/getOther");
    }
  };

  return (
    <SuperTokensWrapper
      isProfileCreation={true}
      redirectIfLoggedIn={true}
      auth={true}
    >
      <RecruiterForm {...props} onSubmit={onSubmit} />;
    </SuperTokensWrapper>
  );
};

export default compose(withCreatePost)(Container);
