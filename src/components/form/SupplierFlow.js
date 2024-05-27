import React, { useState } from 'react';
import { Box } from '@mui/material';
import BusinessForm from './BusinessForm'
import AddressForm from './AddressForm';
import ContactForm from './SupplierContactForm';
import GstPanCardForm from './GstPanCardForm'
import { businessValidationSchema, addressValidationSchema, supplierContactValidationSchema, gstPanValidationSchema } from './validationSchemas';
import MultiStepForm from './StepFormContainer';
// Initial values for Formik
const formConfigs = [
    {
        Component: BusinessForm,
        initialValues: {
            companyLogo: '',
            brandName: '',
            companyName: '',
            gender: '',
            natureOfBusiness: '',
            numberOfEmployees: ''
        },
        validationSchema: businessValidationSchema,
        key: 'business',
    },
    {
        Component: GstPanCardForm,
        initialValues: {
            gstFile: '',
            panFile: ''
        },
        validationSchema: gstPanValidationSchema,
        key: 'Gst/Pan'
    },
    {
        Component: AddressForm,
        initialValues: {
            useMap: false,
            pincode: '',
            city: '',
            state: '',
            houseNumber: '',
            area: ''
        },
        validationSchema: addressValidationSchema,
        key: 'address'
    },
    {
        Component: ContactForm,
        initialValues: {
            areaOfCoverage: '',
            scaleOfSupply: '',
            personName: '',
            contactNumber: '',
            email: '',
            website: '',
        },
        validationSchema: supplierContactValidationSchema,
        key: 'supplierContact'
    }
];

const SupplierForm = () => {

    return (
        <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => alert(`end of supplier flow ${JSON.stringify(values)}`)} />
    )
};

export default SupplierForm;
