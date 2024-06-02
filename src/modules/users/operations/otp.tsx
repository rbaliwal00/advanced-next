import axios from "axios";
import * as React from "react";

const serverEndpoint = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const withOTP = (Component: React.FunctionComponent) => {
  const WithComponent = (props: any) => {
    const [mobile, setMobile] = React.useState("");

    const otpResend = async (phone_number: string) => {
      if (!mobile && phone_number) return otpGenerate(phone_number, "text");
      return otpGenerate(mobile, "text");
    };

    const otpGenerate = async (phone_number: string, resendType?: string) => {
      setMobile(phone_number);
      const response: any = await axios
        .post(
          `${serverEndpoint}/send-otp`,
          {
            data: {
              phone_number,
              ...(resendType ? { resendType } : {}),
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .catch((e) => null);
      if (response?.status != 200 || !response?.data) return false;
      return true;
    };

    const otpValidate = async (otp: string) => {
      if (!otp) return false;
      const response: any = await axios
        .post(
          `${serverEndpoint}/validate-otp`,
          {
            data: {
              phone_number: mobile,
              otp,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .catch((e) => null);
      if (response?.status != 200 || !response?.data) return false;
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
  return WithComponent;
};

export default withOTP;
