import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useRouter } from "next/router";

import ITEM from "../graphql/item.graphql";

const withPosts = (Component: FunctionComponent) =>
  graphql(ITEM, {
    options: (props) => {
      const { router } = props;
      return {
        variables: {
          id: router?.query?.id || 24,
        },
      };
    },
    props: ({ data }) => {
      const { loading: loadingPost, error, post, refetch } = data as any;

      if (error) throw new Error(error.message);
      return {
        loadingPost,
        post,
        refetch,
      };
    },
  })(Component);

export default withPosts;
