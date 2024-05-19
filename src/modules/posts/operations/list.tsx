import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import LISTS from "../graphql/list.graphql";

const withPosts = (Component: FunctionComponent) =>
  graphql(LISTS, {
    options: () => {
      return {
        variables: {
          limit: 10,
          // id: parseInt(getLastStringParamFromUrl(2, "set_id")),
          id: {},
        },
      };
    },
    props: ({ data }) => {
      const {
        loading: loadingPosts,
        error,
        posts,
        refetch: refetchPosts,
      } = data as any;

      if (error) throw new Error(error.message);
      return {
        loadingPosts,
        posts,
        refetchPosts,
      };
    },
  })(Component);

export default withPosts;
