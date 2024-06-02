import * as React from "react";

import { compose } from "@modules/common";

import MobileVerification from "../components/MobileVerification";
import { withOTP } from "../operations";
import { SuperTokensWrapper } from "@modules/look";

const VerifyMobile = (props: any) => {
  return (
    <SuperTokensWrapper auth={false}>
      <MobileVerification {...props} />
    </SuperTokensWrapper>
  );
};

export default compose(withOTP)(VerifyMobile);
