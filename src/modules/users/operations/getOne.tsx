import React, { useState, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import GET_ONE from "../graphql/getOne.graphql";

const withGetOne = (Component: FunctionComponent) => {
  return (props: any) => {
    const { user } = props ?? {};
    if (!(props.isPublic ? props.id : user?.id)) {
      return <div>Loading...</div>; // Or any other loading indicator
    }

    const EnhancedComponent = graphql(GET_ONE, {
      options: {
        variables: {
          id: props.isPublic ? props.id : user?.id,
        },
      },
      props: ({ data }) => {
        const {
          loading: loadingUserData,
          error,
          user,
          refetch: refetchUserData,
        } = data as any;

        // if (error) throw new Error(error.message);
        return {
          loadingUserData,
          user,
          refetchUserData,
        };
      },
    })(Component);

    return <EnhancedComponent {...props} />;
  };
};

export default withGetOne;
