import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import UPDATE_ONCE from "../graphql/updateOnce.graphql"; // Make sure to update the path to your actual GraphQL file

const updatedColoumns = [
    "email",
    "phone_number",
    "is_active",
    "id"
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
                    });
                    console.log("🚀 ~ insertUserAuth: ~ data:", insert_user_auth_one, updatedColoumns);
                    return insert_user_auth_one;
                } catch (e) {
                    console.error(e);
                }
            },
        }),
    })(Component);

export default withInsert;
