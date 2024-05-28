import React, { useState } from 'react';
import { Formik } from 'formik';
import { Box } from '@mui/material';
import CustomProgressBar from './CustomProgressBar'
import { deepMerge } from './utilities';

const MultiStepForm = ({ formConfigs, onSubmitFinal }) => {
    const [step, setStep] = useState(0);  // Current form step
    const [formData, setFormData] = useState({}); 
    const isLastStep = step === formConfigs.length - 1;

    const currentConfig = formConfigs[step];
    const CurrentForm = currentConfig.Component;

    const progress = Math.floor(((step+1)/formConfigs.length)*100)

    const handleNext = async (values, actions) => {
        const newFormData = deepMerge(formData, values);
        setFormData(newFormData)
        console.log("handleNext", newFormData);

        if (!isLastStep) {
            const errors = await actions.validateForm();
            if (Object.keys({}).length === 0) {
                setStep(prevStep => prevStep + 1);
            } else {
                const touched = {};
                const setNestedTouched = (obj, path) => {
                    const [head, ...rest] = path.split('.');
                    if (!rest.length) {
                        obj[head] = true;
                    } else {
                        obj[head] = obj[head] || {};
                        setNestedTouched(obj[head], rest.join('.'));
                    }
                };

                Object.keys(errors).forEach(key => {
                    setNestedTouched(touched, key);
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
                // validationSchema={currentConfig.validationSchema}
                onSubmit={handleNext}
            >
                    {formikProps =>  {
                        return (                
                            <CurrentForm {...formikProps} name={currentConfig.name} type={currentConfig.type} onBack={handleBack} isLastStep={isLastStep} step={step} />
                    )}}
            </Formik>
        </Box>
    );
};

export default MultiStepForm;
