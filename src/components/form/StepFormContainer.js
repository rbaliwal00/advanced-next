import React, { useState } from 'react';
import { Formik } from 'formik';
import { Box } from '@mui/material';
import CustomProgressBar from './CustomProgressBar'

const MultiStepForm = ({ formConfigs, onSubmitFinal }) => {
    const [step, setStep] = useState(0);  // Current form step
    const [formData, setFormData] = useState({}); 
    const isLastStep = step === formConfigs.length - 1;

    const currentConfig = formConfigs[step];
    const CurrentForm = currentConfig.Component;

    const progress = Math.floor(((step+1)/formConfigs.length)*100)

    const handleNext = async (values, actions) => {
        const newFormData = { ...formData, ...values };
        setFormData(newFormData)

        if (!isLastStep) {
            const errors = await actions.validateForm();
            if (Object.keys(errors).length === 0) {
                setStep(step + 1);
            } else {
                const touched = {};
                Object.keys(errors).forEach(key => {
                    touched[key] = true;
                });
                actions.setTouched(touched);
            }
        } else {
            await onSubmitFinal(newFormData); // Final submission handler
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <Box>
            <CustomProgressBar  progress={progress} label={(currentConfig.key)}/>
            <Formik
                key={step}
                initialValues={currentConfig.initialValues}
                validationSchema={currentConfig.validationSchema}
                onSubmit={handleNext}
            >
                    {formikProps => (                
                            <CurrentForm {...formikProps} type={currentConfig.type} onBack={handleBack} isLastStep={isLastStep} step={step} />
                    )}
            </Formik>
        </Box>
    );
};

export default MultiStepForm;
