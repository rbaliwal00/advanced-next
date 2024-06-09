import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { signOut } from "supertokens-web-js/recipe/session";
import Session from "supertokens-web-js/recipe/session";
import { emitter } from "@modules/common";

const Logout = ({ style }) => {
  const { replace } = useRouter() ?? {};
  const [visible, setVisible] = useState(false);

  async function onLogout() {
    await signOut();
    setVisible(false);
    replace("/");
  }

  function signInStatus() {
    Session.doesSessionExist().then(async (i) => {
      setVisible(i);
    });
  }

  useEffect(() => {
    signInStatus();
    emitter.on("sign_in_status_change", () => {
      signInStatus();
    });
    return () => {
      emitter.off("sign_in_status_change");
    };
  }, []);

  if (!visible) return <></>;
  return (
    <>
      <a href="" style={style ?? {}} onClick={onLogout}>
        Logout
      </a>
    </>
  );
};

export default Logout;
