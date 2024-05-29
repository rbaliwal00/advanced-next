import React from "react";

import { compose } from "@common";

// import Component from "../components/CreateView";
// import FresherForm from "@components/form/FresherFlow";
import { withGetOne } from "../operations";



const Container = (props) => {
    const {
        user,
        loadingUserData
        // router: { push },
    } = props;
    console.log(user, loadingUserData)

    return <div/>
};

export default compose(withGetOne)(Container);
