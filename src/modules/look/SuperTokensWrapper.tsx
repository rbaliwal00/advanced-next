import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Session from "supertokens-web-js/recipe/session";
import ITEM from "@modules/users/graphql/item.graphql";
import { withCreatePost } from "@modules/users/operations";
import { compose } from "@modules/common";
import CircularProgress from "@mui/material/CircularProgress";

const SuperTokensWrapper = ({
  children,
  auth = true,
  redirectIfLoggedIn = false,
  isProfileCreation = false,
}: any) => {
  const router = useRouter();
  const [getUser, { loading: userLoading, data, error }] = useLazyQuery(ITEM);

  // console.log("check errors in login---", data, error);
  async function executeCheck() {
    const hasSession = await Session.doesSessionExist();
    if (!hasSession && auth == false) return;
    if (!hasSession && auth) {
      router.replace?.("/users/login/mobile-otp");
      return;
    }
    const id = await Session.getUserId();
    if (!id) {
      router.replace?.("/");
      return;
    }
    const res = await getUser({ variables: { id } });
    const user = res.data?.user;
    const profile = user?.profile[0];

    // console.log(user)

    if (!user?.profile?.length && !isProfileCreation) {
      router.replace?.("/users/role-selection");
      return;
    }

    if (user?.profile?.length && redirectIfLoggedIn) {
      if (profile?.type?.toUpperCase() == "JOBSEEKER") {
        router.replace?.("/users/get-one");
        return;
      }
      router.replace?.("/users/getOther");
      return;
    }
  }

  useEffect(() => {
    executeCheck();
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { user: data?.user });
    }
    return child;
  });

  if (userLoading) return <CircularProgress />
  return <div>{childrenWithProps}</div>;
};

export default compose(withCreatePost)(SuperTokensWrapper);
