import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@mui/material';
// import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';  // Adjust import path as needed
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Persist } from 'formik-persist';
import { nextBtn, renderBackButton } from '../form/utilities';


const ExperienceForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {
    return (
                <Form {...formikProps}>
                    <Box sx={{
                        maxWidth: {
                            xs: '100%',  // If viewport width is below 600px, maxWidth is 100%
                            sm: '608px'  // If viewport width is above 600px, maxWidth is 608px
                        },
                        m: 'auto',
                        mt: {
                            xs: '8px',
                            sm: '32px',
                        },
                        px: {
                            xs: '16px',
                            sm: '35px'
                        },
                        py:{
                            xs: '16px',
                            sm: '30px'},
                        boxShadow: {
                            xs: 'none',
                            sm:'0px 4px 25px 0px rgba(0, 0, 0, 0.05)'},
                        borderRadius: {
                            xs: '0px',
                            sm: '12px'
                        },
                        bgcolor: 'background.paper',
                    }}>
                       <h1>Experience Form</h1>
                        <Box display="flex" justifyContent="space-between" width="100%" fullWidth>
                            {nextBtn(isLastStep)}
                            {renderBackButton(onBack, step)}
                        </Box>
                        
                    </Box>
                    {/* <Persist name="business-form" /> */}
                </Form>
            )
};

ExperienceForm.propTypes = {
    formikProps: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    isLastStep: PropTypes.bool.isRequired,
    step: PropTypes.number
}

export default ExperienceForm;
