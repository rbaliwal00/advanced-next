import * as Yup from "yup";

export const educationValidationSchema = Yup.object().shape({
    educations: Yup.array().of(
      Yup.object().shape({
        institutionName: Yup.string().required("Institution name is required"),
        educationType: Yup.string().required("Education type is required"),
        cgpa: Yup.string().required("CGPA is required"),
        fromDate: Yup.date().required("From date is required"),
        toDate: Yup.date().required("To date is required"),
      })
    ),
  });