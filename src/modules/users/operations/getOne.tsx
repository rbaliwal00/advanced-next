import React, { useState, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import GET_ONE from "../graphql/getOne.graphql";

const withGetOne = (Component: FunctionComponent) => {
    return (props: any) => {
        const [userId, setUserId] = useState<string | null>(null);

        useEffect(() => {
            if (props.isPublic) {
              const userId = props.id;
              setUserId(userId);
            } else {
              const storedUserId = localStorage.getItem("currId");
              setUserId(storedUserId);
            }
          }, [props.isPublic]);

        if (!userId) {
            return <div>Loading...</div>; // Or any other loading indicator
        }

        const EnhancedComponent = graphql(GET_ONE, {
            options: {
                variables: {
                    id: userId,
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
