import * as Yup from "yup";

export const educationValidationSchema = Yup.object().shape({
  education:  Yup.array().of(Yup.object().shape({
      institution_name: Yup.string().required("Institution Name is required"),
      // institution_city: Yup.string().required(
      //   "City of Institution is required",
      // ),
      // level: Yup.string().required("Level of education is required"),
      // study_field: Yup.string().required("Field of study is required"),
      // passout_year: Yup.date()
      //     .max(new Date(), 'Passout year cannot be in the future')
      //     .required('Passout year is required')
      //     .typeError('Invalid date format'),
      level: Yup.string().required('Level of education is required'),
      from_date: Yup.date().required('From date is required').typeError('Invalid date format'),
      to_date: Yup.date().required('To date is required').typeError('Invalid date format'),
    })),
});

export const experienceValidationSchema = Yup.object().shape({
  experience: Yup.array().of(
    Yup.object().shape({
      brand_name: Yup.string().required("Brand Name is required"),
      department: Yup.string().required("Department is required"),
      position: Yup.string().required("Position is required"),
      from_date: Yup.date().required('From date is required').typeError('Invalid date format'),
      to_date: Yup.date().required('To date is required').typeError('Invalid date format'),
      monthly_salary_text: Yup.string().required("Monthly Salary is required"),
      // work_experience: Yup.string().required("Work Experience is required"),
    }),
  ),
});

export const awardValidationSchema = Yup.object().shape({
  awards: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Award Name name is required"),
      brand_name: Yup.string().required("Brand Name is required"),
      department: Yup.string().required("Department is required"),
      position: Yup.string().required("Position is required"),
    }),
  ),
});

export const referenceValidationSchema = Yup.object().shape({
  references: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Reference Name is required"),
      phone_number: Yup.string().required("Reference Contact Number is required"),
      brand_name: Yup.string().required("Brand Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      department: Yup.string().required("Department is required"),
    }),
  ),
});
