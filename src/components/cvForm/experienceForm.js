import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { Box, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from '../form/utilities';
import experienced from '@public/assests/experienced.svg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExperiencedFormTemplate from './experiencedFormTemplate';
import AddItemsButton from './addItemsButton'


const ExperienceForm = ({ onBack, isLastStep, type, deleteFunction, step, ...formikProps}) => {
  const initialexperience = {
    jobType: '',
    brandName: '',
    department: '',
    position: '',
    city: '',
    monthlySalary: '',
    fromDate: '',
    toDate: '',
  };

  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {

    setExpandedIndex(isExpanded ? index : -1);
  };

  const handleAddExperience = () => {
    const updatedexperience = [
      ...(formikProps.values.experience ?? []),
      initialexperience,
    ];
    formikProps.setFieldValue("experience", updatedexperience);
    setExpandedIndex(updatedexperience.length - 1);
  };

  const handleDeleteExperience = async(index) => {
    const id = formikProps.values.experience[index].id;
    const updatedexperience = [...formikProps.values.experience];
    updatedexperience.splice(index, 1);
    formikProps.setFieldValue("experience", updatedexperience);
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else if (expandedIndex > index) {
      setExpandedIndex(expandedIndex - 1);
    }

    if (id) {
      await deleteFunction(id);
    }
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
        {formikProps.values.experience?.length === 0 && (
          <img src={experienced.src} alt="Experienced" />
        )}

        {(formikProps.values.experience || []).map((_, index) => (
          <Box key={index} width="100%">
            <ExperiencedFormTemplate
              formikProps={formikProps}
              index={index}
              expanded={expandedIndex === index}
              onAccordionChange={handleAccordionChange(index)}
              onDelete={() => handleDeleteExperience(index)}
            />
          </Box>
        ))}
        <AddItemsButton handleAddFunction={handleAddExperience} text={'Add Experience'} />
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        {nextBtn(isLastStep)}
        {renderBackButton(onBack, step)}
      </Box>
    </Box>
  </Form>
  );
};

ExperienceForm.propTypes = {
  onBack: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  type: PropTypes.string,
  step: PropTypes.number
};

export default ExperienceForm;
