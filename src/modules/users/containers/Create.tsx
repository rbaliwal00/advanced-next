import React from "react";

import { compose } from "@common";

import Component from "../components/CreateView";
import FresherForm from "@components/form/FresherFlow";
import { withCreatePost } from "../operations";
import { useRouter } from "next/router";
import { SuperTokensWrapper } from "@modules/look";

const testObject = {
  email: "user@example.com",
  phone_number: "9999900668",
  password: "user@1234",
  profile: {
    data: {
      vc_theme: "Vc theme 1",
      type: "Type 1",
      awards: {
        data: {
          brand_name: "Brand 1",
          department: "Department 1",
          name: "Some name",
          position: "Position 1",
        },
      },
      cv_theme: "CV theme 1",
      dob: "Today",
      education: {
        data: {
          cgpa: "5.5",
          from_date: "2023/05/01",
          to_date: "2024/03/01",
          institution_city: "City 1",
          institution_name: "Institution 1",
          level: "Level 1",
          passout_year: "2022",
          study_field: "Field 1",
        },
      },
      experience: {
        data: {
          brand_name: "Brand 1",
          department: "Department 1",
          from_date: "2022/03/03",
          to_date: "2023/03/04",
          montly_salary: "100000",
          position: "Position 1",
          sub_category: "Sub category 1",
          type: "Type 1",
          work_experience: "Experience 1",
        },
      },
      first_name: "Name 1",
      last_name: "Name 2",
      gender: "Brocolli",
      image_url: "Url 1",
      preference: {
        data: {
          aadhar: "Aadhar 1",
          internship: false,
          one_day_job: false,
          partime_job: false,
          passport: "Passport 1",
          working_city: "City 1",
        },
      },
      references: {
        data: {
          brand_name: "Name 1",
          department: "Department 1",
          email: "user@example.com",
          name: "user",
          phone_number: "1231231231",
          position: "Position 1",
        },
      },
      sub_type: "Sub type 1",
      website: "example.com",
    },
  },
  organization_auth_map: {
    data: {
      organization: {
        data: {
          vc_theme: "Vc Theme 2",
          brand_name: "Brand 1",
          business_nature: "Nature 1",
          company_name: "Company 1",
          gst_pan: {
            data: {
              gst: "Gst 1",
              pan: "Pan 1",
              status: "Pending",
            },
          },
          image_url: "some_url",
          no_of_employee: 10,
          contact: {
            data: {
              name: "Name 1",
              email: "user1@example.com",
              website: "example.com",
              phone_number: "9999900000",
            },
          },
          organization_location_map: {
            data: {
              location: {
                data: {
                  area: "Area 1",
                  block_number: "1/02",
                  city: "City 1",
                  geolocation: {
                    data: {
                      latitude: "12.21",
                      longitude: "21.12",
                      other: {},
                      type: "Type 1",
                    },
                  },
                  pincode: "123123",
                  state: "State 1",
                },
              },
            },
          },
          suppliers: {
            data: {
              area: "Area 1",
              scale: "large",
            },
          },
        },
      },
    },
  },
};
const Container = (props) => {
  const {
    createUserProfile,
    // router: { push },
  } = props;

  const router = useRouter();

  const onSubmit = async (object) => {
    console.log("check create here---", object);
    const result = await createUserProfile(object);
    if(result?.id){
      localStorage.setItem("currId", result.id);
      router.push("/users/get-one");
    }
  };
  return (
    <SuperTokensWrapper>
      <FresherForm {...props} onSubmit={onSubmit} />
    </SuperTokensWrapper>
  );
};

export default compose(withCreatePost)(Container);
