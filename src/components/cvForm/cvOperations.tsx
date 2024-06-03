import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import ADD_CV_FLOW from "./graphql/addCvInfo.graphql";
import GET_CV_INFO from "./graphql/getCvInfo.graphql";
import DELETE_USER_PROFILE_AWARD from "./graphql/deleteUserProfileAward.graphql";
import DELETE_USER_PROFILE_EDUCATION from "./graphql/deleteUserProfileEducation.graphql";
import DELETE_USER_PROFILE_EXPERIENCE from "./graphql/deleteUserProfileExperience.graphql";
import DELETE_USER_PROFILE_PREFERENCE from "./graphql/deleteUserProfilePreference.graphql";
import DELETE_USER_PROFILE_REFERENCE from "./graphql/deleteUserProfileReference.graphql";

// Mutation
const withAddCvInfo = (Component: FunctionComponent) =>
  graphql(ADD_CV_FLOW, {
    props: ({ mutate }) => ({
      addCvFlow: async (object: Object, onConflict: any) => {
        try {
          const data = await mutate({
            variables: { data: object, on_conflict: onConflict },
            optimisticResponse: {
              __typename: "Mutation",
              createPost: {
                object,
                __typename: "InserUser",
              },
            },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

const withGetCvInfo = (Component: FunctionComponent) =>
  graphql(GET_CV_INFO, {
    options: {
      variables: {
        id: "34c3fdc2-d927-440d-b305-8ef8e1834678",
      },
    },
    props: ({ data }) => {
      const { loading, error, user_profile } = data;
      return { loading, error, profile_data: user_profile && user_profile[0] };
    },
  })(Component);

const withDeleteUserProfileAward = (Component: FunctionComponent) =>
  graphql(DELETE_USER_PROFILE_AWARD, {
    props: ({ mutate }) => ({
      deleteAward: async (id: string) => {
        try {
          const data = await mutate({
            variables: { id },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

const withDeleteUserProfileEducation = (Component: FunctionComponent) =>
  graphql(DELETE_USER_PROFILE_EDUCATION, {
    props: ({ mutate }) => ({
      deleteEducation: async (id: string) => {
        try {
          const data = await mutate({
            variables: { id },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

const withDeleteUserProfileExperience = (Component: FunctionComponent) =>
  graphql(DELETE_USER_PROFILE_EXPERIENCE, {
    props: ({ mutate }) => ({
      deleteExperience: async (id: string) => {
        try {
          const data = await mutate({
            variables: { id },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

const withDeleteUserProfilePreference = (Component: FunctionComponent) =>
  graphql(DELETE_USER_PROFILE_PREFERENCE, {
    props: ({ mutate }) => ({
      deletePreference: async (id: string) => {
        try {
          const data = await mutate({
            variables: { id },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

const withDeleteUserProfileReference = (Component: FunctionComponent) =>
  graphql(DELETE_USER_PROFILE_REFERENCE, {
    props: ({ mutate }) => ({
      deleteReference: async (id: string) => {
        try {
          const data = await mutate({
            variables: { id },
          });
          return data;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

export {
  withAddCvInfo,
  withGetCvInfo,
  withDeleteUserProfileAward,
  withDeleteUserProfileEducation,
  withDeleteUserProfileExperience,
  withDeleteUserProfilePreference,
  withDeleteUserProfileReference,
};
