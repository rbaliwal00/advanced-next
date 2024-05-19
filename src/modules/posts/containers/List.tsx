import React from "react";
import {
  // withHookForPosts,
  withStateAndActionsForPosts,
} from "../resolvers";
import { compose } from "@modules/common";

import Component from "../components/ListView";
import { withPosts } from "../operations";

const Container = (props) => {
  console.log("🚀 ~ Container ~ props:", props);
  return <Component {...props} />;
};

export default compose(
  withStateAndActionsForPosts,
  withPosts,
  // withHookForPosts,
)(Container);
