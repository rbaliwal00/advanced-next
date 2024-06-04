import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import UPDATE_ONCE from "../graphql/updateOnce.graphql"; // Make sure to update the path to your actual GraphQL file

const updatedColoumns = [
    "email",
    "is_active"
]

const     withInsert = (Component: FunctionComponent) =>
    graphql(UPDATE_ONCE, {
        props: ({ mutate }) => ({
            insertUserAuth: async (object: Object) => {
                try {
                    const {
                        data: { insert_user_auth_one },
                    } = await mutate({
                        variables: { object, update_coloumns: updatedColoumns },
                        optimisticResponse: {
                            __typename: "Mutation",
                            insert_user_auth_one: {
                                id: null,
                                email: object?.email,
                                profile: {
                                    id: null,
                                    first_name: object.profile?.data.first_name,
                                    __typename: "Profile", // Make sure to include the __typename field for nested objects
                                },
                                __typename: "UserAuth",
                            },
                        },
                    });
                    console.log("🚀 ~ insertUserAuth: ~ data:", insert_user_auth_one);
                    return insert_user_auth_one;
                } catch (e) {
                    console.error(e);
                }
            },
        }),
    })(Component);

export default withInsert;
