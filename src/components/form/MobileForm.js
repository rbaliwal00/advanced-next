import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MaterialUIFieldAdapter from "./MaterialUIFieldAdapter";
import PropTypes from "prop-types";
import Button from "@components/button";
import { addBanner } from "@public/assests";
import Image from "next/image";

// Validation schema
const validationSchema = Yup.object({
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
});

//header style
const resFontStyle = {
  fontSize: "24px",
  fontWeight: 600,
  "@media (min-width:600px)": {
    fontSize: "32px",
  },
};

const MobileNumberForm = ({
  header,
  subHeader,
  btnText,
  footerText,
  callback,
}) => (
  <Formik
    initialValues={{
      mobileNumber: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      callback();
      alert(`OTP sent`);
      setSubmitting(false);
      resetForm();
    }}
  >
    {() => (
      <Form style={{}}>
        <Box
          sx={{
            maxWidth: 400,
            m: "auto",
            px: "16px",
            display: "flex",
            flexDirection: "column",

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "33.18px",
              },
            }}
          >
            {header || "Enter Mobile Number"}
          </Typography>
          <Typography className="text-center font-[400] text-[13.33px] mb-20">
            {subHeader || "We will send you a Confirmation Code"}
          </Typography>
          <Box sx={{ marginY: "40px" }}>
            <MaterialUIFieldAdapter
              name="mobileNumber"
              type="text"
              label="Mobile Number"
              placeholder="Type Mobile Number"
              style={{ backgroundColor: "white", marginBottom: "30px" }}
            />
          </Box>
          <Box
            display={{
              xs: "block",
              sm: "none",
            }}
          >
            <Image src={addBanner} />
          </Box>
          <Button color="#113B73" backgroundColor="white" text="Get OTP" />
          <Typography
            variant="caption"
            display="block"
            align="center"
            fontSize={10}
            fontWeight={400}
            sx={{ marginTop: "30px" }}
          >
            {footerText || "By continuing agree to Horecah"} <br></br>
            <Typography fontWeight={600} fontSize={10}>
              <Link href="#" underline="always">
                Terms of Use & Privacy Policy
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Form>
    )}
  </Formik>
);

MobileNumberForm.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  footerText: PropTypes.string,
  btnText: PropTypes.string,
  callback: PropTypes.func,
};

export default MobileNumberForm;
