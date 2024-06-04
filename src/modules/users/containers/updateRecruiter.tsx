import React from "react";

import { compose } from "@common";
import { withInsertOrg, withGetOne } from "../operations";
import RecruiterForm from "@components/form/HirerFlow";
import { CircularProgress } from "@mui/material";
import {
  transformObject,
  updateOrgFormValues,
} from "@components/form/utilities";
import { SuperTokensWrapper } from "@modules/look";
import { useRouter } from "next/router";

const obj = {
  object: {
    brand_name: "Brand 1",
    business_nature: "Nature 1",
    company_name: "Company 1",
    contact: {
      data: [
        {
          id: "6bb166bf-2d41-4b61-9902-e89b6b6cd485",
          email: "example@example.com",
          name: "Contact 1",
          phone_number: "1123123123",
          website: "example.com",
        },
        {
          id: "cc9983cd-e36e-4dc5-ae5e-c5bc8116d3f4",
          email: "example@example.com",
          name: "Contact 2",
          phone_number: "1123123123",
          website: "example.com",
        },
      ],
      on_conflict: {
        constraint: "contact_pkey",
        update_columns: [
          "created_at",
          "email",
          "id",
          "is_active",
          "name",
          "organization_id",
          "phone_number",
          "updated_at",
          "website",
        ],
      },
    },
    gst_pan: {
      data: [
        {
          id: "dc6f9e42-56df-4730-b967-2789ddd85c33",
          gst: "GST",
          pan: "Pan",
          status: "Pending",
        },
        {
          id: "bc09945b-ceaa-424d-bcff-66381e23a9d4",
          gst: "GST 2",
          pan: "Pan 2",
          status: "Pending",
        },
      ],
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
          "updated_at",
        ],
      },
    },
    id: "4573d047-c866-4c86-b9da-222256c4e888",
    image_url: "Url",
    no_of_employee: "10",
    suppliers: {
      data: [
        {
          id: 1,
          area: "Area 1",
          scale: "Scale 1",
        },
        {
          id: 2,
          area: "Area 2",
          scale: "Scale 2",
        },
      ],
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
        ],
      },
    },
    vc_theme: "Theme 1",
  },
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
};

const Container = (props) => {
  const {
    insertUserOrganization,
    user,
    loadingUserData,
    //router: { push },
  } = props;

  const router = useRouter();

  const onSubmit = async (values) => {
    const newFormValues = updateOrgFormValues(values);
    //console.log("check modified values here---", newFormValues);
    const result = await insertUserOrganization(newFormValues.object);
    console.log("check result", result);
    if (result?.id) {
      localStorage.setItem("currId", values.id);
      setTimeout(() => {
        router.push("/users/getOther");
      }, 1000);
    }
    //push("/posts"); // Change the path according to your routing structure
  };

  if (loadingUserData) return <CircularProgress />;
  return (
    <SuperTokensWrapper>
      <RecruiterForm
        prefillData={transformObject(user).data}
        onSubmit={onSubmit}
      />
      ;
    </SuperTokensWrapper>
  );
};

export default compose(withInsertOrg, withGetOne)(Container);
