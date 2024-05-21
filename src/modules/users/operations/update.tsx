import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import UPDATE from "../graphql/update.graphql";

// Mutation
const withUpdate = (Component: FunctionComponent) =>
  graphql(UPDATE, {
    props: ({ mutate }) => ({
      updatePost: async (object: Object) => {
        try {
          const {
            data: { post },
          } = await mutate({
            variables: { ...object },
            optimisticResponse: {
              __typename: "Mutation",
              updatePost: {
                ...object,
                __typename: "UPDATE_POST_ONE",
              },
            },
          });
          console.log("🚀 ~ update: ~ data:", post);
          return post;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  })(Component);

export default withUpdate;
