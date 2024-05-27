import React from 'react';
import RegistrationForm from './RegistrationForm';
import EducationForm from './EducationForm';
import MultiStepForm from './StepFormContainer';
import PreferenceForm from './PreferenceForm'
import * as Yup from 'yup';
import preferenceValidationSchema from './validationSchemas'
import PropTypes from 'prop-types';
import eighteenYearsAgo, { validateFile } from './utilities';

// Initial values for Formik
const FresherForm = ({onSubmit}) => {
  const registrationValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
      data: Yup.object().shape({
        imageUrl: Yup.mixed()
          .test('fileSize', 'The file is too large', (value) => validateFile(value, 1)) // Assuming a max size of 5MB
          .test('fileType', 'Unsupported file format', (value) => validateFile(value, 1)),
        firstName: Yup.string()
          .required('First Name is required')
          .min(2, 'First Name must be at least 2 characters long'),
        lastName: Yup.string()
          .required('Last Name is required')
          .min(2, 'Last Name must be at least 2 characters long'),
        gender: Yup.string()
          .oneOf(['male', 'female', 'others'], 'Invalid gender')
          .required('Gender is required'),
        dob: Yup.date()
          .required('Date of birth is required')
          .max(eighteenYearsAgo, 'You must be at least 18 years old'),
      }),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
  });

  const educationValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
      data: Yup.object().shape({
        education: Yup.object().shape({
          data: Yup.object().shape({
            institutionName: Yup.string().required('Institution Name is required'),
            institutionCity: Yup.string().required('City of Institution is required'),
            level: Yup.string().required('Level of education is required'),
            studyField: Yup.string().required('Field of study is required'),
            passoutYear: Yup.date()
              .max(new Date(), 'Passout year cannot be in the future')
              .required('Passout year is required')
              .typeError('Invalid date format'),
          })
        })
      }),
    }),
  })
  // Define form configurations with specific props
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
        currentCity: ''
      },
      validationSchema: registrationValidationSchema,
      key: 'registration',
      type: 'fresher' // Example specific prop for RegistrationForm,       
    },
    {
      Component: EducationForm,
      initialValues: {
        levelOfEducation: '',
        nameOfInstitution: '',
        cityOfInstitution: '',
        fieldOfStudy: '',
        passoutYear: ''
      },
      validationSchema: educationValidationSchema,
      key: 'education'
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
      type: 'fresher'
    }
  ];


    return (
      <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => onSubmit(values)}/>
    );
};

FresherForm.proptypes = {
  onSubmit: PropTypes.func
}

export default FresherForm;
