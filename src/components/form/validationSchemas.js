import * as Yup from 'yup';
import eighteenYearsAgo,{validateFile, phoneRegExp} from './utilities';

export const ThemeSelectionVaidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            vc_theme: Yup.string()
                .oneOf(['Vc Theme 1', 'Vc Theme 2'], 'Theme must be "fixedValue"')
                .required('Theme is required'),
        }),
    }),
});

export const SupplierThemeSelectionVaidationSchema = Yup.object().shape({
    organization_auth_map: Yup.object().shape({
        data: Yup.object().shape({
            organization: Yup.object().shape({
                data: Yup.object().shape({
                    vc_theme: Yup.string()
                        .oneOf(['Vc Theme 1', 'Vc Theme 2'], 'Theme must be "fixedValue"')
                        .required('Theme is required'),
                })
            })
        }),
    }),
});

export const registrationValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            imageUrl: Yup.mixed()
                .test('fileSize', 'The file is too large', (value) => validateFile(value, 1)) // Assuming a max size of 5MB
                .test('fileType', 'Unsupported file format', (value) => validateFile(value, 1)),
            firstName: Yup.string()
                .required('First Name is required')
                .min(2, 'First Name must be at least 2 characters long'),
            lastName: Yup.string()
                .required('Last Name is required')
                .min(2, 'Last Name must be at least 2 characters long'),
            gender: Yup.string()
                .oneOf(['male', 'female', 'others'], 'Invalid gender')
                .required('Gender is required'),
            dob: Yup.date()
                .required('Date of birth is required')
                .max(eighteenYearsAgo, 'You must be at least 18 years old'),
        }),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    }),
});

export const educationValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            education: Yup.object().shape({
                data: Yup.object().shape({
                    institutionName: Yup.string().required('Institution Name is required'),
                    institutionCity: Yup.string().required('City of Institution is required'),
                    level: Yup.string().required('Level of education is required'),
                    studyField: Yup.string().required('Field of study is required'),
                    passoutYear: Yup.date()
                        .max(new Date(), 'Passout year cannot be in the future')
                        .required('Passout year is required')
                        .typeError('Invalid date format'),
                })
            })
        }),
    }),
})

export const statusValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            experience: Yup.object().shape({
                data: Yup.object().shape({
                    brand_name: Yup.string()
                        .required('Brand Name is required')
                        .min(2, 'Brand Name must be at least 2 characters long')
                        .max(50, 'Brand Name cannot be longer than 50 characters'),
                    monthly_salary: Yup.string()
                        .required('Monthly Salary is required')
                        .oneOf(['1000', '2000'], 'Invalid salary selected'),
                }),
            }),
        }),
    }),
});

export const workExperienceValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            experience: Yup.object().shape({
                data: Yup.object().shape({
                    work_experience: Yup.string().required('Work experience is required'),
                    department: Yup.string().required('Department is required'),
                    position: Yup.string().required('Position is required'),
                }),
            }),
        }),
    }),
});

export const businessValidationSchema = Yup.object({
    companyLogo: Yup.mixed()
        .nullable()
        .notRequired(), // Assuming this is a file upload field, and files are handled differently

    brandName: Yup.string()
        .required('Brand Name is required')
        .min(2, 'Brand Name must be at least 2 characters')
        .max(100, 'Brand Name must not exceed 100 characters'),

    companyName: Yup.string()
        .required('Company Name is required')
        .min(2, 'Company Name must be at least 2 characters')
        .max(100, 'Company Name must not exceed 100 characters'),

    gender: Yup.string()
        .required('Please select a gender'),

    natureOfBusiness: Yup.array()
        .min(1, 'Please select at least one option')
        .required('This field is required'),

    numberOfEmployees: Yup.string()
        .required('Please select the number of employees')
        .oneOf(['1-10', '11-50'], 'Invalid number of employees selection')
});

export const addressValidationSchema = Yup.object({
    useMap: Yup.boolean(),
    pincode: Yup.string()
        .required('Pincode is required')
        .matches(/^\d{6}$/, 'Pincode must be exactly 6 digits'), // Adjust regex according to your country's postal code standards
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    houseNumber: Yup.string()
        .required('House number is required')
        .max(50, 'House number must not exceed 50 characters'),
    area: Yup.string()
        .max(100, 'Area description must not exceed 100 characters') // Optional field but with a length validation
});

export const contactValidationSchema = Yup.object({
    personName: Yup.string()
        .required('Contact Person Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name can be no longer than 50 characters'),

    contactNumber: Yup.string()
        .required('Contact Number is required')
        .matches(phoneRegExp, 'Invalid phone number'),

    email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),

    website: Yup.string()
        .nullable()
        .notRequired()
});

export const supplierContactValidationSchema = Yup.object({
    areaOfCoverage: Yup.string()
        .required('Selecting an area of coverage is required'),

    scaleOfSupply: Yup.string()
        .required('Selecting a scale of supply is required'),

    personName: Yup.string()
        .required('Contact Person Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name can be no longer than 50 characters'),

    contactNumber: Yup.string()
        .required('Contact Number is required')
        .matches(phoneRegExp, 'Invalid phone number'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    website: Yup.string()
        .url('Enter a valid URL')
        .notRequired() // Makes it optional
});

export const preferenceValidationSchema = Yup.object().shape({
    profile: Yup.object().shape({
        data: Yup.object().shape({
            preference: Yup.object().shape({
                data: Yup.object().shape({
                    working_city: Yup.string().required('City is required'),
                    one_day_job: Yup.boolean().required('Please specify if you want a one-day job'),
                    internship: Yup.boolean().required('Please specify if you want an internship'),
                    partime_job: Yup.boolean().required('Please specify if you want a part-time job'),
                    aadhar: Yup.string()
                        .when('idType', {
                            is: 'Aadhar',
                            then: Yup.string()
                                .matches(/^\d{12}$/, 'Aadhar serial number must be 12 digits')
                                .required('Aadhar serial number is required'),
                            otherwise: Yup.string().notRequired(),
                        }),
                    passport: Yup.string()
                        .when('idType', {
                            is: 'Passport',
                            then: Yup.string()
                                .matches(/^[A-Z0-9]{8,12}$/, 'Passport serial number must be between 8 and 12 characters')
                                .required('Passport serial number is required'),
                            otherwise: Yup.string().notRequired(),
                        }),
                }),
            }),
        }),
    }),
});

export const gstPanValidationSchema = Yup.object().shape({
    gstFile: Yup.mixed().test(
        'gst-or-pan-required',
        'Either GST or PAN file must be attached',
        function (value) {
            const { panFile } = this.parent;
            return value || panFile; // GST file should be present if PAN file is not, or vice versa
        }
    ),
    panFile: Yup.mixed().test(
        'gst-or-pan-required',
        'Either GST or PAN file must be attached',
        function (value) {
            const { gstFile } = this.parent;
            return value || gstFile; // PAN file should be present if GST file is not, or vice versa
        }
    ),
});