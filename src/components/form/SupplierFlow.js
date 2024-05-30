import React from 'react';
import BusinessForm from './BusinessForm'
import AddressForm from './AddressForm';
import ContactForm from './SupplierContactForm';
import GstPanCardForm from './GstPanCardForm'
import VisitingCardComponent from './CarouselScreen';
import { businessValidationSchema, addressValidationSchema, supplierContactValidationSchema, gstPanValidationSchema, SupplierThemeSelectionVaidationSchema } from './validationSchemas';
import MultiStepForm from './StepFormContainer';
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
        type: 'supplier'
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
