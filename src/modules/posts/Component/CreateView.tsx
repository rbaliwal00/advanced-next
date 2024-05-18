import React from "react";

import PostForm from "./PostForm";

const Component = (props) => {
  // return <h1>Create Posts container</h1>;
  return (
    <div justify="center" align="middle">
      <div xs={12} lg={18} md={24}>
        <div spinning={false /* loading */}>
          <div
            style={{ borderRadius: "8px", padding: "12px" }}
            title={"Create"}
            bordered={true}
          >
            {/* {template && ( */}
            <PostForm
            // formType={formType}
            // templateData={template}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            // parent_id={parent_id}
            // edit={true}
            // collection={collection}
            />
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
