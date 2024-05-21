import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import CREATE from "../graphql/create.graphql";

// Mutation
const withCreate = (Component: FunctionComponent) =>
  graphql(CREATE, {
    props: ({ mutate }) => ({
      createPost: async (object: Object) => {
        try {
          const {
            data: { post },
          } = await mutate({
            variables: { object },
            optimisticResponse: {
              __typename: "Mutation",
              createPost: {
                object,
                __typename: "INSERT_POSTS_ONE",
              },
            },
          });
          return post;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

export default withCreate;
