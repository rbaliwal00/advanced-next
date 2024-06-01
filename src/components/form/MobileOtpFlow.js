import React, { useState } from "react";
import MobileNumberForm from "./MobileForm";
import VerifyOTP from "./OtpForm";
import { useRouter } from "next/router";

const OtpRegistrationFlow = (props) => {
  const { otpGenerate, otpValidate, otpResend } = props;
  const [showOtp, setShowOtp] = useState(false);
  const [mobile, setMobile] = useState('');
  const router = useRouter();

  const handleShowOtp = async (e) => {
    setMobile(e)
    const response = await otpGenerate(e)
    if (!response) return false;
    setShowOtp(true);
    return true
  };
  const hideOtp = () => {
    setShowOtp(false);
  };

  const handleVerify = async (otp) => {
    const response = await otpValidate(otp)
    if (!response) return false;
    router.push("/users/role-selection");
    return true
  };

  const handleResend = async () => {
    await otpResend(mobile)
  };


  return showOtp ? (
    <VerifyOTP onBack={hideOtp} callBack={handleVerify} mobile={mobile} resend={handleResend} />
  ) : (
    <MobileNumberForm callback={handleShowOtp} {...props} />
  );
};

export default OtpRegistrationFlow;
