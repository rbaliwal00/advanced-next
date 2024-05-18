// import React from "react";
import {
    // withHookForPosts,
    withPosts,
    withStateAndActionsForPosts,
} from "../resolvers";
import { compose } from "@modules/common";

import Component from "../Component/ListView";

const Container = (props) => {
    console.log("🚀 ~ Container ~ props:", props);
    return <Component {...props} />;
};

export default compose(
    withStateAndActionsForPosts,
    withPosts,
    // withHookForPosts,
)(Container);
