import React from 'react';
import {  Form } from 'formik';
import { Box, Button, formControlLabelClasses } from '@mui/material';
import MaterialUIFieldAdapter from './MaterialUIFieldAdapter'; 
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from './utilities';




const StatusForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {
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
                py: {
                    xs: '16px',
                    sm: '30px'
                },
                boxShadow: {
                    xs: 'none',
                    sm: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)'
                },
                borderRadius: {
                    xs: '0px',
                    sm: '12px'
                },
                bgcolor: 'background.paper',
            }}>
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="brandName"
                            type="text"
                            label="Brand Name"
                            placeholder="Type"
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="currentCity"
                            type="select"
                            label="Current working city"
                            options={[
                                { value: 'newYork', label: 'New York' },
                                { value: 'losAngeles', label: 'Los Angeles' }
                            ]}
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="monthlySalary"
                            type="select"
                            label="Monthly Salary"
                            options={[
                                { value: '1000', label: '$1,000' },
                                { value: '2000', label: '$2,000' }
                            ]}
                        />
                        <Box display="flex" justifyContent="space-between" width="100%" fullWidth>
                            {nextBtn(isLastStep)}
                            {renderBackButton(onBack, step)}
                        </Box>
                    </Box>
                </Form>
            )
};

StatusForm.propTypes = {
    onBack: PropTypes.func,
    isLastStep: PropTypes.bool,
    step: PropTypes.number,
    formikProps: PropTypes.object,
    type: PropTypes.string
}

export default StatusForm;
