import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import DELETE from "../graphql/delete.graphql";

// Mutation
const withDelete = (Component: FunctionComponent) =>
  graphql(DELETE, {
    props: ({ mutate }) => ({
      deletePost: async (id: any) => {
        try {
          const {
            data: { post },
          } = await mutate({
            variables: { id },
            optimisticResponse: {
              __typename: "Mutation",
              deletePost: {
                id,
                __typename: "DELETE_POSTS_BY_PK",
              },
            },
          });
          return true;
          return post;
        } catch (e) {
          console.error(e);
          return false;
        }
      },
    }),
  })(Component);

export default withDelete;
