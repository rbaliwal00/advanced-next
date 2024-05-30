import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Typography } from "@mui/material";
// import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';  // Adjust import path as needed
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Persist } from "formik-persist";
import { nextBtn, renderBackButton } from "../form/utilities";
import award from "@public/assests/awards.svg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AwardForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {
  return (
    <Form {...formikProps}>
      <Box
        sx={{
          maxWidth: {
            xs: "100%", // If viewport width is below 600px, maxWidth is 100%
            sm: "608px", // If viewport width is above 600px, maxWidth is 608px
          },
          m: "auto",
          mt: {
            xs: "8px",
            sm: "32px",
          },
          px: {
            xs: "16px",
            sm: "35px",
          },
          py: {
            xs: "16px",
            sm: "30px",
          },
          boxShadow: {
            xs: "none",
            sm: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
          },
          borderRadius: {
            xs: "0px",
            sm: "12px",
          },
          bgcolor: "background.paper",
        }}
      >
        <Box 
            display={'flex'} 
            alignItems={'center'}
            flexDirection={'column'}
            sx={{
                justifyContent:{
                    xs:'center',
                    sm:'flex-start'
                },
                height:{
                    xs:'calc(100vh - 14rem)',
                    sm:'calc(100vh - 20rem)'
                }
            }}
            >
          {/* <EducationFormTemplate {...formikProps} /> */}
          <img src={award.src} />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "8px",
              maxHeight: "48px",
              py: "10px",
              backgroundColor: "#FE8B4C",
              textTransform: "none",
              width: "90%",
            }}
          >
            <AddCircleOutlineIcon />
            <Typography fontSize={"16px"} fontWeight={"600"} color={"#fff"}>
              Add Awards
            </Typography>
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          fullWidth
        >
          {nextBtn(isLastStep)}
          {renderBackButton(onBack, step)}
        </Box>
      </Box>
      {/* <Persist name="business-form" /> */}
    </Form>
  );
};

AwardForm.propTypes = {
  formikProps: PropTypes.object,
  onBack: PropTypes.func.isRequired,
  type: PropTypes.string,
  isLastStep: PropTypes.bool.isRequired,
  step: PropTypes.number,
};

export default AwardForm;
