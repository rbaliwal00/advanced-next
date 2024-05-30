import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import GET_ONE from "../graphql/getOne.graphql";

const withGetOne = (Component: FunctionComponent) =>
    graphql(GET_ONE, {
        options: () => {
            return {
                variables: {
                    // id: parseInt(getLastStringParamFromUrl(2, "set_id")),
                    id: "e0597681-bbcb-4e86-b513-b5ebd5e821e9",
                },
            };
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

export default withGetOne;
