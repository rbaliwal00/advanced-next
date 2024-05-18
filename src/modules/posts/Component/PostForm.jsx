import React from "react";
import { withFormik } from "formik";

const Form = (props) => {
  return <h1>Create Posts container</h1>;
};

const PostFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { collection: post } = props;

    let formProps = {
      ...(post?.id ? { id: post.id } : {}),
      title: post?.title ?? "",
      sub_title: post?.title ?? "",
      category: post?.category ?? "",
      banner: post?.banner ?? "",
    };

    return formProps;
  },

  async handleSubmit(param, { props: { onFinish, resetForm } }) {
    const values = param.values || param;
    const refresh = param.refresh;
    // console.log(values);
    await onFinish(values, refresh);
  },

  validationSchema: (props) => FormSchema,

  ...(typeof window !== "undefined" && {
    displayName: window?.location?.pathname, // helps with React DevTools
  }),
});
export default PostFormWithFormik(Form);
