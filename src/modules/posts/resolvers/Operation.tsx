import { FunctionComponent } from "react";
import { graphql } from "@apollo/client/react/hoc";

import POSTS_QUERY from "../graphql/Posts.graphql";
import {
    useHasuraSubscriptionWithCache,
    useHasuraSubscriptionWithFilter,
} from "@modules/common";

export const withPosts = (Component: FunctionComponent) =>
    graphql(POSTS_QUERY, {
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
                refetch,
            } = data as any;

            if (error) throw new Error(error.message);
            return {
                loadingPosts,
                posts,
                refetch,
            };
        },
    })(Component);
