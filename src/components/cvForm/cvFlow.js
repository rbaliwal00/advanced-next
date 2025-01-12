import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
// import BusinessForm from './BusinessForm'
// import AddressForm from './AddressForm';
// import ContactForm from './ContactForm';
import MultiStepForm from '../form/StepFormContainer';
import EducationForm from './educationForm';
import ExperienceForm from './experienceForm';
import ReferenceForm from './referenceForm';
import AwardForm from './awardForm';
import BioForm from './bioForm';
import {
    awardValidationSchema,
    referenceValidationSchema,
    educationValidationSchema,
    experienceValidationSchema
  } from "./validationSchemas";
// import GstPanCardForm from './GstPanCardForm'
// import { businessValidationSchema, addressValidationSchema, contactValidationSchema, gstPanValidationSchema  } from './validationSchemas';

// Initial values for Formik


function convertSchema(input) {
  const output = [
      {
          id: input.id,
          first_name: input.first_name,
          last_name: input.last_name,
          gender: input.gender,
          dob: input.dob,
          image_url: input.image_url,
          website: input.website,
          vc_theme: input.vc_theme,
          cv_theme: input.cv_theme,
          sub_type: input.sub_type,
          type: input.type,
          auth_id: input.auth_id,
          awards: {
              data: input.awards?.map(award => ({
                  id: award.id,
                  brand_name: award.brand_name,
                  department: award.department,
                  name: award.name,
                  position: award.position
              })),
              on_conflict: {
                  constraint: "awards_pkey",
                  update_columns: ["brand_name", "department", "name", "position"]
              }
          },
          education: {
              data: input.education?.map(edu => ({
                  id: edu.id,
                  cgpa: edu.cgpa,
                  from_date: edu.from_date,
                  to_date: edu.to_date,
                  institution_city: edu.institution_city,
                  institution_name: edu.institution_name,
                  level: edu.level,
                  passout_year: edu.passout_year,
                  study_field: edu.study_field
              })),
              on_conflict: {
                  constraint: "education_pkey",
                  update_columns: ["cgpa", "from_date", "to_date", "institution_city", "institution_name", "level", "passout_year", "study_field"]
              }
          },
          experience: {
              data: input.experience?.map(exp => ({
                  id: exp.id,
                  brand_name: exp.brand_name,
                  department: exp.department,
                  from_date: exp.from_date,
                  to_date: exp.to_date,
                  monthly_salary_text: exp.monthly_salary_text,
                  position: exp.position,
                  sub_category: exp.sub_category,
                  type: exp.type,
                  work_experience: exp.work_experience
              })),
              on_conflict: {
                  constraint: "experience_pkey",
                  update_columns: ["brand_name", "department", "from_date", "to_date", "monthly_salary_text", "position", "sub_category", "type", "work_experience"]
              }
          },
          // preference: {
          //     data: input.preference?.map(pref => ({
          //         id: pref.id,
                  
          //         aadhar: pref.aadhar,
          //         internship: pref.internship,
          //         one_day_job: pref.one_day_job,
          //         partime_job: pref.partime_job,
          //         passport: pref.passport,
          //         working_city: pref.working_city
          //     })),
          //     on_conflict: {
          //         constraint: "preference_pkey",
          //         update_columns: ["aadhar", "internship", "one_day_job", "partime_job", "passport", "working_city"]
          //     }
          // },
          references: {
              data: input.references?.map(ref => ({
                  id: ref.id,
                  
                  brand_name: ref.brand_name,
                  department: ref.department,
                  email: ref.email,
                  name: ref.name,
                  phone_number: ref.phone_number,
                  position: ref.position
              })),
              on_conflict: {
                  constraint: "reference_pkey",
                  update_columns: ["brand_name", "department", "email", "name", "phone_number", "position"]
              }
          },
          bio:{
              data: input.bio?.map(bio => ({
                  id: bio.id,
                  about: bio.about,
                  facebook: bio.facebook,
                  instagram: bio.instagram,
                  linkedin: bio.linkedin,
                  language: bio.language,
                  newsletter: bio.newsletter,
                  portfolio: bio.portfolio,
                  skills: bio.skills,
                  whatsapp: bio.whatsapp
              })),
              on_conflict: {
                  constraint: "bio_pkey",
                  update_columns: [
                      "about",
                      "facebook",
                      "instagram",
                      "linkedin",
                      "language",
                      "newsletter",
                      "portfolio",
                      "skills",
                      "whatsapp"
                  ]
              }
          
          }
      }
  ];

  return output;
}


const on_conflict = {
  "constraint": "profile_pkey",
  "update_columns": [
    "first_name",
    "last_name",
    "gender",
    "dob",
    "image_url",
    "website",
    "vc_theme",
    "cv_theme",
    "sub_type",
    "type"
  ]
}

const CVForm = ({profile_data, handleSubmitForm, deleteFunctionProps}) => {
  const router = useRouter();
  const formConfigs = [
    {
      Component: EducationForm,
      initialValues: {
        education: [],
      },
      key: "education",
      validationSchema: educationValidationSchema,
      deleteFunction: deleteFunctionProps?.deleteEducation,
    },
    {
      Component: ExperienceForm,
      initialValues: {
        experiences: [],
      },
      key: "experience",
      validationSchema: experienceValidationSchema,
      deleteFunction: deleteFunctionProps?.deleteExperience,
    },
    {
      Component: ReferenceForm,
      initialValues: {
        references: [],
      },
      key: "reference",
      validationSchema: referenceValidationSchema,
      deleteFunction: deleteFunctionProps?.deleteReference,
    },
    {
      Component: AwardForm,
      initialValues: {
        awards: [],
      },
      key: "award",
      validationSchema: awardValidationSchema,
      deleteFunction: deleteFunctionProps?.deleteAward,
    },
    {
      Component: BioForm,
      initialValues: {
        awardName: "",
        brandName: "",
        department: "",
        position: "",
      },
      key: "bio",
      deleteFunction: deleteFunctionProps?.deleteBio,
    },
  ];

  return (
    <Box sx={{ flex: 1 }}>
      <MultiStepForm
        prefillData={profile_data}
        formConfigs={formConfigs}
        // deleteFunctionProps={deleteFunctionProps}
        onSubmitFinal={async (values) =>{
          // alert(`end of recruiter flow ${JSON.stringify(values)}`);
          const convertedValues = convertSchema(values);
          await handleSubmitForm(convertedValues, on_conflict);
          setTimeout(() => {
            router.push("/users/job-seeker/cv/view");
          }, 1000);
        }
        }
      />
    </Box>
  );
};

export default CVForm;

