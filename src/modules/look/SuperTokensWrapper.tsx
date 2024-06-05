import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Session from "supertokens-web-js/recipe/session";
import ITEM from "@modules/users/graphql/item.graphql";

const SuperTokensWrapper = ({
  children,
  auth = false,
  redirectIfLoggedIn = false,
}: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [getUser, { loading: userLoading, data }] = useLazyQuery(ITEM);

  useEffect(() => {
    Session.doesSessionExist().then(async (i) => {
      console.log(
        "🚀 ~ Session.doesSessionExist ~ i:",
        i,
        auth == false && !redirectIfLoggedIn,
      );
      if (auth == false && !redirectIfLoggedIn) {
        setLoading(false);
        return;
      }
      if (!i) {
        setLoading(false);
        return;
      }
      const id = await Session.getUserId();
      const res = await getUser({ variables: { id } });
      console.log(res.data?.user?.profile[0]?.id, redirectIfLoggedIn)
      if (!res.data?.user?.profile[0]?.id && redirectIfLoggedIn) {
        router.replace?.("/users/role-selection");
        setLoading(false);
        return;
      }
      if (router.pathname === '/' && res.data?.user?.profile[0]?.id) {
        console.log("🚀 ~ Session.doesSessionExist ~ router.pathname", router.pathname, res.data?.user?.profile[0])
        if(res.data?.user?.profile[0].type === 'jobSeeker'){
          router.replace?.("/users/get-one");
        }else{
          router.replace?.("/users/getOther");
        }
      }
      setLoading(false);
    });
  }, []);

  if (loading || userLoading) return <></>;

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { user: data?.user });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};

export default SuperTokensWrapper;
