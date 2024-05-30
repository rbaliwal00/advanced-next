
import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import GET_USER from "../graphql/getUser.graphql";

// Mutation
const withGetUser = (Component: FunctionComponent) =>
    graphql(GET_USER, {
        options: (props) => {
            const number = '8919729965';

            return {
                variables: { phone_number: number },
            };
        },
        props({ data }) {
            return { data };
        },
    })(Component);

export default  withGetUser;