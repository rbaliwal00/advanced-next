import React from 'react';
import RegistrationForm from './RegistrationForm';
import EducationForm from './EducationForm';
import MultiStepForm from './StepFormContainer';
import PreferenceForm from './PreferenceForm'
import * as Yup from 'yup';
import {preferenceValidationSchema} from './validationSchemas'
import PropTypes from 'prop-types';
import { registrationValidationSchema, educationValidationSchema, ThemeSelectionVaidationSchema } from './validationSchemas';
import VisitingCardComponent from './CarouselScreen'


// Initial values for Formik
const FresherForm = ({onSubmit}) => {

  // Define form configurations with specific props
  const formConfigs = [
    {
      Component: (props) => (
        <VisitingCardComponent {...props} />),
      initialValues: {
        profile: {
          data: {
            vc_theme: '',
            type: "jobSeeker",
            sub_type: 'fresher'
          },
        },
      },
      validationSchema: ThemeSelectionVaidationSchema,
      key: 'choose theme',
      type: 'fresher'  
    },
    {
      Component: RegistrationForm,
      
      initialValues: {
        profile: {
          data: {
            image_url: '', // Changed from `image` to `imageUrl`
            first_name: '',
            last_name: '',
            gender: '',
            dob: '',
            type: "jobSeeker",
            sub_type: 'fresher' 
          },
          email: '', // Moved `email` under `profile`
        },
      },
      validationSchema: registrationValidationSchema,
      key: 'registration',     
    },
    {
      Component: EducationForm,
      initialValues: {
        profile: {
          data: {
            type: "jobSeeker",
            sub_type: 'fresher',
            education: {
              data: {
                level: '',
                institution_name: '',
                institution_city: '',
                study_field: '',
                passout_year: '',
              }
            }
          }
        }
      },
      validationSchema: educationValidationSchema,
      key: 'education'
    },
    {
      Component: PreferenceForm,
      initialValues: {
        profile: {
          data: {
            type: "jobSeeker",
            sub_type: 'fresher',
            preference: {
              data: {
                aadhar: '',
                internship: '',
                one_day_job: '',
                partime_job: '',
                passport: '',
                working_city: ''
              }
            }
          }
        }
      },
      validationSchema: preferenceValidationSchema,
      key: 'preference',
    }
  ];

  const handleSubmitFinal = (values) => {
    delete values.idType;
    delete values.profile.email;
    values['phone_number'] = '8919729965';
    values.profile.data.website = 'google.com';
    values.profile.data.cv_theme = 'cv theme 1';
    values.profile.data.education.data.cgpa = '6';
    values.profile.data.education.data.from_date = "2023/05/01";
    values.profile.data.education.data.to_date = '2024/03/01'
    onSubmit(values)
  }


    return (
      <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => handleSubmitFinal(values)}/>
    );
};

FresherForm.propTypes = {
  onSubmit: PropTypes.func
}

export default FresherForm;
