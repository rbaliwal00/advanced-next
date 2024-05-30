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
            },
            profile: {
                data: {
                    type: "supplier",
                    sub_type: 'supplier',
                    website: 'dummyData.com',
                    image_url: 'jbjbjbjbj'
                },
            },
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
            organization_auth_map: {
                data: {
                    organization: {
                        data: {
                            gst_pan: {
                                data: {
                                    gst: "",
                                    pan: "",
                                    status: ""
                                }
                            }
                        }
                    }
                }
            }
        },
        validationSchema: gstPanValidationSchema,
        key: 'Gst/Pan'
    },
    {
        Component: AddressForm,
        initialValues: {
            organization_auth_map: {
                data: {
                    organization: {
                        data: {
                            organization_location_map: {
                                data: {
                                    location: {
                                        data: {
                                            area: "",
                                            block_number: "",
                                            city: "",
                                            geolocation: {
                                                data: {
                                                    "latitude": "12.21",
                                                    "longitude": "21.12",
                                                    "other": {},
                                                    "type": "Type 1"
                                                }
                                            },
                                            pincode: "",
                                            state: ""
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        validationSchema: addressValidationSchema,
        key: 'address'
    },
    {
        Component: ContactForm,
        initialValues: {
            organization_auth_map: {
                data: {
                    organization: {
                        data: {
                            contact: {
                                data: {
                                    name: "",
                                    email: "",
                                    website: "",
                                    phone_number: ""
                                }
                            },
                            suppliers: {
                                data: {
                                    area: "",
                                    scale: ""
                                }
                            }
                        }
                    }
                }
            }
        },
        validationSchema: supplierContactValidationSchema,
        key: 'supplierContact'
    }
];

const SupplierForm = ({onSubmit}) => {

    const handleSubmitFinal = (values) => {
        values['phone_number'] = '8209275391';
        values.profile.data.first_name = 'saksham';
        values.profile.data.last_name = 'meher';
        values.profile.data.gender = 'male';
        values.profile.data.dob = '22/5/1999';
        values.profile.data.cv_theme = 'theme 1'
        values.organization_auth_map.data.organization.data.no_of_employee = 11;
        onSubmit(values)
    }

    return (
        <MultiStepForm formConfigs={formConfigs} onSubmitFinal={(values) => handleSubmitFinal(values)} />
    )
};

export default SupplierForm;
