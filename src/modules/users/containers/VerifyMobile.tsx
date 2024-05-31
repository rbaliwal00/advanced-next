import * as React from "react";

import { compose } from "@modules/common";

import MobileVerification from "../components/MobileVerification";
import { withOTP } from "../operations";

const VerifyMobile = (props: any) => {
  return <MobileVerification {...props} />;
};

export default compose(withOTP)(VerifyMobile);
