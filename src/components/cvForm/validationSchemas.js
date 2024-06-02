import * as Yup from "yup";

export const educationValidationSchema = Yup.object().shape({
  educations: Yup.array().of(
    Yup.object().shape({
      institutionName: Yup.string().required("Institution name is required"),
      educationType: Yup.string().required("Education type is required"),
      cgpa: Yup.string().required("CGPA is required"),
      fromDate: Yup.date().required("From date is required"),
      toDate: Yup.date().required("To date is required"),
    }),
  ),
});

export const awardValidationSchema = Yup.object().shape({
  awards: Yup.array().of(
    Yup.object().shape({
      awardTitle: Yup.string().required("Award Title name is required"),
      brandName: Yup.string().required("Brand Name is required"),
      department: Yup.string().required("Department is required"),
      position: Yup.date().required("Position is required"),
    }),
  ),
});

export const referenceValidationSchema = Yup.object().shape({
  references: Yup.array().of(
    Yup.object().shape({
      referenceName: Yup.string().required("Reference Name is required"),
      contact: Yup.string().required("Reference Contact Number is required"),
      brandName: Yup.string().required("Brand Name is required"),
    }),
  ),
});
