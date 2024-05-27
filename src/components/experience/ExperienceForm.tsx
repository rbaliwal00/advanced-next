import React from 'react';
import { withFormik, FormikProps, Form, FormikErrors } from 'formik';
import { Button, Container, Typography } from '@mui/material';
import ExperienceFieldArray from './ExperienceFieldArray';

interface Experience {
  company: string;
  from: string;
  to: string;
  city: string;
  department: string;
  subCategory: string;
  position: string;
}

interface FormValues {
  experiences: Experience[];
}

interface OtherProps {
  title: string;
  handleSubmit: () => void;
}

const ExperienceForm = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
}: FormikProps<FormValues> & OtherProps) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {values.title}
      </Typography>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <ExperienceFieldArray
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const FormikEnhancedExperienceForm = withFormik<OtherProps, FormValues>({
  mapPropsToValues: () => ({
    experiences: [
    //   {
    //     company: '',
    //     from: '',
    //     to: '',
    //     city: '',
    //     department: '',
    //     subCategory: '',
    //     position: '',
    //   },
    ],
  }),

  validate: (values) => {
    // const errors: FormikErrors<FormValues> = { experiences: [] };
    // values.experiences.forEach((experience, index) => {
    //   const experienceErrors: {
    //     company?: string;
    //     from?: string;
    //     to?: string;
    //     city?: string;
    //     department?: string;
    //     subCategory?: string;
    //     position?: string;
    //   } = {};
    //   if (!experience.company) experienceErrors.company = 'Required';
    //   if (!experience.from) experienceErrors.from = 'Required';
    //   if (!experience.to) experienceErrors.to = 'Required';
    //   if (!experience.city) experienceErrors.city = 'Required';
    //   if (!experience.department) experienceErrors.department = 'Required';
    //   if (!experience.subCategory)
    //     experienceErrors.subCategory = 'Required';
    //   if (!experience.position) experienceErrors.position = 'Required';
    //   if (Object.keys(experienceErrors).length)
    //     errors.experiences![index] = experienceErrors;
    // });
    // return errors;
    return true;
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log('values', values);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },

  displayName: 'ExperienceForm',
})(ExperienceForm);

export default FormikEnhancedExperienceForm;
