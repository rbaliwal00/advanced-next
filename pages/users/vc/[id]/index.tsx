// import ViewCv from "@components/cv/view-cv/ViewCv";
import React from "react";
import GetOne from "@modules/users/containers/getOne";

const index = (props) => {
  const id = props.router.query.id;
  if (!props.router.isReady) {
    return <p>Loading...</p>;
  }

  console.log("check id on getONe---", id);
  return (
    <div>
      <GetOne isPublic id={id} {...props} />
    </div>
  );
};

export default index;
