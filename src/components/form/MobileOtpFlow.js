import React, { useState } from "react";
import MobileNumberForm from "./MobileForm";
import VerifyOTP from "./OtpForm";
import { useRouter } from "next/router";

const OtpRegistrationFlow = () => {
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const handleShowOtp = () => {
    setShowOtp(true);
  };
  const hideOtp = () => {
    setShowOtp(false);
  };

  const handleVerify = (otp) => {
    router.push("/users/role-selection");
  };

  return showOtp ? (
    <VerifyOTP onBack={hideOtp} callBack={handleVerify} />
  ) : (
    <MobileNumberForm callback={handleShowOtp} />
  );
};

export default OtpRegistrationFlow;
