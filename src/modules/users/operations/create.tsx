import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import CREATE from "../graphql/create.graphql";

// Mutation
const withCreate = (Component: FunctionComponent) =>
  graphql(CREATE, {
    props: ({ mutate }) => ({
      createUserProfile: async (object: Object) => {
        try {
          const {
            data: { insert_user_auth_one },
          } = await mutate({
            variables: {
              object,
              update_columns: ["email", "id", "type"],
            },
            optimisticResponse: {
              __typename: "Mutation",
              createPost: {
                object,
                __typename: "InserUser",
              },
            },
          });
          return insert_user_auth_one;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

export default withCreate;
