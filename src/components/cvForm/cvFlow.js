import React, { useState } from 'react';
import { Box } from '@mui/material';
// import BusinessForm from './BusinessForm'
// import AddressForm from './AddressForm';
// import ContactForm from './ContactForm';
import MultiStepForm from '../form/StepFormContainer';
import EducationForm from './educationForm';
import ExperienceForm from './experienceForm';
import ReferenceForm from './referenceForm';
import AwardForm from './awardForm';
import BioForm from './bioForm';
import educationValidationSchema, {
    awardValidationSchema,
    referenceValidationSchema,
  } from "./validationSchemas";
// import GstPanCardForm from './GstPanCardForm'
// import { businessValidationSchema, addressValidationSchema, contactValidationSchema, gstPanValidationSchema  } from './validationSchemas';

// Initial values for Formik
const formConfigs = [
    {
        Component: EducationForm,
        initialValues:
        {
            educations:[]
        },
        key: 'education',   
        validationSchema: educationValidationSchema
    },
    {
        Component: ExperienceForm,
        initialValues: {
            experiences:[]
        },
        key: 'experience'
    },
    {
        Component: ReferenceForm,
        initialValues: {
          references: [],
        },
        key: "reference",
        validationSchema: referenceValidationSchema,
      },
      {
        Component: AwardForm,
        initialValues: {
          awards: [],
        },
        key: "award",
        validationSchema: awardValidationSchema,
      },
    {
        Component: BioForm,
        initialValues: {
            about:'',
            portfolioLink:'',
            newsletterLink:'',
            whatsAppNumber:'',
            facebookLink:'',
            instagramLink:'',
            linkedInLink:'',
            languages:'',
            skills:'',
        },
        key: 'bio'
    }
];

const CVForm = () => {
   
    return (
        <Box sx={{ flex: 1 }}>
            <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => alert(`end of recruiter flow ${JSON.stringify(values)}`)} />
        </Box>
    );
};

export default CVForm;

