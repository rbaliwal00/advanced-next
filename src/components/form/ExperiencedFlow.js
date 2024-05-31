import React, { useState } from 'react';
import MultiStepForm from './StepFormContainer';
import RegistrationForm from './RegistrationForm';
import StatusForm from './StatusForm';
import WorkExperienceForm from './ExperienceForm';
import PreferenceForm from './PreferenceForm';
import VisitingCardComponent from './CarouselScreen'
import PropTypes from 'prop-types';

import { statusValidationSchema, workExperienceValidationSchema, registrationValidationSchema, preferenceValidationSchema, ThemeSelectionVaidationSchema } from './validationSchemas';

const formConfigs = [
    {
        Component: (props) => (
            <VisitingCardComponent {...props} />),
            initialValues: {
                profile: {
                    data: {
                        vc_theme: '',
                        type: "jobSeeker",
                        sub_type: 'experienced'
                    },
                },
            },
        validationSchema: ThemeSelectionVaidationSchema,
        key: 'choose theme',
        type: 'experienced'
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
                    sub_type: 'experienced'
                },
                email: '', // Moved `email` under `profile`
            },
        },
        validationSchema: registrationValidationSchema,
        key: 'registration',    
    },
    {
        Component: StatusForm,
        initialValues: {
            profile: {
                data: {
                    type: "jobSeeker",
                    sub_type: 'fresher',
                    experience: {
                        data: {
                            brand_name: '',
                            montly_salary: '',
                        }
                    }
                }
            }
        },
        validationSchema: statusValidationSchema,
        key: 'status'
    },
    {
        Component: WorkExperienceForm,
        initialValues: {
            profile: {
                data: {
                    type: "jobSeeker",
                    sub_type: 'fresher',
                    experience: {
                        data: {
                            work_experience: '',
                            department: '',
                            position: '',
                            type: ''
                        }
                    }
                }
            }
        },
        validationSchema: workExperienceValidationSchema,
        key: 'workExperience' 
    },
    {
        Component: PreferenceForm,
        initialValues: {
            profile: {
                data: {
                    type: "jobSeeker",
                    sub_type: 'experienced',
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
        type: 'experienced'
    }
];

// Initial values for Formik
const ExperiencedForm = ({onSubmit, prefillData}) => {
    
    const handleSubmitFinal = (values) => {
        delete values.idType;
        delete values.profile.email;
        delete values.currentCity;
        values['phone_number'] = '8919729964';
        values.profile.data.website = 'google.com';
        values.profile.data.cv_theme = 'cv theme 1';
        values.profile.data.experience.data.type =  'type 1';
        // values.profile.data.education.data.cgpa = '6';
        // values.profile.data.education.data.from_date = "2023/05/01";
        // values.profile.data.education.data.to_date = '2024/03/01'
        onSubmit(values)
    }

    return (
        <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => handleSubmitFinal(values)} prefillData={prefillData}/>
    );
};

ExperiencedForm.propTypes = {
    onSubmit: PropTypes.func,
    prefillData: PropTypes.object
}

export default ExperiencedForm;
