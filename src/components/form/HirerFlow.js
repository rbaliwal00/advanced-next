import React from 'react';
import { Box } from '@mui/material';
import BusinessForm from './BusinessForm'
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import MultiStepForm from './StepFormContainer';
import GstPanCardForm from './GstPanCardForm'
import VisitingCardComponent from './CarouselScreen';
import { businessValidationSchema, addressValidationSchema, contactValidationSchema, gstPanValidationSchema, SupplierThemeSelectionVaidationSchema  } from './validationSchemas';

// Initial values for Formik
const formConfigs = [
    {
        Component: (props) => (
            <VisitingCardComponent {...props} />),
        initialValues: {
            organization_auth_map: {
                data: {
                    organization: {
                        data: {
                            vc_theme: ''
                        }
                    }
                }
            }
        },
        validationSchema: SupplierThemeSelectionVaidationSchema,
        key: 'choose theme',
        type: 'recruiter'  
    },
    {
        Component: BusinessForm,
        initialValues: {
            organization_auth_map: {
                data: {
                    organization: {
                        data: {
                            brand_name: '',
                            company_name: '',
                            image_url: '',
                            business_nature: '',
                            no_of_employee: ''
                        }
                    }
                }
            }
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
            personName: '',
            contactNumber: '',
            email: '',
            website: '',
        },
        validationSchema: contactValidationSchema,
        key: 'contact'
    }
];

const RecruiterForm = () => {
   

    return (
        <Box sx={{ flex: 1 }}>
            <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => alert(`end of recruiter flow ${JSON.stringify(values)}`)} />
        </Box>
    );
};

export default RecruiterForm;
