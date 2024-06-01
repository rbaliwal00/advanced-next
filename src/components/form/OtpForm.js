import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";
import * as Yup from "yup";
import { Box, Typography, Button, FormHelperText } from "@mui/material";
import { createTimer } from "./utilities";
import { useRouter } from "next/router";
import Image from "next/image";
import { addBanner } from "@public/assests";
import AdsSwiper from "@components/ads-swiper";

const validationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(4, "OTP must be exactly 4 digits"),
});

const VerifyOTP = ({ subHeader, onBack, callBack, mobile, resend }) => {
  const [timeLeft, setTimeLeft] = useState(30 / 6);
  const [resendStatus, setResendStatus] = useState('');

  const router = useRouter();

  const btnText = timeLeft > 0 ? `Resend OTP in ${timeLeft} sec` : "Resend OTP";
  const btnTextColor = timeLeft > 0 ? "#8899A8" : "#113B73";

  useEffect(() => {
    const timer = createTimer(30, (val) => setTimeLeft(val));

    return () => timer.stop(); // Cleanup function to stop the timer on unmount
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        textAlign: "center",
        display: "flex", // Use Flexbox for alignment
        flexDirection: "column", // Stack children vertically
        alignItems: "center", // Center-align children horizontally
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h4 className="text-center text-[33.18px] mt-10 font-semibold">
        Verify OTP
      </h4>
      <p className="text-[#C1C1C1] text-center mb-2 text-sm text-[16px] mb-4 font-normal">
        Enter the 4 digit code sent to {mobile}
      </p>
      {/* <Typography variant="body2" sx={{ mb: 2 }}>
        {subHeader || "We will send you a Confirmation Code"}
      </Typography> */}
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setResendStatus(false)
          setSubmitting(true);
          if (values.otp >= 1000 && values.otp <= 9999) {
            callBack(values.otp).then((status) => {
              if (!status) setResendStatus(true)
            });
          }
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form>
            <Field name="otp">
              {({ field }) => (
                <Box>
                  <div className="grid justify-center gap-2 mt-12">
                    <OtpInput
                      {...field}
                      value={field.value}
                      onChange={(otp) => {
                        setFieldValue("otp", otp);
                        setResendStatus(false)
                      }}
                      numInputs={4}
                      separator={<span>-</span>}
                      shouldAutoFocus
                      isInputNum
                      renderInput={(props) => <input {...props} />}
                      containerStyle={{ gap: "2rem" }}
                      inputStyle={{
                        width: "45px",
                        height: "45px",
                        margin: "0 5px",
                        fontSize: "20px",
                        borderRadius: "5px",
                        color: "black",
                        border: "1px solid rgba(0,0,0,0.3)",
                        border:
                          touched.otp && errors.otp
                            ? "1px solid red"
                            : "1px solid rgba(0,0,0,0.3)",
                      }}
                    />
                    <Box
                      disabled={timeLeft > 0}
                      onClick={() => {
                        setTimeLeft(60);
                        resend();
                      }}
                      sx={{
                        textTransform: "none", // Prevent uppercase
                        display: "flex",
                        width: "100%",
                        marginBottom: "30px",
                        cursor: timeLeft > 0 ? "not-allowed" : "pointer",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "right", // Ensures text is right-aligned
                          fontSize: "10px", // Sets font size
                          display: "flex", // Uses flexbox for internal alignment
                          color: { btnTextColor },
                          alignItems: "center",
                          justifyContent: "flex-end",
                          width: "100%",
                        }}
                      >
                        {btnText}
                      </Typography>
                    </Box>
                  </div>
                  {touched.otp && errors.otp && (
                    <FormHelperText
                      sx={{ color: "error.main", textAlign: "right" }}
                    >
                      {errors.otp}
                    </FormHelperText>
                  )}
                  {resendStatus && (
                    <FormHelperText
                      sx={{ color: "error.main", textAlign: "right" }}
                    >
                      Invalid OTP
                    </FormHelperText>
                  )}
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        sm: "none",
                      },
                    }}
                  >
                    <AdsSwiper width={280} />
                  </Box>
                </Box>
              )}
            </Field>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                width: {
                  xs: "100%",
                  sm: "282px",
                },
                alignSelf: "center",
                height: "48px",
                mt: "15px",
                mb: "16px",
                background: "#113B73",
                color: "white",
                ":hover": {
                  background: "#0A2C5A",
                },
              }}
            >
              Verify
            </Button>
          </Form>
        )}
      </Formik>
      <Button onClick={onBack} sx={{ color: "#113B73" }}>
        Back
      </Button>
    </Box>
  );
};

export default VerifyOTP;
