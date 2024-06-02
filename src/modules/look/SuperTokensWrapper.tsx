import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Session from "supertokens-web-js/recipe/session";

const SuperTokensWrapper = ({ children, auth = true }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Session.doesSessionExist().then((i) => {
      console.log("🚀 ~ Session.doesSessionExist ~ isUserLoggedIn:", i);
      setLoading(false);
      if (i == auth) return;
      router.replace?.("/");
    });
  }, []);

  if (loading) return <></>;
  return <>{children}</>;
};

export default SuperTokensWrapper;
