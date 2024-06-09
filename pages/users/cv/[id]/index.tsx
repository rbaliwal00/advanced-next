import ViewCv from "@components/cv/view-cv/ViewCv";
import React from "react";

const index = (props) => {
    const id = props.router.query.id;
  if(!props.router.isReady){
    return (
        <p>Loading...</p>
    )
  }
  return (
    <div>
      <ViewCv isPublic id={id} />
    </div>
  );
};

export default index;
