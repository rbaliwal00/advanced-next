import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";
import * as Yup from "yup";
import { Box, Typography, Button, FormHelperText } from "@mui/material";
import { createTimer } from "./utilities";
import { useRouter } from "next/router";
import Image from "next/image";
import { addBanner } from "@public/assests";

const validationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(4, "OTP must be exactly 4 digits"),
});

const VerifyOTP = ({ subHeader, onBack, callBack }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  const router = useRouter();

  useEffect(() => {
    const timer = createTimer(10, (val) => setTimeLeft(val));

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
      }}
    >
      <h4 className="text-center text-[33.18px]">Verify OTP</h4>
      <p className="text-[#C1C1C1] text-center mb-2 text-sm text-[16px] mb-4">
        Enter the 4 digit code sent to 9414098765
      </p>
      {/* <Typography variant="body2" sx={{ mb: 2 }}>
        {subHeader || "We will send you a Confirmation Code"}
      </Typography> */}
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (values.otp >= 1000 && values.otp <= 9999) {
            callBack();
          }
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form>
            <Field name="otp">
              {({ field }) => (
                <Box>
                  <div className="grid justify-center">
                    <OtpInput
                      {...field}
                      value={field.value}
                      onChange={(otp) => setFieldValue("otp", otp)}
                      numInputs={4}
                      separator={<span>-</span>}
                      shouldAutoFocus
                      isInputNum
                      renderInput={(props) => <input {...props} />}
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
                    <Button
                      disabled={timeLeft > 0}
                      onClick={() => console.log("check for callback")}
                      sx={{
                        textTransform: "none", // Prevent uppercase
                        width: "100%", // Ensure the button occupies the required width
                        justifyContent: "flex-end", // Aligns content to the right within the button
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "right", // Ensures text is right-aligned
                          fontSize: "10px", // Sets font size
                          display: "flex", // Uses flexbox for internal alignment
                          marginBottom: "30px",
                          color: "white",
                          alignItems: "center", // Centers items vertically within the flex container
                        }}
                      >
                        Resend OTP in {timeLeft} sec
                      </Typography>
                    </Button>
                  </div>
                  {touched.otp && errors.otp && (
                    <FormHelperText
                      sx={{ color: "error.main", textAlign: "right" }}
                    >
                      {errors.otp}
                    </FormHelperText>
                  )}
                  <Box
                    display={{
                      xs: "block",
                      sm: "none",
                    }}
                    sx={{ marginTop: "20px" }}
                  >
                    <Image src={addBanner} />
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
                  sm: "280px",
                },
                alignSelf: "center",
                height: "48px",
                mt: "40px",
                mb: "16px",
                background: "white",
                color: "#113B73",
                ":hover": {
                  background: "white",
                },
              }}
            >
              Verify
            </Button>
          </Form>
        )}
      </Formik>
      <Button onClick={onBack} sx={{ color: "white" }}>
        Back
      </Button>
    </Box>
  );
};

export default VerifyOTP;
