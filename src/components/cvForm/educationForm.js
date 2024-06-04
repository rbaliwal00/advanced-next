import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { Box, Button, Typography } from "@mui/material";
import * as Yup from "yup";
import PropTypes from "prop-types";
// import { toast } from 'react-toastify';

import { nextBtn, renderBackButton } from "../form/utilities";
import graduated from "@public/assests/graduation-hat-with-certificate.svg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EducationFormTemplate from "./educationFormTemplate";
import AddItemsButton from './addItemsButton'

const EducationForm = ({ onBack, isLastStep, deleteFunction, type, step, ...formikProps }) => {
  const initialEducation = {
    institutionName: "",
    educationType: "",
    cgpa: "",
    fromDate: "",
    toDate: "",
  };

  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {

    setExpandedIndex(isExpanded ? index : -1);
  };

  const handleAddEducation = () => {
    const updatededucation = [
      ...(formikProps.values.education ?? []),
      initialEducation,
    ];
    formikProps.setFieldValue("education", updatededucation);
    setExpandedIndex(updatededucation.length - 1);
  };

  const handleDeleteEducation = async (index) => {
    // toast.loading('Education Deleting....', { position: 'top-right',  });
    const educationId = formikProps.values.education[index].id;
    const updatededucation = [...formikProps.values.education];
    updatededucation.splice(index, 1);
    formikProps.setFieldValue("education", updatededucation);
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else if (expandedIndex > index) {
      setExpandedIndex(expandedIndex - 1);
    }
    if (educationId) {
      await deleteFunction(educationId);
    }
    // toast.dismiss();
    // toast.success('Education Deleted Successfully', { position: 'top-right',  });
  };

  return (
    <Form onSubmit={formikProps.handleSubmit}>
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "608px",
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
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            height:
              formikProps.values.education.length !== 0 &&
              {
                //   xs: 'calc(100vh - 14rem)',
                //   sm: 'calc(100vh - 20rem)'
              },
          }}
        >
          {formikProps.values.education.length === 0 && (
            <img src={graduated.src} alt="Experienced" />
          )}

          {formikProps.values.education.map((_, index) => (
            <Box key={index} width="100%">
              <EducationFormTemplate
                formikProps={formikProps}
                index={index}
                expanded={expandedIndex === index}
                onAccordionChange={handleAccordionChange(index)}
                onDelete={() => handleDeleteEducation(index)}
              />
            </Box>
          ))}
          <AddItemsButton handleAddFunction={handleAddEducation} text={'Add Education'} />
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          {nextBtn(isLastStep)}
          {renderBackButton(onBack, step)}
        </Box>
      </Box>
    </Form>
  );
};

EducationForm.propTypes = {
  onBack: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  formikProps: PropTypes.object,
};

export default EducationForm;
