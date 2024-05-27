import React, { useState } from 'react';
import MultiStepForm from './StepFormContainer';
import RegistrationForm from './RegistrationForm';
import StatusForm from './StatusForm';
import WorkExperienceForm from './ExperienceForm';
import PreferenceForm from './PreferenceForm'

import { statusValidationSchema, workExperienceValidationSchema, registrationValidationSchema, preferenceValidationSchema } from './validationSchemas';

const formConfigs = [
    {
        Component: RegistrationForm,
        initialValues: {
            image: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            dateOfBirth: '',
            currentCity: '',
        },
        validationSchema: registrationValidationSchema,
        key: 'registration',    
    },
    {
        Component: StatusForm,
        initialValues: {
            brandName: '',
            currentCity: '',
            monthlySalary: '',
        },
        validationSchema: statusValidationSchema,
        key: 'status'
    },
    {
        Component: WorkExperienceForm,
        initialValues: {
            workExperience: '',
            department: '',
            position: ''
        },
        validationSchema: workExperienceValidationSchema,
        key: 'workExperience' 
    },
    {
        Component: PreferenceForm,
        initialValues: {
            workCity: '',
            oneDayJob: false,
            internship: false,
            partTimeJob: false,
            idType: '',
            idNumber: ''
        },
        validationSchema: preferenceValidationSchema,
        key: 'preference',
        type: 'experienced'
    }
];

// Initial values for Formik
const ExperiencedForm = () => {
    

    return (
        <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => alert(`end of experienced flow ${JSON.stringify(values)}`)} />
    );
};

export default ExperiencedForm;
