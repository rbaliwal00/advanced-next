import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
// import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';  // Adjust import path as needed
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Persist } from "formik-persist";
import { nextBtn, renderBackButton } from "../form/utilities";
import reference from "@public/assests/references.svg";
import AddItemsButton from "./addItemsButton";
import ReferenceFormTemplate from "./referenceFormTemplate";

const ReferenceForm = ({ onBack, isLastStep, type, step, deleteFunction, ...formikProps }) => {
  const initialReferences = {
    referenceName: "",
    contact: "",
    brandName: "",
    email: "",
    department: "",
    position: "",
  };

  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : -1);
  };

  const handleAddReference = () => {
    const updatedReferences = [
      ...(formikProps.values.references ?? []),
      initialReferences,
    ];
    formikProps.setFieldValue("references", updatedReferences);
    setExpandedIndex(updatedReferences.length - 1);
  };

  const handleDeleteReference = async (index) => {
    const id = formikProps.values.references[index].id;
    const updatedReferences = [...formikProps.values.references];
    updatedReferences.splice(index, 1);
    formikProps.setFieldValue("references", updatedReferences);
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else if (expandedIndex > index) {
      setExpandedIndex(expandedIndex - 1);
    }
    if (id) {
      await deleteFunction(id);
    }
  };

  console.log("formikProps", formikProps);

  return (
    <Form {...formikProps}>
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
              formikProps.values.education?.length !== 0 &&
              {
                //   xs: 'calc(100vh - 14rem)',
                //   sm: 'calc(100vh - 20rem)'
              },
          }}
        >
          {formikProps.values.references.length === 0 && (
            <img src={reference.src} />
          )}
          {formikProps.values.references.map((_, index) => (
            <Box key={index} width="100%">
              <ReferenceFormTemplate
                formikProps={formikProps}
                index={index}
                expanded={expandedIndex === index}
                onAccordionChange={handleAccordionChange(index)}
                onDelete={() => handleDeleteReference(index)}
              />
            </Box>
          ))}
          <AddItemsButton
            handleAddFunction={handleAddReference}
            text={"Add Reference"}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          {nextBtn(isLastStep)}
          {renderBackButton(onBack, step)}
        </Box>
      </Box>
      {/* <Persist name="business-form" /> */}
    </Form>
  );
};

ReferenceForm.propTypes = {
  formikProps: PropTypes.object,
  onBack: PropTypes.func.isRequired,
  type: PropTypes.string,
  isLastStep: PropTypes.bool.isRequired,
  step: PropTypes.number,
};

export default ReferenceForm;
