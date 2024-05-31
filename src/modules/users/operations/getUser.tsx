
import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import GET_USER from "../graphql/getUser.graphql";

// Mutation
const withGetUser = (Component: FunctionComponent) =>
    graphql(GET_USER, {
        options: (props) => {
            const id = "e0597681-bbcb-4e86-b513-b5ebd5e821e9";

            return {
                variables: { id: id },
            };
        },
        props({ data }) {
            return { data.user_auth };
        },
    })(Component);

export default  withGetUser;