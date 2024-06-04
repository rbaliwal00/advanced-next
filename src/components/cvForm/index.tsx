import React from "react";
import { compose } from "@common";
import { SuperTokensWrapper } from "@modules/look";

import {
  withAddCvInfo,
  withGetCvInfo,
  withDeleteUserProfileAward,
  withDeleteUserProfileEducation,
  withDeleteUserProfileExperience,
  withDeleteUserProfilePreference,
  withDeleteUserProfileReference,
} from "./cvOperations";
import CVForm from "./cvFlow";

import tempCv from "./tempCv";

const UserCV = ({ ...props }) => {
  console.log("props---", props);
  if (props.loading) {
    return <div>Loading...</div>;
  }
  const { profile_data } = props;

  const deleteFunctionProps = {
    deleteAward: props.deleteAward,
    deleteEducation: props.deleteEducation,
    deleteExperience: props.deleteExperience,
    deletePreference: props.deletePreference,
    deleteReference: props.deleteReference,
  };
  return (
    <div>
      {/* <button  onClick={()=>{
            props.addCvFlow(tempCv.data, tempCv.on_conflict);
        }}>
            Add CV
        </button> */}
      <CVForm
        profile_data={profile_data}
        handleSubmitForm={props.addCvFlow}
        deleteFunctionProps={deleteFunctionProps}
      />
    </div>
  );
};

const WithApiWrapperComponent = compose(
  withGetCvInfo,
  withAddCvInfo,
  withDeleteUserProfileAward,
  withDeleteUserProfileEducation,
  withDeleteUserProfileExperience,
  withDeleteUserProfilePreference,
  withDeleteUserProfileReference,
)(UserCV);

const UserCVContainer = (props) => {
  return (
    <SuperTokensWrapper>
      <WithApiWrapperComponent {...props} />{" "}
    </SuperTokensWrapper>
  );
};

export default UserCVContainer;
