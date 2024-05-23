import React from 'react';
import { Formik, Form } from 'formik';
import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from './utilities';

const ContactForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {

    

    const renderSelect = (typeOfCoverage) => {
            if(typeOfCoverage === 'state' || typeOfCoverage === 'city'){
                return (
                    <MaterialUIFieldAdapter
                        type="select"
                        options={[{ value: 'New York', label: 'New York' }, { value: 'Los Angeles', label: 'Los Angeles' }]}
                        name="currentCity"
                        label="Current City"
                        placeholder="Select"
                        {...formikProps}
                    />
                )
            }else if(typeOfCoverage === 'inter_state' || typeOfCoverage === "inter_city"){
                return (<MaterialUIFieldAdapter
                    name="cityOrState"
                    type="multiselect"
                    label=""
                    {...formikProps}
                    options={[{ value: 'tech', label: 'Tech' }, { value: 'retail', label: 'Retail' }]}
                />)
            }else return <></>
    }

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
                borderRadius: 2,
                bgcolor: 'background.paper',
            }}>
                        
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            type="radio"
                            name="areaOfCoverage"
                            label="Area of Coverage"
                            rowRadio={false}
                            options={[
                                { label: "Pan India", value: "pan_india" },
                                { label: "State", value: "state" },
                                { label: "City", value: "city" },
                                { label: "Inter-State", value: "inter_state" },
                                { label: "Inter-City", value: "inter_city" }
                            ]}
                        />
                        {renderSelect(formikProps.values.areaOfCoverage)}
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            type="radio"
                            name="scaleOfSupply"
                            label="Scale of Supply"
                            options={[
                                { label: "Small Scale", value: "small" },
                                { label: "Large Scale", value: "large" }
                            ]}
                            rowRadio
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="personName"
                            type="text"
                            label="Contact Person Name"
                            placeholder="Type"
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="contactNumber"
                            type="text"
                            label="Contact Number"
                            placeholder="Type"
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Type"
                        />
                        <MaterialUIFieldAdapter
                            {...formikProps}
                            name="website"
                            type="text"
                            label="Website(Optional)"
                            placeholder="Type"
                        />
                        <Box display="flex" justifyContent="space-between" width="100%" fullWidth>
                            {nextBtn(isLastStep)}
                            {renderBackButton(onBack, step)}
                        </Box>
                    </Box>
                </Form>
            )
};

ContactForm.propTypes = {
    formikProps: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    isLastStep: PropTypes.bool.isRequired,
    step: PropTypes.number
}

export default ContactForm;
