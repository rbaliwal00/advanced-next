import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { Box, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from '../form/utilities';
import experienced from '@public/assests/experienced.svg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EducationFormTemplate from './EducationFormTemplate';

const ExperienceForm = ({ onBack, isLastStep, type, step }) => {
  const initialEducation = { institutionName: '', educationType: '', cgpa: '', fromDate: '', toDate: '' };

  return (
    <Formik
      initialValues={{ educations: [initialEducation] }}
      validationSchema={Yup.object({
        educations: Yup.array().of(
          Yup.object({
            institutionName: Yup.string().required('Required'),
            educationType: Yup.string().required('Required'),
            cgpa: Yup.string(),
            fromDate: Yup.date().required('Required'),
            toDate: Yup.date().required('Required')
          })
        )
      })}
      onSubmit={(values) => {
        console.log(values);
        // handle form submission
      }}
    >
      {({ values, ...formikProps }) => (
        <Form>
          <Box
            sx={{
              maxWidth: {
                xs: '100%',
                sm: '608px'
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
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              sx={{
                justifyContent: {
                  xs: 'center',
                  sm: 'flex-start'
                },
                height: {
                  xs: 'calc(100vh - 14rem)',
                  sm: 'calc(100vh - 20rem)'
                }
              }}
            >
              {values.educations.length === 0 && (
                <img src={experienced.src} alt="Experienced" />
              )}
              <FieldArray name="educations">
                {({ push, remove }) => (
                  <>
                    {values.educations.map((_, index) => (
                      <Box key={index} width="100%">
                        <EducationFormTemplate
                          formikProps={formikProps}
                          index={index}
                          onDelete={remove}
                        />
                      </Box>
                    ))}
                    <Button
                      type="button"
                      variant="contained"
                      sx={{
                        borderRadius: '8px',
                        maxHeight: '48px',
                        py: '10px',
                        backgroundColor: '#FE8B4C',
                        textTransform: 'none',
                        width: '90%'
                      }}
                      onClick={() => push(initialEducation)}
                    >
                      <AddCircleOutlineIcon />
                      <Typography fontSize="16px" fontWeight="600" color="#fff">
                        Add Education
                      </Typography>
                    </Button>
                  </>
                )}
              </FieldArray>
            </Box>
            <Box display="flex" justifyContent="space-between" width="100%">
              {nextBtn(isLastStep)}
              {renderBackButton(onBack, step)}
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

ExperienceForm.propTypes = {
  onBack: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  type: PropTypes.string,
  step: PropTypes.number
};

export default ExperienceForm;
