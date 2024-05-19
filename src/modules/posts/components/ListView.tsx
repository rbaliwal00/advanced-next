import React from "react";

const Component = (props) => {
  const { loadingPosts, posts = {} } = props;
  const { nodes = [] } = posts;
  if (loadingPosts) {
    return <>loading</>;
  }
  return (
    <div style={{ padding: "24px" }}>
      <div gutter={12}>
        {nodes.map((i) => (
          <div span={4}>
            <div>
              <h1>{i.title}</h1>
              <h3>{i.sub_title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
