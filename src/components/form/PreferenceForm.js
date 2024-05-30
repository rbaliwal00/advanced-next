import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@mui/material';
import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from './utilities';
import { OneDayJob, GraduateIcon } from "@public/assets/icons";
import { partTimeImg } from './utilities';


const PreferenceForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {
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
                    type="select"
                    name="profile.data.preference.data.working_city"
                    label="City"
                    options={[{ value: 'city1', label: 'City 1' }, { value: 'city2', label: 'City 2' }]} // Populate according to your data
                />

                <MaterialUIFieldAdapter 
                    {...formikProps}
                    type="radioCard"
                    name="profile.data.preference.data.one_day_job"
                    label="Do you want one day job ?"
                    radioImg={OneDayJob}
                    options={[{ value: true, label: 'Yes' }, { value: false, label: 'No' }]}
                />

                {formikProps.values.profile.data.sub_type === 'fresher' && <MaterialUIFieldAdapter
                    {...formikProps}
                    type="radioCard"
                    name="profile.data.preference.data.internship"
                    label="Do you want internship ?"
                    radioImg={GraduateIcon}
                    options={[{ value: true, label: 'Yes' }, { value: false, label: 'No' }]}
                />}

                <MaterialUIFieldAdapter
                    {...formikProps}
                    type="radioCard"
                    name="profile.data.preference.data.partime_job"
                    label="Do you want Part-Time job ?"
                    radioImg={partTimeImg}
                    options={[{ value: true, label: 'Yes' }, { value: false, label: 'No' }]}
                />

                <Box sx={{ p: '16px', borderRadius: '10px', mt: '16px', mb: "16px", boxShadow: '0px 5px 25px rgba(29, 29, 29, 0.05)' }}>
                    <MaterialUIFieldAdapter
                        {...formikProps}
                        name="idType"
                        type="radio"
                        label="Upload ID Image"
                        options={[{ value: 'aadhar', label: 'Aadhar' }, { value: 'passport', label: 'Passport' }]}
                    />
                    <MaterialUIFieldAdapter 
                        {...formikProps}
                        name={formikProps.values.idType === 'aadhar' ? "profile.data.preference.data.aadhar" : 'profile.data.preference.data.passport'}
                        type="text"
                        placeholder={"serial no"}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" width="100%" fullWidth>
                    {nextBtn(isLastStep)}
                    {renderBackButton(onBack, step)}
                </Box>
            </Box>
        </Form>
    )
}

PreferenceForm.propTypes = {
    formikProps: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    isLastStep: PropTypes.bool.isRequired,
    step: PropTypes.number
}

export default PreferenceForm;
