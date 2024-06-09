import axios from "axios";
import * as React from "react";
import {
  createCode,
  consumeCode,
} from "supertokens-web-js/recipe/passwordless";
import withCreate from "./create";
import { emitter } from "@modules/common";

const serverEndpoint = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const withOTP = (Component: React.FunctionComponent) => {
  const WithComponent = (props: any) => {
    const { createUserProfile } = props;
    const [mobile, setMobile] = React.useState("");

    const otpResend = async (phone_number: string) => {
      return;
      if (!mobile && phone_number) return otpGenerate(phone_number, "text");
      return otpGenerate(mobile, "text");
    };

    const otpGenerate = async (phone_number: string, resendType?: string) => {
      try {
        
        let response = await createCode({
          phoneNumber: `+91${phone_number}`,
        });
        if (response?.status != "OK") return false;
        setMobile(phone_number);
        return true;
      } catch (error) {
        console.log("check error", error)
      }
    };

    const otpValidate = async (otp: string) => {
      if (!otp) return false;
      let response = await consumeCode({
        userInputCode: otp,
      });
      if (response?.status != "OK" || !response.user?.id) return false;
      createUserProfile({
        id: response.user.id,
        phone_number: mobile,
      });
      emitter.emit("sign_in_status_change");
      return true;
    };

    return (
      <Component
        {...{
          otpResend,
          otpGenerate,
          otpValidate,
        }}
        {...props}
      />
    );
  };
  return withCreate(WithComponent);
};

export default withOTP;
