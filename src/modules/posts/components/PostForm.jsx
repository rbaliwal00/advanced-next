import React from "react";
import { withFormik, Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import * as Yup from "yup";

import { FieldAdapter } from "@common";

const Forms = (props) => {
  const { formik, handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Box
        sx={{
          maxWidth: "608px",
          m: "auto",
          mt: "32px",
          px: "35px",
          py: "30px",
          boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: 2,
        }}
      >
        <FieldAdapter formik={formik} type="text" name="title" label="Title" />
        <FieldAdapter
          formik={formik}
          type="text"
          name="sub_title"
          label="Sub Title"
        />
        <FieldAdapter
          formik={formik}
          type="text"
          name="category"
          label="Category"
        />
        <FieldAdapter
          formik={formik}
          type="text"
          name="banner"
          label="Banner"
        />

        <Box display="flex" justifyContent={"end"} width="100%" fullWidth>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              width:
                typeof window != "undefined" && window.innerWidth >= 600
                  ? "444px"
                  : "100%",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

const PostFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { post } = props;

    let formProps = {
      ...(post?.id ? { id: post.id } : {}),
      title: post?.title ?? "",
      sub_title: post?.title ?? "",
      category: post?.category ?? [],
      banner: post?.banner ?? "",
    };

    return formProps;
  },

  async handleSubmit(param, { props: { onSubmit, resetForm } }) {
    const values = param.values || param;
    const refresh = param.refresh;
    // console.log(values);
    await onSubmit(values, refresh);
  },

  validationSchema: (props) =>
    Yup.object({
      title: Yup.string().required("Title is required"),
    }),

  ...(typeof window !== "undefined" && {
    displayName: window?.location?.pathname, // helps with React DevTools
  }),
});
export default PostFormWithFormik(Forms);
