import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export default eighteenYearsAgo;

export const validateFile = (file, maxSize) => {
  if (!file) return true; // Skip if no file is uploaded
  const sizeInBytes = maxSize * 1024 * 1024; // Convert MB to bytes
  return (
    file.size <= sizeInBytes &&
    ["image/jpeg", "image/png", "image/gif"].includes(file.type)
  );
};

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const nextBtn = (isLast) => {
  const text = isLast ? "Confirm" : "Next";

  const matches = useMediaQuery("(min-width:600px)");

  return matches ? (
    <Button
      type="submit"
      variant="contained"
      sx={{
        borderRadius: "8px",
        maxHeight: "48px",
        display: {
          xs: "inline-block",
          sm: "inherit",
        },
        margin: "auto",
        py: "10px",
        width: {
          xs: "90%",
          sm: "79%",
        },
        backgroundColor: "#113B73",
        textTransform: "none",
        maxWidth: "608px",
        boxShadow: "none",
      }}
    >
      <Typography
        fontSize={"16px"}
        fontWeight={"600"}
        color={"#fff"}
        fontFamily={"Poppins"}
      >
        {text}
      </Typography>
    </Button>
  ) : (
    <Box
      sx={{
        position: "fixed",
        bottom: "0px",
        left: "-3px",
        padding: "16px",
        borderRadius: "8px 8px 0 0",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        background: "white",
        width: "100%",
      }}
    >
      <Button
        type="submit"
        variant="contained"
        sx={{
          borderRadius: "8px",
          maxHeight: "48px",
          display: "block",
          margin: "auto",
          width: "100%",
          py: "10px",
          backgroundColor: "#113B73",
          textTransform: "none",
        }}
      >
        <Typography
          fontSize={"16px"}
          fontWeight={"600"}
          color={"#fff"}
          fontFamily={"Poppins"}
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

export const renderBackButton = (onBack, step) => {
  const router = useRouter();

  const handleClick = () => {
    console.log("check btn clicked", step);
    step > 0 ? onBack() : router.back();
  };

  return (
    <Button
      type="button"
      variant="outlined"
      sx={{
        width: { sm: "19%" }, // Applies width starting from the sm breakpoint
        textTransform: "none",
        display: {
          xs: "none", // Hides the button on extra small screens (below 600px)
          sm: "block", // Displays the button on screens 600px and wider
        },
        borderRadius: "8px",
        maxHeight: "48px",
        py: "10px",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#113B73",
      }}
      onClick={handleClick}
    >
      <Typography fontSize={"16px"} fontWeight={"600"} color={"#113B73"}>
        Back
      </Typography>
    </Button>
  );
};

export const createTimer = (duration, onUpdate) => {
  let seconds = duration;
  const intervalId = setInterval(() => {
    seconds -= 1;
    onUpdate(seconds); // Call the onUpdate function with the current time

    if (seconds <= 0) {
      clearInterval(intervalId);
      onUpdate(0); // Optionally notify that the timer has ended
    }
  }, 1000);

  return {
    getCurrentTime: () => seconds,
    stop: () => {
      clearInterval(intervalId);
      console.log("Timer stopped manually with", seconds, "seconds remaining.");
    },
  };
};

export const styles = {
  formContainers: {
    maxWidth: {
      xs: "100%", // If viewport width is below 600px, maxWidth is 100%
      sm: "608px", // If viewport width is above 600px, maxWidth is 608px
    },
    m: "auto",
    mt: {
      xs: "8px",
      sm: "32px",
    },
    px: {
      xs: "16px",
      sm: "35px",
    },
    py: {
      xs: "16px",
      sm: "30px",
    },
    boxShadow: {
      xs: "none",
      sm: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
    },
    borderRadius: {
      xs: "0px",
      sm: "12px",
    },
    bgcolor: "background.paper",
  },
};

export const CvVideoImg = require("../../../public/assets/cvVideo.png");
export const CvFormImg = require("../../../public/assets/cvForm.png");

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export function deepMerge(target, source) {
  let output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

export const partTimeImg = require("@public/assets/partTime.png");

export const transformObject = (obj) => {
    const { profile, organization_auth_map } = obj;

    const org = organization_auth_map[organization_auth_map.length - 1]?.organization;
    const { organization_location_map, gst_pan, contact, suppliers } = org
    const location = organization_location_map[0]?.location;

    const profileData = Array.isArray(profile) ? profile[profile.length -1] : profile;
    const { awards, education, experience, preference, references } = profileData;

    const prefillFormData = {
        email: obj?.email ?? '',
        phone_number: obj.phone_number ?? '',
        profile: {
            data: {
                vc_theme: profileData?.vc_theme ?? '',
                type: profileData?.type ?? '',
                awards: {
                    data: {
                        brand_name: awards[0]?.brand_name ?? '',
                        department: awards[0]?.department ?? '',
                        name: awards[0]?.name ?? '',
                        position: awards[0]?.position ?? '',
                    },
                },
                cv_theme: profileData?.cv_theme ?? '',
                dob: profileData?.dob ?? '',
                education: {
                    data: {
                        cgpa: education[0]?.cgpa ?? '',
                        from_date: education[0]?.from_date ?? '',
                        to_date: education[0]?.to_date ?? '',
                        institution_city: education[0]?.institution_city ?? '',
                        institution_name: education[0]?.institution_name ?? '',
                        level: education[0]?.level ?? '',
                        passout_year: education[0]?.passout_year ?? '',
                        study_field: education[0]?.study_field ?? '',
                    },
                },
                experience: {
                    data: {
                        brand_name: experience[0]?.brand_name ?? '',
                        department: experience[0]?.department ?? '',
                        montly_salary: experience[0]?.montly_salary ?? '',
                        position: experience[0]?.position ?? '',
                        sub_category: experience[0]?.sub_category ?? '',
                        type: experience[0]?.type ?? '',
                        work_experience: experience[0]?.work_experience ?? '',
                    },
                },
                first_name: profileData?.first_name ?? '',
                last_name: profileData?.last_name ?? '',
                gender: profileData?.gender ?? '',
                image_url: profileData?.image_url ?? '',
                preference: {
                    data: {
                        aadhar: preference[0]?.aadhar ?? '',
                        internship: preference[0]?.internship ?? '',
                        one_day_job: preference[0]?.one_day_job ?? '',
                        partime_job: preference[0]?.partime_job ?? '',
                        passport: preference[0]?.passport ?? '',
                        working_city: preference[0]?.working_city ?? '',
                    },
                },
                references: {
                    data: {
                        brand_name: references[0]?.brand_name ?? '',
                        department: references[0]?.department ?? '',
                        email: references[0]?.email ?? '',
                        name: references[0]?.name ?? '',
                        phone_number: references[0]?.phone_number ?? '',
                        position: references[0]?.position ?? '',
                    },
                },
                sub_type: profileData?.sub_type ?? '',
                website: profileData?.website ?? '',
            },
        },
        organization_auth_map: {
            data: {
                organization: {
                    data: {
                        vc_theme: org?.vc_theme ?? '',
                        brand_name: org?.brand_name ?? '',
                        nature_of_business: org?.nature_of_business ?? [],
                        company_name: org?.company_name ?? '',
                        gst_pan: {
                            data: {
                                gst: gst_pan[0]?.gst ?? '',
                                pan: gst_pan[0]?.pan ?? '',
                                status: gst_pan[0]?.status ?? '',
                            },
                        },
                        image_url: org?.image_url ?? '',
                        no_of_employee: org?.no_of_employee ?? '',
                        contact: {
                            data: {
                                name: contact[0]?.name ?? '',
                                email: contact[0]?.email ?? '',
                                website: contact[0]?.website ?? '',
                                phone_number: contact[0]?.phone_number ?? '',
                            },
                        },
                        organization_location_map: {
                            data: {
                                location: {
                                    data: {
                                        area: location?.area ?? '',
                                        block_number: location?.block_number ?? '',
                                        city: location?.city ?? '',
                                        geolocation: {
                                            data: {
                                                latitude: location.geolocation[0]?.latitude ?? "",
                                                longitude: location.geolocation[0]?.longitude ?? "",
                                                other: {},
                                                type: location.geolocation[0]?.type ?? "",
                                            },
                                        },
                                        pincode: location?.pincode ?? '',
                                        state: location?.state ?? '',
                                    },
                                },
                            },
                        },
                        suppliers: {
                            data: {
                                area: suppliers[0]?.area ?? '',
                                scale: suppliers[0]?.scale ?? '',
                                coverage_area_list: suppliers[0]?.coverage_area_list ?? []
                            },
                        },
                    },
                },
            },
        },
    }

    return prefillFormData;
};

const profileDataExtracter = (profileDetails) => {
  if (Array.isArray(profileDetails.data)) {
    return profileDetails.data[0].data;
  } else return profileDetails.data;
};

export const getUpdateFormValues = (user) => {
  const formValues = {
    ...(user?.id ? { id: user.id } : {}),
    phone_number: user?.phone_number ?? "",
    email: user?.email ?? "",
    is_active: user?.is_active ?? true,

    profile: {
      data: [
        {
          id: user.id ?? "",
          first_name: profileDataExtracter(user.profile)?.first_name ?? "",
          last_name: profileDataExtracter(user.profile)?.last_name ?? "",
          gender: profileDataExtracter(user.profile)?.gender ?? "",
          dob: profileDataExtracter(user.profile)?.dob ?? "",
          image_url: profileDataExtracter(user.profile)?.image_url ?? "",
          website: profileDataExtracter(user.profile)?.website ?? "",
          vc_theme: profileDataExtracter(user.profile)?.vc_theme ?? "",
          cv_theme: profileDataExtracter(user.profile)?.cv_theme ?? "",
          sub_type: profileDataExtracter(user.profile)?.sub_type ?? "",
          type: profileDataExtracter(user.profile)?.type ?? "",
          awards: {
            data:
              [
                {
                  brand_name:
                    profileDataExtracter(user.profile).awards.data
                      ?.brand_name ?? "",
                  department:
                    profileDataExtracter(user.profile).awards.data
                      ?.department ?? "",
                  name:
                    profileDataExtracter(user.profile).awards.data?.name ?? "",
                  position:
                    profileDataExtracter(user.profile).awards.data?.position ??
                    "",
                },
              ] ?? [],
            on_conflict: {
              constraint: "awards_pkey",
              update_columns: ["brand_name", "department", "name", "position"],
            },
          },

          education: {
            data:
              [
                {
                  cgpa:
                    profileDataExtracter(user.profile).education.data?.cgpa ??
                    "",
                  //from_date: profileDataExtracter(user.profile).education.data?.from_date ?? "",
                  //to_date: profileDataExtracter(user.profile).education.data?.to_date ?? "",
                  institution_city:
                    profileDataExtracter(user.profile).education.data
                      ?.institution_city ?? "",
                  institution_name:
                    profileDataExtracter(user.profile).education.data
                      ?.institution_name ?? "",
                  level:
                    profileDataExtracter(user.profile).education.data?.level ??
                    "",
                  passout_year:
                    profileDataExtracter(user.profile).education.data
                      ?.passout_year ?? "",
                  study_field:
                    profileDataExtracter(user.profile).education.data
                      ?.study_field ?? "",
                },
              ] ?? [],
            on_conflict: {
              constraint: "education_pkey",
              update_columns: [
                "cgpa",
                "from_date",
                "to_date",
                "institution_city",
                "institution_name",
                "level",
                "passout_year",
                "study_field",
              ],
            },
          },

          experience: {
            data:
              [
                {
                  brand_name:
                    profileDataExtracter(user.profile).experience.data
                      ?.brand_name ?? "",
                  department:
                    profileDataExtracter(user.profile).experience.data
                      ?.department ?? "",
                  // from_date: profileDataExtracter(user.profile).experience.data?.from_date ?? "",
                  // to_date: profileDataExtracter(user.profile).experience.data?.to_date ?? "",
                  monthly_salary_text:
                    profileDataExtracter(user.profile).experience.data
                      ?.monthly_salary_text ?? "",
                  position:
                    profileDataExtracter(user.profile).experience.data
                      ?.position ?? "",
                  sub_category:
                    profileDataExtracter(user.profile).experience.data
                      ?.sub_category ?? "",
                  type:
                    profileDataExtracter(user.profile).experience.data?.type ??
                    "",
                  work_experience:
                    profileDataExtracter(user.profile).experience.data
                      ?.work_experience ?? "",
                },
              ] ?? [],
            on_conflict: {
              constraint: "experience_pkey",
              update_columns: [
                "brand_name",
                "department",
                "from_date",
                "to_date",
                "monthly_salary_text",
                "position",
                "sub_category",
                "type",
                "work_experience",
              ],
            },
          },
          preference: {
            data:
              [
                {
                  aadhar:
                    profileDataExtracter(user.profile).preference.data
                      ?.aadhar ?? "",
                  internship:
                    profileDataExtracter(user.profile).preference.data
                      ?.internship ?? false,
                  one_day_job:
                    profileDataExtracter(user.profile).preference.data
                      ?.one_day_job ?? false,
                  partime_job:
                    profileDataExtracter(user.profile).preference.data
                      ?.partime_job ?? false,
                  passport:
                    profileDataExtracter(user.profile).preference.data
                      ?.passport ?? "",
                  working_city:
                    profileDataExtracter(user.profile).preference.data
                      ?.working_city ?? "",
                },
              ] ?? [],
            on_conflict: {
              constraint: "preference_pkey",
              update_columns: [
                "aadhar",
                "internship",
                "one_day_job",
                "partime_job",
                "passport",
                "working_city",
              ],
            },
          },

          references: {
            data:
              [
                {
                  brand_name:
                    profileDataExtracter(user.profile).references.data
                      ?.brand_name ?? "",
                  department:
                    profileDataExtracter(user.profile).references.data
                      ?.department ?? "",
                  email:
                    profileDataExtracter(user.profile).references.data?.email ??
                    "",
                  name:
                    profileDataExtracter(user.profile).references.data?.name ??
                    "",
                  phone_number:
                    profileDataExtracter(user.profile).references.data
                      ?.phone_number ?? "",
                  position:
                    profileDataExtracter(user.profile).references.data
                      ?.position ?? "",
                },
              ] ?? [],

            on_conflict: {
              constraint: "reference_pkey",
              update_columns: [
                "brand_name",
                "department",
                "email",
                "name",
                "phone_number",
                "position",
              ],
            },
          },
        },
      ],
      on_conflict: {
        constraint: "profile_pkey",
        update_columns: [
          "first_name",
          "last_name",
          "gender",
          "dob",
          "image_url",
          "website",
          "vc_theme",
          "cv_theme",
          "sub_type",
          "type",
        ],
      },
    },
  };

  return formValues;
};

export const updateOrgFormValues = (user) => {
    const org = user.organization_auth_map.data.organization.data;
    const formValues = {
        object: {
            brand_name: org.brand_name ?? '',
            business_nature: org.business_nature ?? '',
            company_name: org.company_name ?? '',
            contact: {
                data: [{
                    email: org.contact.data.email ?? '',
                    name: org.contact.data.name ?? '',
                    phone_number: org.contact.data.phone_number ?? '',
                    website: org.contact.data.website ?? ''
                }],
                on_conflict: {
                    constraint: "contact_pkey",
                    update_columns: [
                        "created_at",
                        "email",
                        "id",
                        "is_active",
                        "name",
                        "phone_number",
                        "updated_at",
                        "website"
                    ]
                }
            },
            gst_pan: {
                data: [{
                        gst: org.gst_pan.data.gst ?? '',
                        pan: org.gst_pan.data.pan ?? '',
                        status: org.gst_pan.data.status ?? '',
                    }],
                on_conflict: {
                    constraint: "gst_pan_pkey",
                    update_columns: [
                        "created_at",
                        "gst",
                        "id",
                        "is_active",
                        "organization_id",
                        "pan",
                        "status",
                        "updated_at"
                    ]
                }
            },
            id: org.id,
            image_url: org.image_url ?? '',
            no_of_employee: org.no_of_employee.toString() ?? '',
            suppliers: {
                data: [{ 
                        area: org.suppliers.data.area ?? "",
                        scale: org.suppliers.data.scale ?? "",
                        coverage_area_list: org.suppliers.data.org.suppliers.data.scale ?? "" ?? ""

                }] ?? [],
                on_conflict: {
                    constraint: "supplier_pkey",
                    update_columns: [
                        "area",
                        "created_at",
                        "id",
                        "is_active",
                        "organization_id",
                        "scale",
                        "updated_at",
                        "coverage_area_list"
                    ]
                }
            },
            vc_theme: org.vc_theme ?? ""
        },

        on_conflict: {
        constraint: "profile_pkey",
        update_columns: [
          "brand_name",
          "business_nature",
          "company_name",
          "created_at",
          "id",
          "image_url",
          "is_active",
          "no_of_employee",
          "updated_at",
          "vc_theme",
        ],
      },
  
  };

  return formValues;
};

export const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const natureOfBusiness = [
  "Hotel",
  "Cafe",
  "Restaurant",
  "Microbreweries",
  "QSR-Quick Service Restaurant",
  "HR-HOReCa-Consultancy",
  "Security Guard-Consultancy",
  "Fast Food Restauant",
  "Bar Restaurant",
  "Lounge Bar",
  "Pub Bar",
  "Resorts",
  "Homestay",
  "Apartment- Homestay",
  "Spa",
  "GYM",
  "Housekeeping Agency",
  "Catering",
  "Industrial Catering",
  "Bakery",
  "Resto Bar",
  "Bar N Cafe",
  "Coffee Shop",
];

export const levelOfEducation = [
  "Undergraduate",
  "Postgraduate",
  "Diploma",
  "Certification",
];

export const monthlySalaries = [
  "Less than 20k m",
  "20k - 50k m",
  "50k - 75k m",
  "75k - 100k m",
];

export const responsiveFontSize = {
    fontSize: {
        xs: "14px",
        sm: '16px'
    },
};

export const getInitialValue = (value) => {
    if(value){
     return   Array.isArray(value) && value.length > 0 ? [...value] : [value];
    }return []
}
